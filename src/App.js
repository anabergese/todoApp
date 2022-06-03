import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CreateTask from "./Components/CreateTask";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Details from "./Components/Details";
import ColorTheme from "./Components/ColorTheme";
import ThemeContext from "./ThemeContext";
import AlltasksContext from "./AlltasksContext";
import Menu from "./Components/Menu";
import About from "./Components/About";

const App = () => {
  const theme = useState(localStorage.getItem("theme-color"));
  const alltasks = useState(JSON.parse(localStorage.getItem("allTasks")));

  return (
    <AlltasksContext.Provider value={alltasks}>
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
                  <Route exact path="/tasks" element={<Task />} />
                  <Route exact path="/" element={<Home />} />
                </Routes>
              </div>
            )}
          </ThemeContext.Consumer>
        </BrowserRouter>
      </ThemeContext.Provider>
    </AlltasksContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
