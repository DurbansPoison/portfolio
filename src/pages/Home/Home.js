// src/pages/Home/Home.js
import React from 'react';
import styled from 'styled-components';
import LinksContainer from '../../components/LinksContainer/LinksContainer';
import ModelViewer from '../../components/ModelViewer/ModelViewer'

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000; /* Ensures the background is black */
`;

const Title = styled.h1`
  color: #DDD; /* Dark grey color for text */
`;

function Home() {
  return (
    <HomePageContainer>
		<ModelViewer />
      <Title>Where You Can Find Me.</Title>
	  <LinksContainer />
    </HomePageContainer>
  );
}

export default Home;
