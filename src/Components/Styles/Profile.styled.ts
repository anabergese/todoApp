import styled from "styled-components";
import { IThemeProps } from "../../Types/index";

export const StyledProfile = styled.div<IThemeProps>`
  display: flex;
  align-items: center;
  margin: 1rem 4rem 1rem 2rem;

  img {
    border-radius: 50%;
    width: 48px;
    heigth: 48px;
  }

  div {
    flex-grow: 1;
    margin-left: 1rem;
    p {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 0.8rem;
      margin: 0;
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
    }
    button {
      coursor: pointer !important;
      font-size: 0.8rem;
      border: none;
      padding: 0;
      margin: 0;
      background-color: transparent;
      color: ${(props: IThemeProps) =>
        props.theme[0] === "black" ? props.theme[1] : "black"};
    }
  }
`;
