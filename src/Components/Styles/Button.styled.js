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
      case "blue":
        return "blue";
      case "green":
        return "green";
      case "yellow":
        return "yellow";
      case "brown":
        return "brown";
      case "purple":
        return "purple";
      case "pink":
        return "pink";
      default:
        return "red";
    }
  }};

  &:focus {
    opacity: 1;
    min-width: 1.8rem;
    min-height: 1.8rem;
  }
`;
