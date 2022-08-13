/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { StyledColorTheme } from "./Styles/ColorTheme.styled";
import { ThemeButton } from "./Styles/Button.styled";
const ColorTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeColor = (e) => {
    setTheme(e.target.id);
    console.log(e.target.id);
    localStorage.setItem("theme-color", e.target.id);
  };

  return (
    <StyledColorTheme>
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="blue"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="yellow"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="brown"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="pink"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="green"
      />
      <ThemeButton
        onClick={(e) => {
          changeColor(e);
        }}
        id="purple"
      ></ThemeButton>
    </StyledColorTheme>
  );
};

export default ColorTheme;
