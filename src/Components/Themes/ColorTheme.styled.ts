import styled from "styled-components";
import { border } from "../App/Global";

export const StyledColorTheme = styled.div.attrs({
  className: "App__Content__ColorThemes",
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    ${border}
    border-style: solid;
    border-color: #65605f;
    border-width: 0.5px;
    cursor: pointer;
    margin: 2rem 0.6rem;
    height: 1rem;
    width: 1rem;

    &.active {
      height: 1.6rem;
      width: 1.6rem;
    }
  }

  @media screen and (max-width: 400px) {
    justify-content: center;
  }
`;
