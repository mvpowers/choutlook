import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  color: #666;
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

const Folder = ({ name, icon }) => (
  <Container>
    <Icon>{icon}</Icon>
    <Name>{name}</Name>
  </Container>
);

Folder.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    props: PropTypes.shape({
      size: PropTypes.number,
    }),
  }).isRequired,
};

export default Folder;
