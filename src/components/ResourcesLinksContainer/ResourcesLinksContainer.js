// src/components/ResourcesLinksContainer/ResourcesLinksContainer.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResourceLink = styled.a`
  color: #DDD; // Light grey for visibility against the dark background
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    color: #BBB; // Slightly lighter grey on hover for a subtle effect
  }
`;

const resources = [
  { name: "Blowback Bolt Weight Calculator", url: "https://10mmautocombat.wordpress.com/blowback-bolt-calculations/" },
  { name: "SAAMI", url: "https://saami.org/technical-information/" },
  // Add more resource links as needed
];

function ResourcesLinksContainer() {
  return (
    <Container>
      {resources.map((resource, index) => (
        <ResourceLink key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.name}
        </ResourceLink>
      ))}
    </Container>
  );
}

export default ResourcesLinksContainer;
