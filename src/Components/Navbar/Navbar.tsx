import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "./Navbar.styled";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import { Profile } from "../Profile/Profile";
import whitelogo from "../../Img/white-logo.png";
import blacklogo from "../../Img/black-logo.svg";

const Navbar: FunctionComponent = () => {
  const [themes] = useContext(ThemeContext);

  return (
    <Sidenav theme={themes} role="navigation" aria-label="Main Menu">
      <div className="Navbar__Logo" theme={themes}>
        {themes[0] == "black" ? (
          <img src={whitelogo as string} alt="app logotype" />
        ) : (
          <img src={blacklogo as string} alt="app logotype" />
        )}
      </div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/tasks">
        <h2>All Tasks</h2>
      </Link>
      <Link to="/tasks?filter=Today">
        <h2>Tasks for Today</h2>
      </Link>
      <Link to="/task/create">
        <h2>Create Task</h2>
      </Link>
      <Link to="/tasks?filter=Completed">
        <h2>Completed Tasks</h2>
      </Link>
      <Link to="/tasks?filter=Uncompleted">
        <h2>Uncompleted Tasks</h2>
      </Link>
      <Link to="/tasks?filter=Deleted">
        <h2>Deleted Tasks</h2>
      </Link>
      <Link to="/assistant">
        <h2>Personal Assistant</h2>
      </Link>
      <div className="Navbar__Separator"></div>
      <Profile />
    </Sidenav>
  );
};

export default Navbar;
