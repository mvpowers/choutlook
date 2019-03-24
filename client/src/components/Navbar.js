import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaTh, FaCog, FaQuestion, FaSkype } from 'react-icons/lib/fa';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0078d7;
  color: #fff;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.div`
  padding: 15px;

  &:hover {
    background-color: #005a9e;
  }
`;

const Title = styled.div`
  font-size: 17px;
  margin: 0 30px;
`;

const StyledInput = styled.input`
  background-color: #b3d7f3;
  border: 1px solid #0078d7;
  border-radius: 4px;
  padding: 5px;
  color: #333;
`;

const Navbar = ({ password, handleChange }) => (
  <Container>
    <Section>
      <Icon>
        <FaTh size={16} />
      </Icon>
      <Title>Choutlook</Title>
      <StyledInput
        id="password"
        type="text"
        placeholder="Search"
        value={password}
        onChange={handleChange}
      />
    </Section>
    <Section>
      <Icon>
        <FaSkype size={16} />
      </Icon>
      <Icon>
        <FaCog size={16} />
      </Icon>
      <Icon>
        <FaQuestion size={16} />
      </Icon>
    </Section>
  </Container>
);

Navbar.propTypes = {
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Navbar;
