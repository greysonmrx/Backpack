import { createGlobalStyle } from "styled-components";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-quill/dist/quill.snow.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
  }

  body, input, button {
    font-family: 'Biotif', sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none
  }

  button {
    cursor: pointer;
  }
`;
