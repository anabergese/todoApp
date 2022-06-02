import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreateTask from "./Components/CreateTask";
import Tasks from "./Components/Tasks";
import Home from "./Components/Home";
import Details from "./Components/Details";
import ColorTheme from "./Components/ColorTheme";
import ThemeContext from "./ThemeContext";
import Menu from "./Components/Menu";
import About from "./Components/About";

const App = () => {
  const theme = useState(localStorage.getItem("theme-color"));

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ThemeContext.Consumer>
          {([theme]) => (
            <div className={`App ${theme}`}>
              <ColorTheme />
              <Menu />
              <h1>Todo List Project</h1>

              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/task/create" element={<CreateTask />} />
                <Route path="/tasks/completed" />
                <Route path="/tasks/uncompleted" />
                <Route exact path="/tasks/delete" />
                <Route path="/recycled" />
                <Route path="/about" element={<About />} />
                <Route exact path="/tasks" element={<Tasks />} />
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          )}
        </ThemeContext.Consumer>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
