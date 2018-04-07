import React from 'react';
import styled from 'styled-components';
import { FaBars, FaPlus } from 'react-icons/lib/fa';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f4f4f4;
  color: #5084aa;
`;

const Icon = styled.div`
  padding: 15px;

  &:hover {
    background-color: #c7e0f4;
  }
`;

const NewMessage = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;

  &:hover {
    background-color: #c7e0f4;
  }
`;

export default () => (
  <Container>
    <Icon>
      <FaBars size={16} />
    </Icon>
    <NewMessage>
      <Icon>
        <FaPlus size={16} />
      </Icon>
      <div>New message</div>
    </NewMessage>
  </Container>
);
