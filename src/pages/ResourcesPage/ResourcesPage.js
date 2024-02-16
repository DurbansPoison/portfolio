// src/pages/ResourcesPage/ResourcesPage.js
import React from 'react';
import styled from 'styled-components';
import ResourcesLinksContainer from '../../components/ResourcesLinksContainer/ResourcesLinksContainer';

const ResourcesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const Title = styled.h1`
  color: #DDD;
`;

function ResourcesPage() {
  return (
    <ResourcesPageContainer>
      <Title>Resources Page</Title>
      <ResourcesLinksContainer /> {/* Include the ResourcesLinksContainer component */}
    </ResourcesPageContainer>
  );
}

export default ResourcesPage;
