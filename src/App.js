import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ColorTheme from "./Components/ColorTheme";
import FormTask from "./Components/FormTask";

import ThemeContext from "./Contexts/ThemeContext";
import AlltasksContext from "./Contexts/AlltasksContext";
import "./Styles/app.scss";
import { Content } from "./Components/Styles/Global.styled";

const App = () => {
  const storage = JSON.parse(localStorage.getItem("theme-color"));
  console.log("storage:", storage);
  const [themes, setThemes] = useState(
    JSON.parse(localStorage.getItem("theme-color")) || ["#ffc7cd", "#fff0f1"]
  );
  const alltasks = useState(JSON.parse(localStorage.getItem("allTasks")) || []);

  return (
    <AlltasksContext.Provider value={alltasks}>
      <ThemeContext.Provider value={{ themes, setThemes }}>
        <ThemeProvider theme={{ themes }}>
          {console.log("themesColorApp:", themes)}
          <div className="App">
            <BrowserRouter>
              <Navbar />
              <Content>
                <ColorTheme />
                <Routes>
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/task/create" element={<FormTask />} />
                  <Route path="/about" element={<About />} />
                  <Route exact path="/tasks" element={<Task />} />
                  <Route exact path="/" element={<Home />} />
                </Routes>
              </Content>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </AlltasksContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
