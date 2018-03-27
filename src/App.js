import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewMessageBar from './components/NewMessageBar';

const App = () => (
  <div className="App">
    <Navbar />
    <NewMessageBar />
  </div>
);

export default App;
