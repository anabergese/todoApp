import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }

  body {
    font-family: "Roboto", sans-serif;
    h1,
    h3 {
      text-align: center;
      margin: 0 !important;
      padding: $primary-padding;
    }
    h4,
    h2 {
      margin: 0 !important;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
