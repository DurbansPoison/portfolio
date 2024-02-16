import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

// const HeaderTitle = styled.h1`
//   margin: 0;
// `;

// Adding styled component for the logo image
const LogoImage = styled.img`
  max-width: 20%;
  height: auto; // Preserve aspect ratio
`;

function Header() {
  const logoSrc = `${process.env.PUBLIC_URL}/assets/logo-with-text.svg`;

  return (
    <StyledHeader>
      {/* <HeaderTitle>DurbanPoisonPew</HeaderTitle> */}
      {/* Use the LogoImage styled component for the logo */}
      <LogoImage src={logoSrc} alt="Logo with Text that says DurbanPoisonPew" />
    </StyledHeader>
  );
}

export default Header;
