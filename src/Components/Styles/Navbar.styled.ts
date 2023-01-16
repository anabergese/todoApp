import styled from "styled-components";
import { flexColumn } from "./Global";
import { IThemeProps } from "../../Types/index";

export const Sidenav = styled.div<IThemeProps>`
  ${flexColumn}
  background-color: ${(props: IThemeProps) => props.theme[0]};
  top: 0;
  position: sticky;
  width: 18%;
  height: 100vh;

  .Navbar__Logo {
    display: flex;
    padding: 1rem;
  }

  .Navbar__Separator {
    display: block;
    flex: 1;
  }

  a {
    text-decoration: none;
    transition-duration: 185ms;
    transition-timing-function: ease;
    padding: 1rem;

    h2 {
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
      text-align: left;
    }

    &:hover {
      background-color: white;
      h2 {
        color: black;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 32%;
    a {
      padding: 0.6rem 0.8rem 0.6rem;
    }
    .Navbar__Logo {
      padding: 0.8rem;
    }
  }
`;
