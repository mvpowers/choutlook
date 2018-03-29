import React, { Component } from 'react';
import styled from 'styled-components';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaListUl,
  FaListOl,
} from 'react-icons/lib/fa';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin: 10px;
  flex: 1;
`;

const Sender = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  font-size: 12px;
  align-items: center;
`;

const Bubble = styled.div`
  display: inline-block;
  border-radius: 100px;
  background-color: #1e7145;
  color: #fff;
  padding: 10px 10px;
  margin: 10px;
`;

const Text = styled.textarea`
  width: 90%;
  height: 100px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  margin: 0 20px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
`;

const Tools = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px;
`;

const Icon = styled.div`
  padding: 10px;
  color: #666;

  &:hover {
    background-color: #eaeaea;
  }
`;

const Send = styled.div`
  background-color: #0078d7;
  color: #fff;
  padding: 8px 18px;
  margin: 20px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 900;
  display: inline-block;

  &:hover {
    background-color: #106ebe;
  }
`;

const Discard = styled.div`
  color: #333;
  padding: 8px 18px;
  margin: 20px 0;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 900;
  display: inline-block;

  &:hover {
    background-color: #dadada;
  }
`;

const icons = [
  <FaBold size={16} />,
  <FaItalic size={16} />,
  <FaUnderline size={16} />,
  <FaAlignCenter size={16} />,
  <FaAlignJustify size={16} />,
  <FaAlignLeft size={16} />,
  <FaAlignRight size={16} />,
  <FaListUl size={16} />,
  <FaListOl size={16} />,
];

export default class Reply extends Component {
  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }

  handleChange = e => {
    this.setState({ msg: e.target.value });
  };

  handleSend = () => {
    console.log('send message:', this.state.msg);
    this.setState({ msg: '' });
  };

  handleDiscard = () => {
    this.setState({ msg: '' });
  };

  handleKeyPress = e => {
    if (!e.shiftKey && e.key === 'Enter') {
      console.log('send message:', this.state.msg);
      this.setState({ msg: '' });
    }
  };

  render() {
    const { msg } = this.state;
    return (
      <Container>
        <Sender>
          <Bubble>CH</Bubble>
          admin@choutlook.com
        </Sender>
        <Text
          type="textarea"
          value={msg}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <Tools>
          {icons.map((icon, i) =>
          <Icon key={i}>
            {icon}
          </Icon>
          )}
        </Tools>
        <Send onClick={this.handleSend}>Send</Send>
        <Discard onClick={this.handleDiscard}>Discard</Discard>
      </Container>
    );
  }
}
