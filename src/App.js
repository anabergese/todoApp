import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FormTask from "./Components/FormTask";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import CompletedTasks from "./Components/CompletedTasks";
import DeletedTasks from "./Components/DeletedTasks";

import ThemeContext from "./Contexts/ThemeContext";
import AlltasksContext from "./Contexts/AlltasksContext";
import AllDeletedTasks from "./Contexts/AllDeletedTasksContext";

import "./Styles/colorThemes.scss";
import "./Styles/apiStyle.scss";
import "./Styles/formTask.scss";
import "./Styles/navbar.scss";
import "./Styles/task.scss";

const App = () => {
  const theme = useState(localStorage.getItem("theme-color"));
  const alltasks = useState(JSON.parse(localStorage.getItem("allTasks")) || []);
  const allDeletedTasks = useState(
    JSON.parse(localStorage.getItem("allDeletedTasks")) || []
  );

  return (
    <AlltasksContext.Provider value={alltasks}>
      <AllDeletedTasks.Provider value={allDeletedTasks}>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <ThemeContext.Consumer>
              {([theme]) => (
                <div className={`App ${theme}`}>
                  <Navbar />
                  <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/task/create" element={<FormTask />} />
                    <Route
                      path="/tasks/completed"
                      element={<CompletedTasks />}
                    />
                    <Route path="/tasks/uncompleted" />
                    <Route path="/tasks/deleted" element={<DeletedTasks />} />
                    <Route path="/about" element={<About />} />
                    <Route exact path="/tasks" element={<Task />} />
                    <Route exact path="/" element={<Home />} />
                  </Routes>
                </div>
              )}
            </ThemeContext.Consumer>
          </BrowserRouter>
        </ThemeContext.Provider>
      </AllDeletedTasks.Provider>
    </AlltasksContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
