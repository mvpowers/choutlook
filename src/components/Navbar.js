import React from 'react';
import styled from 'styled-components';
import { IoAndroidApps } from 'react-icons/lib/io';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0078d7;
  color: #fff;
`;

const Section = styled.div`
  display: flex;
`;

const Icon = styled.div`
  padding: 15px;
`;

const Navbar = () => (
  <Container>
    <Section>
      <Icon>
        <IoAndroidApps size={16} />
      </Icon>
      <div>title</div>
      <div>input</div>
    </Section>
    <Section>
      <div>icon</div>
      <div>icon</div>
      <div>icon</div>
    </Section>
  </Container>
);

export default Navbar;
