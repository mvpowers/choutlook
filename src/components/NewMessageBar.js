import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/lib/fa';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f4f4f4;
  color: #5084aa;
`;

const Icon = styled.div`
  padding: 15px;

  &:hover {
    background-color: #005a9e;
  }
`;

export default () => (
  <Container>
    <Icon>
      <FaBars size={16} />
    </Icon>
  </Container>
);
