// src/components/Common/Footer.js
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterText>© 2024 My Portfolio. All rights reserved.</FooterText>
    </StyledFooter>
  );
}

export default Footer;
