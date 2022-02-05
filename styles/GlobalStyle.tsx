import { createGlobalStyle } from 'styled-components';
import THEME from '../constants/theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${THEME.COLOR.main}
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
