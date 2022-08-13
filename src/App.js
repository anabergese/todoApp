import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FormTask from "./Components/FormTask";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ColorTheme from "./Components/ColorTheme";
import ThemeContext from "./Contexts/ThemeContext";
import AlltasksContext from "./Contexts/AlltasksContext";
import "./Styles/app.scss";

const App = () => {
  const theme = useState(localStorage.getItem("theme-color") || "blue");
  const alltasks = useState(JSON.parse(localStorage.getItem("allTasks")) || []);

  return (
    <AlltasksContext.Provider value={alltasks}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <div className="content">
              <ColorTheme />
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/task/create" element={<FormTask />} />
                <Route path="/about" element={<About />} />
                <Route exact path="/tasks" element={<Task />} />
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </AlltasksContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
