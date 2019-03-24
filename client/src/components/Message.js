import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 30px;
  border-bottom: 1px solid #eaeaea;
  font-size: 12px;
  word-wrap: break-word;

  &:hover {
    background-color: #eaeaea;
  }
`;

const Text = styled.div`
  color: #666;
`;

const Message = ({ user, msg }) => (
  <Container>
    <div>{user}@choutlook.com</div>
    <Text>{msg}</Text>
  </Container>
);

Message.propTypes = {
  user: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Message;
