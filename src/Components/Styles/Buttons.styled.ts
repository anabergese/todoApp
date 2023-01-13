import styled from "styled-components";
import { IButtonsProps } from "../../Types/index";
import { border, letterSpacing } from "./Global";

export const StyledButton = styled.button<IButtonsProps>`
  background-color: ${(props: IButtonsProps) =>
    props.submitbtn ? props.theme[0] : props.theme[1]};
  ${border}
  color: ${(props: IButtonsProps) =>
    props.theme[0] == "black" && props.submitbtn ? "white" : "black"};
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  font-weight: ${(props: IButtonsProps) =>
    props.submitbtn ? "700" : "normal"};

  ${letterSpacing}
  margin: 1rem 0.25rem;
  padding: 0.4rem 1.2rem;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    font-size: ${(props: IButtonsProps) =>
      props.submitbtn ? "0.8rem" : "0.6rem !important"};
    padding: 0.2rem 0.6rem;
    margin: 0.2rem;
    line-height: normal;
  }
`;
