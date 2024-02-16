// src/components/Common/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000;
  padding: 5px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    color: #04d9ff;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
        <NavItem><StyledLink to="/layereddynamics">Layered Dynamics</StyledLink></NavItem>
        <NavItem><StyledLink to="/resources">Resources</StyledLink></NavItem>
        <NavItem><StyledLink to="/readme-generator">README Generator</StyledLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;
