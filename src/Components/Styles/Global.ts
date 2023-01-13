import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const flexColumn = `
display: flex;
flex-direction: column;
`;

export const StyledApp = styled.div`
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  ${flexColumn}
  flex-grow: 1;
`;

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
    letter-spacing: 0.05rem;
  }

  body {
    font-family: 'Roboto', sans-serif;
    h1,h2 {
      font-size: 1rem;
      text-align: center;
      margin: 0 !important;
      color: black;
    }

    @media screen and (max-width: 400px) {
      * {
      font-size: 0.8rem !important;
      }
      }
  }
`;
