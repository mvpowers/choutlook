import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/lib/fa';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  padding-right: 100px;
  align-items: center;
  color: #333;
  font-weight: 400;
  font-size: 14px;

  &:hover {
    background-color: #eaeaea;
    color: #000;
  }
`;

const Icon = styled.div`
  padding: 15px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

export default () => (
  <Container>
    <Icon>
      <FaBars size={16} />
    </Icon>
    <Name>Testing</Name>
  </Container>
);
