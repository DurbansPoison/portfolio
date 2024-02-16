// src/components/LinksContainer/LinksContainer.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  color: #DDD; // Light grey for visibility against the dark background
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    color: #BBB; // Slightly lighter grey on hover for a subtle effect
  }
`;

const links = [
	{name: "Odysee", url: "https://odysee.com/@DurbanPoisonPew:9"},
	{name: "DIY Mac Beta Room", url: "https://matrix.to/#/%23AWCY-DIYMacUpper:matrix.org"},
	{name: "Defcad", url: "https://defcad.com/users/durbanpoisonpew/"},
	{name: "Instagram", url: "https://www.instagram.com/durbanpoisonpew/"},
	{name: "Twitter/X", url: "https://twitter.com/durbanpoisonpew"},
  { name: "Are We Cool Yet? Waiting Room", url: "https://matrix.to/#/%23AWCYwaitingroom:matrix.org" },
  { name: "Are We Cool Yet? Website", url: "https://arewecoolyet.wtf/" },
  // Add more links as needed
];

function LinksContainer() {
  return (
    <Container>
      {links.map((link, index) => (
        <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </Link>
      ))}
    </Container>
  );
}

export default LinksContainer;
