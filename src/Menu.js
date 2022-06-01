import React from "react";
import { Link } from "react-router-dom";
import ColorTheme from "./ColorTheme";

const Menu = ({ colorTheme, setColorTheme }) => {
  return (
    <div className="sidenav">
      <Link to="/tasks">See All Tasks</Link>
      <Link to="/task/create">New Task</Link>
      <Link to="/tasks/completed">Completed Tasks</Link>
      <Link to="/tasks/uncompleted">Uncompleted Tasks</Link>
      <Link to="/tasks/deleted">Recycle Bin</Link>
      <Link to="/about">About the site</Link>
      <ColorTheme colorTheme={colorTheme} setColorTheme={setColorTheme} />
    </div>
  );
};

export default Menu;
