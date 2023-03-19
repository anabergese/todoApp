import styled from "styled-components";
import { flexColumn } from "../App/Global";
import { IThemeProps } from "../../Types/index";

export const Sidenav = styled.div.attrs({
  className: "App__Navbar",
})<IThemeProps>`
  ${flexColumn}
  background-color: ${(props: IThemeProps) => props.theme[0]};
  top: 0;
  position: sticky;
  width: 16%;
  height: 100vh;

  .Navbar__Logo {
    display: flex;
    padding: 1rem;
    img {
      width: 28%;
      border-radius: 1rem;
    }
  }

  .Navbar__Separator {
    display: block;
    flex: 1;
  }

  a {
    text-decoration: none;
    transition-duration: 185ms;
    transition-timing-function: ease;
    padding: 0.5rem;
    margin: 0.5rem 0.75rem;

    h2 {
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
      text-align: left;
    }

    &:hover {
      background-color: ${(props: IThemeProps) => props.theme[1]};
      border-radius: 8px;
      h2 {
        color: black;
      }
    }

    &:focus {
      background-color: white;
      border-radius: 8px;
      h2 {
        color: black;
        font-weight: bold;
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
