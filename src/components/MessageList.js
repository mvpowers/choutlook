import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/lib/fa';
import { Message, VisibilityTitle } from './';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  width: 350px;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
`;

const Title = styled.div`
  font-size: 17px;
  margin-left: 5px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #077bd8;
  align-items: center;
`;

const Text = styled.div`
  padding: 15px;
`;

const Period = styled.div`
  background-color: #f8f8f8;
  border-bottom: 1px solid #eaeaea;
  padding: 10px;
  font-size: 14px;
`;

export default class MessageList extends Component {
  componentDidUpdate() {
    if (this.props.replyFocus) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { displayMsg } = this.props;
    return (
      <Container>
        <Header>
          <Title>Inbox</Title>
          <Filter>
            <Text>Filter</Text>
            <FaChevronDown size={12} />
          </Filter>
        </Header>
        <Period>Today</Period>
        {displayMsg.map(msg => (
          <Message
            key={`${msg.user}_${msg.time}`}
            user={msg.user}
            msg={msg.message}
          />
        ))}
        <VisibilityTitle />
        <div
          ref={el => {
            this.el = el;
          }}
        />
      </Container>
    );
  }
}

MessageList.propTypes = {
  displayMsg: PropTypes.arrayOf(PropTypes.object).isRequired,
  replyFocus: PropTypes.bool.isRequired,
};
