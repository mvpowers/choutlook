import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 30px;
  align-items: center;
  color: #005a9e;
  font-weight: 400;
  font-size: 14px;
`;

const FolderLink = ({ name }) => (
  <Container>
    <div>{name}</div>
  </Container>
);

FolderLink.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FolderLink;
