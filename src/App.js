import React, { Component } from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import Navbar from './components/Navbar';
import NewMessageBar from './components/NewMessageBar';
import FolderList from './components/FolderList';
import IconsBar from './components/IconsBar';
import MessageList from './components/MessageList';
import MessageView from './components/MessageView';

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
`;

const socket = openSocket('http://localhost:3001');

const testData = [
  { user: 'personA', message: 'so then I said to the guy...' },
  { user: 'personB', message: 'that is my shoe' },
  { user: 'personA', message: 'so then I said to the guy...' },
  { user: 'personB', message: 'that is my shoe' },
  { user: 'personA', message: 'so then I said to the guy...' },
  { user: 'personB', message: 'that is my shoe' },
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      displayMsg: testData,
      sendMsg: '',
    };
  }

  componentDidMount() {
    const socket = openSocket('http://localhost:3001');
    socket.on('postMessage', data => this.setState({ messages: data }));
  }

  handleChange = e => {
    this.setState({ sendMsg: e.target.value });
  };

  handleSend = () => {
    socket.emit('postMessage', this.state.sendMsg);
    this.setState({ sendMsg: '' });
  };

  handleDiscard = () => {
    this.setState({ sendMsg: '' });
  };

  handleKeyPress = e => {
    if (!e.shiftKey && e.key === 'Enter') {
      socket.emit('postMessage', this.state.sendMsg);
      this.setState({ sendMsg: '' });
    }
  };

  render() {
    const { displayMsg, sendMsg } = this.state;
    return (
      <Container>
        <Navbar />
        <NewMessageBar />
        <Content>
          <IconsBar />
          <FolderList />
          <MessageList displayMsg={displayMsg} />
          <MessageView
            sendMsg={sendMsg}
            updateSendMsg={this.handleChange}
            submitSendMsg={this.handleSend}
            discardSendMsg={this.handleDiscard}
            submitOnEnter={this.handleKeyPress}
          />
        </Content>
      </Container>
    );
  }
}
