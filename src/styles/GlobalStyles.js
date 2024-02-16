// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
		margin-bottom:40px;
    padding: 0;
		padding-bottom: 00px;
    background-color: #000; /* Black background */
    color: #DDD; /* Light grey text for contrast */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`;

export default GlobalStyles;
