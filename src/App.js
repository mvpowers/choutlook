import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import NewMessageBar from './components/NewMessageBar';
import IconsBar from './components/IconsBar';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const App = () => (
  <div className="App">
    <Navbar />
    <NewMessageBar />
    <Content>
      <IconsBar />
    </Content>
  </div>
);

export default App;
