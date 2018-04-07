import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/lib/fa';

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
    color: #000;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

const Icon = styled.div`
  padding: 15px;
`;

const FolderSection = ({ name }) => (
  <Container>
    <Icon>
      <FaChevronDown size={12} />
    </Icon>
    <Name>{name}</Name>
  </Container>
);

FolderSection.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FolderSection;
