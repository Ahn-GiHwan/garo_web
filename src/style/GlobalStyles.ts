import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
    font-family: 'Nanum Gothic', sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  
  input, select, textarea {
    outline: none;
  }
`;

export default GlobalStyles;
