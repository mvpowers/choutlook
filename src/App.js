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
      replyFocus: false,
      userCount: 0,
    };
  }

  componentDidMount() {
    const socket = openSocket(`http://${serverHost}:${serverPort}`);

    socket.on('broadcastMessage', data => {
      const decipher = crypto.createDecipher('aes192', this.state.password);
      let decrypted = decipher.update(data, 'hex', 'utf8');
      try {
        decrypted += decipher.final('utf8');
        decrypted = JSON.parse(decrypted);
      } catch (e) {
        decrypted = {username: 'admin', sendMsg: 'Error decrypting data'};
      }
      this.setState({
        displayMsg: [...this.state.displayMsg, {
          user: decrypted.username,
          message: decrypted.sendMsg,
          time: Date.now().toString(),
        }]
      })
    });

    socket.on('broadcastUserCount', data => {
      this.setState({ userCount: data });
    });
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSend = () => {
    const { password, sendMsg, username } = this.state;
    const msgObj = JSON.stringify({username, sendMsg});
    const cipher = crypto.createCipher('aes192', password);
    let encrypted = cipher.update(msgObj, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    socket.emit('createMessage', encrypted);
    this.setState({ sendMsg: '' });
  };

  handleDiscard = () => {
    this.setState({ sendMsg: '' });
  };

  handleKeyPress = e => {
    const { password, sendMsg, username } = this.state;
    if (!e.shiftKey && e.key === 'Enter') {
      const msgObj = JSON.stringify({username, sendMsg});
      const cipher = crypto.createCipher('aes192', password);
      let encrypted = cipher.update(msgObj, 'utf8', 'hex');
      encrypted += cipher.final('hex');

      socket.emit('createMessage', encrypted);
      this.setState({ sendMsg: '' });
    }
  };

  handleFocus = () => {
    this.setState({replyFocus: true});
  };

  handleBlur = () => {
    this.setState({replyFocus: false});
  };

  render() {
    const { displayMsg, sendMsg, password, username, replyFocus, userCount } = this.state;
    return (
      <Container>
        <Navbar password={password} handleChange={this.handleChange} />
        <NewMessageBar />
        <Content>
          {userCount}
          <IconsBar />
          <FolderList />
          <MessageList displayMsg={displayMsg} replyFocus={replyFocus} />
          <MessageView
            sendMsg={sendMsg}
            username={username}
            handleChange={this.handleChange}
            submitSendMsg={this.handleSend}
            discardSendMsg={this.handleDiscard}
            submitOnEnter={this.handleKeyPress}
            handleFocus={this.handleFocus}
            handleBlur={this.handleBlur}
          />
        </Content>
      </Container>
    );
  }
}
