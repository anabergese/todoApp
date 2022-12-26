import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Sidenav } from "./Styles/Navbar.styled";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { Profile } from "./Profile";
import whitelogo from "../Images/white-logo.png";
import blacklogo from "../Images/black-logo.svg";

const Navbar: FunctionComponent = () => {
  const [themes] = useContext(ThemeContext);

  return (
    <Sidenav theme={themes} role="navigation" aria-label="Main Menu">
      <div className="Navbar__Logo">
        {themes[0] == "black" ? (
          <img src={whitelogo as string} alt="app logotype" />
        ) : (
          <img src={blacklogo as string} alt="app logotype" />
        )}
      </div>
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
      <div className="Navbar__Separator"></div>
      <Profile />
    </Sidenav>
  );
};

export default Navbar;
