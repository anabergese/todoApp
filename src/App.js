import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FormTask from "./Components/FormTask";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

import ThemeContext from "./Contexts/ThemeContext";
import AlltasksContext from "./Contexts/AlltasksContext";

import "./Styles/app.scss";

const App = () => {
  const theme = useState(localStorage.getItem("theme-color"));
  const alltasks = useState(JSON.parse(localStorage.getItem("allTasks")) || []);

  return (
    <AlltasksContext.Provider value={alltasks}>
      <ThemeContext.Provider value={theme}>
        <ThemeContext.Consumer>
          {([theme]) => (
            <div className={`App ${theme}`}>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/task/create" element={<FormTask />} />
                  <Route path="/about" element={<About />} />
                  <Route exact path="/tasks" element={<Task />} />
                  <Route exact path="/" element={<Home />} />
                </Routes>
              </BrowserRouter>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </AlltasksContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
