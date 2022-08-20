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
        id="blue"
        color="blue"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="yellow"
        color="yellow"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="brown"
        color="brown"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="pink"
        color="pink"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="green"
        color="green"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="purple"
        color="purple"
      />
    </StyledColorTheme>
  );
};

export default ColorTheme;
