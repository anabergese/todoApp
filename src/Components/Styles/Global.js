import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
    letter-spacing: 0.05rem;
  }

  body {
    font-family: "Roboto", sans-serif;
    h1,
    h3, h4 {
      text-align: center;
      margin: 0 !important;
      color: black;
    }
  
`;
