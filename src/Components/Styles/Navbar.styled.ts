import styled from "styled-components";
import { flexColumn } from "./Global";
import { IThemeProps } from "../../Types/index";

export const Sidenav = styled.div<IThemeProps>`
  ${flexColumn}
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 20%;
  overflow-x: auto;
  padding-top: 5.65rem;
  background-color: ${(props: IThemeProps) => props.theme[0]};

  a {
    padding: 1rem 4rem 1rem 2rem;
    text-decoration: none;

    h2 {
      text-align: left;
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
    }

    &:hover {
      background-color: white;
      h2 {
        color: black;
      }
    }
  }

  @media screen and (max-width: 400px) {
    min-width: 120px;
    max-width: 120px;

    padding-top: 4rem;
    a {
      min-width: 120px;
      max-width: 120px;
      padding: 0.8rem 1rem;
    }
  }
`;
