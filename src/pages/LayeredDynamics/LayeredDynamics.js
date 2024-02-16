import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentfulClient from '../../utils/contentfulClient';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #0000; // A darker background for consistency
  color: #fdfdfd; // Light text color for better contrast on the dark background
  padding: 20px;
  text-align: center; // Center-aligns text
  min-height: 100vh; // Makes sure the container fills the viewport height
  display: flex;
  flex-direction: column;
  align-items: center; // Centers the content horizontally
  justify-content: center; // Centers the content vertically
`;

const PostContainer = styled.article`
  background-color: #282c34; // Slightly lighter than the Container for contrast
  color: #ffffff; // Keeping text readable against the dark background
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); // Enhanced shadow for depth
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px; // A bit more rounded for a modern look
  width: 80%; // Restricts the width for better readability
  max-width: 600px; // Ensures it doesn't get too wide on larger screens
`;

const Title = styled.h2`
  color: #fdfdfd; // Brand color for titles for consistency
`;

const PageDescription = styled.p`
  color: #ffffff; // White for readability
  margin-top: 0;
  margin-bottom: 20px;
  font-style: normal; // Assuming the rest of the app doesn't use italic by default
  font-size: 1.2em; // Slightly larger for emphasis
  width: 80%; // Matching the PostContainer width
  max-width: 600px; // Ensures consistency in width with PostContainer
`;

function LayeredDynamics() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'layeredDynamics',
        });
        setPosts(response.items);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <h1>Layered Dynamics</h1>
      <PageDescription>
       A Blog about 3d printed design.
      </PageDescription>
      {posts.map((post) => (
        <PostContainer key={post.sys.id}>
          <Title>{post.fields.title}</Title>
          {post.fields.body ? documentToReactComponents(post.fields.body) : null}
        </PostContainer>
      ))}
    </Container>
  );
}

export default LayeredDynamics;
