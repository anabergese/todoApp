import React from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "./Styles/Navbar.styled";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Navbar = () => {
  const { themes } = useContext(ThemeContext);

  return (
    <Sidenav theme={themes}>
      <Link to="/">
        <h2>Home page</h2>
      </Link>
      <Link to="/tasks">
        <h2>See All Tasks</h2>
      </Link>
      <Link to="/task/create">
        <h2>Create New Task</h2>
      </Link>
      <Link to="/tasks?filter=completed">
        <h2>Completed Tasks</h2>
      </Link>
      <Link to="/tasks?filter=uncompleted">
        <h2>Uncompleted Tasks</h2>
      </Link>
      <Link to="/tasks?filter=deleted">
        <h2>Recycle Bin</h2>
      </Link>
      <Link to="/about">
        <h2>About The Site</h2>
      </Link>
    </Sidenav>
  );
};

export default Navbar;
