import { createGlobalStyle } from "styled-components";

const BoutonStyle = createGlobalStyle`
  .btn {
      height: 60px;
      background-color: #151336;
      border: 0px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 18px;
      color: #fff;
      font-family: 'Poppins';
      font-weight: 500;
      &.result {
        width: 100%;
        background-color: #6dc9bf;
        grid-column: 1 / 4;
      }
  }
`;

export default BoutonStyle;
