import React, {Component} from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import {
  Navbar,
  NewMessageBar,
  FolderList,
  IconsBar,
  MessageList,
  MessageView,
} from './components';

require('dotenv').config();
const crypto = require('crypto');

const serverHost = process.env.SERVER_HOST || '127.0.0.1';
const serverPort = process.env.SERVER_PORT || '3001';
const socket = openSocket(`http://${serverHost}:${serverPort}`);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      displayMsg: [],
      sendMsg: '',
      password: '',
      username: '',
    };
  }

  componentDidMount() {
    const socket = openSocket(`http://${serverHost}:${serverPort}`);
    socket.on('broadcastMessage', encrypted => {
      const decipher = crypto.createDecipher('aes192', this.state.password);
      let decrypted = decipher.update(encrypted.text, 'hex', 'utf8');
      try {
        decrypted += decipher.final('utf8');
      } catch (e) {
        decrypted = 'Error decrypting data';
      }
      this.setState({
        displayMsg: [...this.state.displayMsg, {
          user: encrypted.username,
          message: decrypted,
          time: Date.now().toString(),
        }]
      })
    });
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSend = () => {
    const { password, sendMsg, username } = this.state;
    const cipher = crypto.createCipher('aes192', password);
    let encrypted = cipher.update(sendMsg, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    socket.emit('createMessage', {
      username,
      text: encrypted,
    });
    this.setState({ sendMsg: '' });
  };

  handleDiscard = () => {
    this.setState({ sendMsg: '' });
  };

  handleKeyPress = e => {
    const { password, sendMsg, username } = this.state;
    if (!e.shiftKey && e.key === 'Enter') {
      const cipher = crypto.createCipher('aes192', password);
      let encrypted = cipher.update(sendMsg, 'utf8', 'hex');
      encrypted += cipher.final('hex');

      socket.emit('createMessage', {
        username,
        text: encrypted,
      });
      this.setState({ sendMsg: '' });
    }
  };

  render() {
    const { displayMsg, sendMsg, password, username } = this.state;
    return (
      <Container>
        <Navbar password={password} handleChange={this.handleChange} />
        <NewMessageBar />
        <Content>
          <IconsBar />
          <FolderList />
          <MessageList displayMsg={displayMsg} />
          <MessageView
            sendMsg={sendMsg}
            username={username}
            handleChange={this.handleChange}
            submitSendMsg={this.handleSend}
            discardSendMsg={this.handleDiscard}
            submitOnEnter={this.handleKeyPress}
          />
        </Content>
      </Container>
    );
  }
}
