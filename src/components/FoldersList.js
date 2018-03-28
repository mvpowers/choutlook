import React from 'react';
import styled from 'styled-components';
import Folder from './Folder';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  color: #5084aa;
`;

export default () => (
  <Container>
    <Folder />
    <Folder />
    <Folder />
  </Container>
);
