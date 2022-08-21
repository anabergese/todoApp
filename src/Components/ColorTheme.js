/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledColorTheme } from "./Styles/ColorTheme.styled";
import { ThemeButton } from "./Styles/Button.styled";

const ColorTheme = () => {
  const { setThemes } = useContext(ThemeContext);

  const changeColor = (e) => {
    setThemes([e.target.id, e.target.value]);
    localStorage.setItem(
      "theme-color",
      JSON.stringify([e.target.id, e.target.value])
    );
  };

  return (
    <StyledColorTheme>
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#ffc7cd"
        color="#ffc7cd"
        value="#fff0f1"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#d6e1ec"
        color="#d6e1ec"
        value="#f2f5f9"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#ece1d6"
        color="#ece1d6"
        value="#f9f5f2"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#ecd6ec"
        color="#ecd6ec"
        value="#f9f2f9"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#d6ecd6"
        color="#d6ecd6"
        value="#f2f9f2"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="black"
        color="black"
        value="#e6e6e6"
      />
    </StyledColorTheme>
  );
};

export default ColorTheme;
