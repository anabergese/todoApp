import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  font-size: 0.8rem;
  padding: 0.4em 1.2em;
  border-radius: 0.25rem;
  border-width: 0;
  margin: auto 0.25rem;
  text-decoration: none;
  text-align: center;
  background-color: tomato !important;
`;

export const StyledLink = styled(Link)`
  font-size: 0.8rem;
  padding: 0.4em 1.2em;
  border-radius: 0.25rem;
  border-width: 0;
  margin: auto 0.25rem;
  text-decoration: none;
  text-align: center;
  background-color: tomato !important;
  color: black;
  &:hover {
    text-decoration: none;
    color: white;
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
      case "#5e8e67":
        return "#5e8e67";
      case "#c3bf81":
        return "#c3bf81";
      case "#7e494c":
        return "#7e494c";
      case "#97b9bf":
        return "#97b9bf";
      case "#34384e":
        return "#34384e";
      default:
        return "black";
    }
  }};

  &:focus {
    opacity: 1;
    min-width: 1.8rem;
    min-height: 1.8rem;
  }
`;
