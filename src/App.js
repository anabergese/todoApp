import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";
import Home from "./Home";
import Details from "./Details";
import ColorTheme from "./ColorTheme";
import ThemeContext from "./ThemeContext";
import Menu from "./Menu";
import About from "./About";

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
