/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const ColorTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeColor = (e) => {
    setTheme(e.target.id);
    localStorage.setItem("theme-color", e.target.id);
  };

  return (
    <div className="theme-options">
      <div
        onClick={(e) => {
          changeColor(e);
        }}
        id="theme-red"
        className={`${theme === "theme-red" ? "active" : ""}`}
      ></div>
      <div
        onClick={(e) => {
          changeColor(e);
        }}
        id="theme-blue"
        className={`${theme === "theme-blue" ? "active" : ""}`}
      ></div>
      <div
        onClick={(e) => {
          changeColor(e);
        }}
        id="theme-brown"
        className={`${theme === "theme-brown" ? "active" : ""}`}
      ></div>
      <div
        onClick={(e) => {
          changeColor(e);
        }}
        id="theme-pink"
        className={`${theme === "theme-pink" ? "active" : ""}`}
      ></div>
      <div
        onClick={(e) => {
          changeColor(e);
        }}
        id="theme-green"
        className={`${theme === "theme-green" ? "active" : ""}`}
      ></div>
      <div
        onClick={(e) => {
          changeColor(e);
        }}
        id="theme-black"
        className={`${theme === "theme-black" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default ColorTheme;
