import styled from "styled-components";

const theme = localStorage.getItem("theme-color") || "red";

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.4em 1.2em;
  border-radius: 0.25rem;
  border-width: 0;
  margin: auto 0.25rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

export const ThemeButton = styled.button`
  min-width: 1rem;
  min-height: 1rem;
  margin: 2rem 1rem;
  border-radius: 0.25rem;
  border: 0.06rem solid #dadce0;
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.id) {
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
        return "green";
    }
  }};

  &:focus {
    opacity: 1;
    min-width: 1.6rem;
    min-height: 1.6rem;
  }
`;
