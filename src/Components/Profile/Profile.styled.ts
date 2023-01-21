import styled from "styled-components";
import { IThemeProps } from "../../Types/index";

export const StyledProfile = styled.div.attrs({
  className: "Navbar__Profile",
})<IThemeProps>`
  display: flex;
  align-items: center;
  padding: 1rem;

  img {
    border-radius: 50%;
    heigth: 48px;
    width: 48px;
  }

  div {
    flex-grow: 1;
    margin-left: 1rem;
    p {
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
      font-weight: bold;
      font-size: 0.8rem;
      margin: 0;
      text-transform: capitalize;
    }
    button {
      background-color: transparent;
      border: none;
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
      coursor: pointer !important;
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
    }
  }
`;
