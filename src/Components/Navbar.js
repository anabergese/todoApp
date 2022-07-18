import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidenav">
      <Link to="/tasks">See All Tasks</Link>
      <Link to="/task/create">New Task</Link>
      <Link to="/tasks?filter=completed">Completed Tasks</Link>
      <Link to="/tasks?filter=uncompleted">Uncompleted Tasks</Link>
      <Link to="/tasks?filter=deleted">Recycle Bin</Link>
      <Link to="/about">About the site</Link>
    </div>
  );
};

export default Navbar;