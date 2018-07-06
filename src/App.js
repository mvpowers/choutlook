import React, { Component } from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import { Helmet } from 'react-helmet';
import {
  Navbar,
  NewMessageBar,
  FolderList,
  IconsBar,
  MessageList,
  MessageView,
} from './components';

const config = require('./config');
const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

const serverHost = config.SERVER_HOST || '127.0.0.1';
const serverPort = config.SERVER_PORT || '3001';
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
      username: 'anonymous',
      editingUsername: false,
      replyFocus: false,
      unreadMsg: false,
      sessionId: uuidv4(),
    };
  }

  componentDidMount() {
    const { password, replyFocus, sessionId } = this.state;
    socket.on('broadcastMessage', data => {
      const decipher = crypto.createDecipher('aes192', password);
      let decrypted = decipher.update(data, 'hex', 'utf8');
      try {
        decrypted += decipher.final('utf8');
        decrypted = JSON.parse(decrypted);
      } catch (e) {
        decrypted = { username: 'admin', sendMsg: 'Error decrypting data' };
      }
      this.setState({
        displayMsg: [
          ...this.state.displayMsg,
          {
            user: decrypted.username,
            message: decrypted.sendMsg,
            sessionId: decrypted.sessionId,
            time: Date.now().toString(),
          },
        ],
      });
      if (!replyFocus && decrypted.sessionId !== sessionId) {
        this.setState({ unreadMsg: true });
      }
    });

    socket.on('userConnect', () => {
      this.setState({
        displayMsg: [
          ...this.state.displayMsg,
          {
            user: 'admin',
            message: 'User has entered chat',
            time: Date.now().toString(),
          },
        ],
      });
    });

    socket.on('userDisconnect', () => {
      this.setState({
        displayMsg: [
          ...this.state.displayMsg,
          {
            user: 'admin',
            message: 'User has left chat',
            time: Date.now().toString(),
          },
        ],
      });
    });
  }

  toggleEditUsername = () => {
    this.setState(prevState => ({
      editingUsername: !prevState.editingUsername,
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSend = () => {
    const { password, sendMsg, username, sessionId } = this.state;
    const msgObj = JSON.stringify({ username, sendMsg, sessionId });
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
    const { password, sendMsg, username, sessionId } = this.state;

    this.setState({ unreadMsg: false });

    if (!e.shiftKey && e.key === 'Enter') {
      const msgObj = JSON.stringify({ username, sendMsg, sessionId });
      const cipher = crypto.createCipher('aes192', password);
      let encrypted = cipher.update(msgObj, 'utf8', 'hex');
      encrypted += cipher.final('hex');

      socket.emit('createMessage', encrypted);
      this.setState({ sendMsg: '' });
    }
  };

  handleFocus = () => {
    this.setState({ replyFocus: true, unreadMsg: false });
  };

  handleBlur = () => {
    this.setState({ replyFocus: false, unreadMsg: false });
  };

  render() {
    const {
      displayMsg,
      sendMsg,
      password,
      username,
      replyFocus,
      editingUsername,
      unreadMsg,
    } = this.state;
    return (
      <Container>
        <Navbar password={password} handleChange={this.handleChange} />
        <NewMessageBar />
        <Content>
          <IconsBar />
          <FolderList />
          <MessageList displayMsg={displayMsg} replyFocus={replyFocus} />
          <MessageView
            sendMsg={sendMsg}
            username={username}
            editingUsername={editingUsername}
            toggleEditUsername={this.toggleEditUsername}
            handleChange={this.handleChange}
            submitSendMsg={this.handleSend}
            discardSendMsg={this.handleDiscard}
            submitOnEnter={this.handleKeyPress}
            handleFocus={this.handleFocus}
            handleBlur={this.handleBlur}
          />
        </Content>
        <Helmet>
          <title>{unreadMsg ? 'Choutlook*' : 'Choutlook'}</title>
        </Helmet>
      </Container>
    );
  }
}
