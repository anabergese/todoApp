import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  font-size: 0.8rem;
  padding: 0.4rem 1.2rem;
  min-height: 8px;
  border-radius: 0.25rem;
  border-width: 0;
  margin: 1rem 0.25rem;
  text-decoration: none;
  text-align: center;
  background-color: ${(props) =>
    props.submit ? props.theme[0] : props.theme[1]};
`;

export const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme[1]};
  font-size: 0.8rem;
  padding: 0.4rem 1.2rem;
  border-radius: 0.25rem;
  border-width: 0;
  margin: 1rem 0.25rem;
  text-decoration: none;
  text-align: center;
  color: black;
  &:hover {
    color: black;
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

  &:focus {
    opacity: 1;
    min-width: 1.8rem;
    min-height: 1.8rem;
  }
`;
