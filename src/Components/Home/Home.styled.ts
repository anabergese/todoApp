import styled from "styled-components";
import { IThemeProps } from "../../Types/index";
import { border } from "../App/Global";

export const StyledHome = styled.div<IThemeProps>`
  display: flex;
  align-items: center;
  align-self: center;
  background-color: ${(props: IThemeProps) => props.theme[0]};
  ${border}
  justify-content: space-between;
  height: 10%;
  margin: 2rem;
  padding: 0.5rem 2rem;
  width: 60%;

  h2 {
    color: ${(props: IThemeProps) =>
      props.theme[0] == "black" ? "white" : "black"};
  }

  @media screen and (max-width: 400px) {
    padding: 0.5rem 1rem;
    h2 {
      text-align: left;
    }
  }
`;
