import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
  body {
    margin: 2rem;
    background: #0D0C1D;
    color: #EFFFFA;;
    font-family: system-ui;
    font-size: 1.8rem;
    line-height: 1.5;
  }
  .calculatrice {
    width: 250px;
    margin: 100px auto 0;
  }
  .calculatrice input {
    width: 100%;
    height: 60px;
    padding: 0 15px;
    font-size: 18px;
    font-family: 'Poppins';
    text-align: right;
  }
  .controls {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;

export default GlobalStyle;
