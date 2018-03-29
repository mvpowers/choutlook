import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/lib/fa';
import Message from './Message';

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  width: 350px;
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
  border-bottom: 1px solid #eaeaea
  padding: 10px;
  font-size: 14px;
`;

const testData = [
  { user: 'personA', message: 'so then I said to the guy...' },
  { user: 'personB', message: 'that is my shoe' },
  { user: 'personA', message: 'so then I said to the guy...' },
  { user: 'personB', message: 'that is my shoe' },
  { user: 'personA', message: 'so then I said to the guy...' },
  { user: 'personB', message: 'that is my shoe' },
];

export default () => (
  <Container>
    <Header>
      <Title>Inbox</Title>
      <Filter>
        <Text>Filter</Text>
        <FaChevronDown size={12} />
      </Filter>
    </Header>
    <Period>Today</Period>
    {testData.map((msg, i) => (
      <Message key={i} user={msg.user} msg={msg.message} />
    ))}
  </Container>
);
