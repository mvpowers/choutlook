import React, {Component} from 'react';
import styled from 'styled-components';
import openSocket from 'socket.io-client';
import Navbar from './components/Navbar';
import NewMessageBar from './components/NewMessageBar';
import FolderList from './components/FolderList';
import IconsBar from './components/IconsBar';
import MessageList from './components/MessageList';
import MessageView from './components/MessageView';

require('dotenv').config();

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
`;


const testData = [
  { user: 'moderator', message: 'welcome to choutlook' },
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
    const socket = openSocket(`http://${serverHost}:${serverPort}`);
    socket.on('broadcastMessage', data => {
      this.setState({
        displayMsg: [...this.state.displayMsg, {
          user: 'test_user',
          message: data,
        }]
      })
    });
  }

  handleChange = e => {
    this.setState({ sendMsg: e.target.value });
  };

  handleSend = () => {
    socket.emit('createMessage', this.state.sendMsg);
    this.setState({ sendMsg: '' });
  };

  handleDiscard = () => {
    this.setState({ sendMsg: '' });
  };

  handleKeyPress = e => {
    if (!e.shiftKey && e.key === 'Enter') {
      socket.emit('createMessage', this.state.sendMsg);
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
