import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import NewMessageBar from './components/NewMessageBar';
import FolderList from './components/FolderList';
import IconsBar from './components/IconsBar';
import MessageList from './components/MessageList';

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

const App = () => (
  <Container>
    <Navbar />
    <NewMessageBar />
    <Content>
      <IconsBar />
      <FolderList />
      <MessageList />
    </Content>
  </Container>
);

export default App;
