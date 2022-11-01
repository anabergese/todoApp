import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  submit: string;
  theme: string[];
};
export const StyledButton = styled.button<Props>`
  font-size: ${(props) => (props.submit ? "1rem" : "0.8rem")};
  letter-spacing: 0.05rem;
  padding: 0.4rem 1.2rem;
  margin: 1rem 0.25rem;
  min-height: 8px;
  border-radius: 0.25rem;
  border-width: 0;
  text-decoration: none;
  text-align: center;
  background-color: ${(props) =>
    props.submit ? props.theme[0] : props.theme[1]};
  color: ${(props) =>
    props.theme[0] == "black" && props.submit ? "white" : "black"};

  @media screen and (max-width: 400px) {
    font-size: ${(props) => (props.submit ? "0.8rem" : "0.6rem !important")};
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

export const ThemeButton = styled.button`
  min-width: 1rem;
  min-height: 1rem;
  margin: 2rem 0.6rem;
  border-radius: 0.25rem;
  border: 0.06rem solid #dadce0;
  cursor: pointer;
  background-color: ${({ color }) => {
    switch (color) {
      case "#ffc7cd":
        return "#ffc7cd";
      case "#d6e1ec":
        return "#d6e1ec";
      case "#ece1d6":
        return "#ece1d6";
      case "#ecd6ec":
        return "#ecd6ec";
      case "#d6ecd6":
        return "#d6ecd6";
      default:
        return "black";
    }
  }};

  &.active {
    min-width: 1.6rem;
    min-height: 1.6rem;
  }
`;
