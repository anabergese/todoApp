/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const ColorTheme = ({ colorTheme, setColorTheme }) => {
  const changeColor = (e) => {
    console.log(e.target.id);
    setColorTheme(e.target.id);
    localStorage.setItem("theme-color", colorTheme);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">TODO LIST</Navbar.Brand>
        <div className="theme-options">
          <div
            onClick={(e) => {
              changeColor(e);
            }}
            id="theme-white"
            className={`${colorTheme === "theme-white" ? "active" : ""}`}
          ></div>
          <div
            onClick={(e) => {
              changeColor(e);
            }}
            id="theme-blue"
            className={`${colorTheme === "theme-blue" ? "active" : ""}`}
          ></div>
          <div
            onClick={(e) => {
              changeColor(e);
            }}
            id="theme-orange"
            className={`${colorTheme === "theme-orange" ? "active" : ""}`}
          ></div>
          <div
            onClick={(e) => {
              changeColor(e);
            }}
            id="theme-red"
            className={`${colorTheme === "theme-red" ? "active" : ""}`}
          ></div>
          <div
            onClick={(e) => {
              changeColor(e);
            }}
            id="theme-green"
            className={`${colorTheme === "theme-green" ? "active" : ""}`}
          ></div>
          <div
            onClick={(e) => {
              changeColor(e);
            }}
            id="theme-black"
            className={`${colorTheme === "theme-black" ? "active" : ""}`}
          ></div>
        </div>
      </Navbar>
    </div>
  );
};

export default ColorTheme;
