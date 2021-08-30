import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }

  p {
    margin-block: ${({ theme }) => theme.font.spacings.medium};
  }

  ul, ol {
    margin-block: ${({ theme }) => theme.font.spacings.medium};
    padding: ${({ theme }) => theme.font.spacings.medium};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin-block: ${({ theme }) => theme.font.spacings.large};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
