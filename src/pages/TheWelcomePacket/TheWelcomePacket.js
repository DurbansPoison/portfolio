// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const BlogPostContainer = styled.div`
//   color: #DDD; // Light grey text for dark theme
//   background-color: #000; // Black background
//   padding: 20px;
//   margin: 20px;
//   border-radius: 8px;
// `;

// const fetchPosts = async () => {
//   const spaceId = 'your_space_id';
//   const accessToken = 'your_access_token';
//   const environmentId = 'master'; // or your custom environment
//   const query = `
//     {
//       blogPostCollection {
//         items {
//           sys {
//             id
//           }
//           title
//           content {
//             json
//           }
//         }
//       }
//     }
//   `;

//   const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({ query }),
//   });

//   const { data } = await response.json();
//   return data.blogPostCollection.items;
// };

// function BlogPage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts().then(setPosts);
//   }, []);

//   return (
//     <div>
//       {posts.map(post => (
//         <BlogPostContainer key={post.sys.id}>
//           <h2>{post.title}</h2>
//           {documentToReactComponents(post.content.json)}
//         </BlogPostContainer>
//       ))}
//     </div>
//   );
// }

// export default BlogPage;
// src/pages/BlogPage/BlogPage.js
// Assuming your BlogPage.js is structured as described above
// src/pages/BlogPage/BlogPage.js
import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentfulClient from '../../utils/contentfulClient';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #20232a; // A darker background for consistency
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

function TheWelcomePacket() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'theWelcomeGuide',
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
      <h1>The Welcome Packet</h1>
      <PageDescription>
        Welcome to our guide! This page is dedicated to helping newcomers get started, make educated decisions, and get familiarized with the culture.
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

export default TheWelcomePacket;
