import styled from "styled-components";
import { IThemeProps } from "../../Types/index";
import { border } from "./Global";

export const StyledModal = styled.div<IThemeProps>`
  background-color: ${(props: IThemeProps) =>
    props.theme[0] == "black" ? "white" : props.theme[0]};
  text-align: center;
  ${border}
  z-index: 1000;

  h1 {
    padding: 1rem 1.6rem;
  }
`;

export const customStylesModal = `
display: flex;
align-items: center;
background-color: rgba(0, 0, 0, 0.9);
bottom: 0;
height: 100vh;
justify-content: center;
left: 0;
position: fixed;
right: 0;
top: 0;
width: 100vw;
z-index: 10;
`;
