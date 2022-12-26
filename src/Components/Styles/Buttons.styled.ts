import styled from "styled-components";
import { Link } from "react-router-dom";
import { IButtonsProps } from "../../Types/index";

export const StyledButton = styled.button<IButtonsProps>`
  font-size: ${(props: IButtonsProps) => (props.submitbtn ? "1rem" : "0.8rem")};
  letter-spacing: 0.05rem;
  padding: 0.4rem 1.2rem;
  margin: 1rem 0.25rem;
  min-height: 8px;
  border-radius: 0.25rem;
  border-width: 0;
  text-decoration: none;
  text-align: center;
  background-color: ${(props: IButtonsProps) =>
    props.submitbtn ? props.theme[0] : props.theme[1]};
  color: ${(props: IButtonsProps) =>
    props.theme[0] == "black" && props.submitbtn ? "white" : "black"};

  @media screen and (max-width: 400px) {
    font-size: ${(props: IButtonsProps) =>
      props.submitbtn ? "0.8rem" : "0.6rem !important"};
    padding: 0.2rem 0.6rem;
    margin: 0.2rem;
    letter-spacing: 0;
    line-height: normal;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: black;
  }
  @media screen and (max-width: 400px) {
    font-size: 0.6rem !important;
  }
`;
