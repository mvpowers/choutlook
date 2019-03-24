import React from 'react';
import styled from 'styled-components';
import {
  FaCheckSquareO,
  FaEnvelopeO,
  FaCalendar,
  FaGroup,
} from 'react-icons/lib/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #f4f4f4;
  color: #005a9e;
`;

const Icon = styled.div`
  padding: 15px;

  &:hover {
    background-color: #c7e0f4;
  }
`;

export default () => (
  <Container>
    <Icon>
      <FaEnvelopeO size={16} />
    </Icon>
    <Icon>
      <FaCalendar size={16} />
    </Icon>
    <Icon>
      <FaGroup size={16} />
    </Icon>
    <Icon>
      <FaCheckSquareO size={16} />
    </Icon>
  </Container>
);
