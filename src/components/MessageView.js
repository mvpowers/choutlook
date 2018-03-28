import React from 'react';
import styled from 'styled-components';
import Reply from './Reply';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
`;

const Message = styled.div`
  background-color: #fff;
  border: 1px solid #eaeaea;
  margin: 10px;
`;

const Title = styled.div`
  padding: 20px;
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

const Text = styled.div`
  padding: 20px;
  font-size: 14px;
`;

export default () => (
  <Container>
    <Title>Re: Super Important Business</Title>
    <Message>
      <Sender>
        <Bubble>CH</Bubble>
        admin@choutlook.com
      </Sender>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet
        consequuntur culpa cupiditate delectus est explicabo fugit harum illum
        incidunt ipsam, minima neque nostrum odit officia placeat possimus
      </Text>
    </Message>
    <Reply />
  </Container>
);
