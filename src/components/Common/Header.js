// src/components/Common/Header.js
import React from 'react';
import styled from 'styled-components';
import ModelViewer from '../ModelViewer/ModelViewer';

const StyledHeader = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

function Header() {
  return (
    <StyledHeader>
			<ModelViewer />
      <HeaderTitle>DurbanPoisonPew</HeaderTitle>
    </StyledHeader>
  );
}

export default Header;
