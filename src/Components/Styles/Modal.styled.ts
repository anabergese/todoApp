import styled from "styled-components";
import { IThemeProps } from "../../Types/index";

export const StyledModal = styled.div<IThemeProps>`
  background-color: ${(props: IThemeProps) =>
    props.theme[0] == "black" ? "white" : props.theme[0]};
  text-align: center;
  border-radius: 8px;
  z-index: 1000;

  h1 {
    padding: 1rem 1.6rem;
  }
`;
