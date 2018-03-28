import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import NewMessageBar from './components/NewMessageBar';
import FoldersList from './components/FoldersList';
import IconsBar from './components/IconsBar';

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
      <FoldersList />
    </Content>
  </Container>
);

export default App;
