import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const flexColumn = `
display: flex;
flex-direction: column;
`;

export const borderRadius = `0.188rem`;

export const border = `
border-radius: ${borderRadius};
border-width: 0;
`;

export const letterSpacing = `
letter-spacing: 0.05rem;
`;

export const StyledApp = styled.div.attrs({
  className: "App",
})`
  display: flex;
`;

export const Content = styled.div.attrs({
  className: "App__Content",
})`
  ${flexColumn}
  flex-grow: 1;
`;

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    h1,h2 {
      color: black;
      font-size: 1rem;
      ${letterSpacing}
      margin: 0 !important;
      text-align: center;
    }

    @media screen and (max-width: 400px) {
      * {
      font-size: 0.6rem !important;
      }
      }
  }
`;
