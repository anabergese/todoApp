/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledColorTheme } from "./Styles/ColorTheme.styled";
import { ThemeButton } from "./Styles/Button.styled";

const ColorTheme = () => {
  const { themes, setTheme } = useContext(ThemeContext);

  const changeColor = (e) => {
    setTheme(e.target.id);
    console.log("theme from ColorTheme:", themes); // no entiendo porqué el theme no se corresponde con el e.target.id
    localStorage.setItem("theme-color", e.target.id);
  };

  return (
    <StyledColorTheme>
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#5e8e67"
        color="#5e8e67"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#c3bf81"
        color="#c3bf81"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#7e494c"
        color="#7e494c"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#97b9bf"
        color="#97b9bf"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="#34384e"
        color="#34384e"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="black"
        color="black"
      />
    </StyledColorTheme>
  );
};

export default ColorTheme;
