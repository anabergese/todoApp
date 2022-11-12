import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Task from "./Components/Task";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ColorTheme from "./Components/ColorTheme";
import FormTask from "./Components/FormTask";
import { StyledApp, Content, GlobalStyles } from "./Components/Styles/Global";
import ThemeContext from "./Contexts/ThemeContext";
import AlltasksContext, { IAllTasks } from "./Contexts/AlltasksContext";

const App = () => {
  const localTasks = localStorage.getItem("allTasks");
  const tasks = JSON.parse(localTasks || "[]") as IAllTasks;
  const [allTasks, setAllTasks] = useState(tasks);

  type ParseThemes = string[];
  const localColors = localStorage.getItem("theme-color");
  const theme = JSON.parse(
    localColors || '["#ffc7cd", "#fff0f1"]'
  ) as ParseThemes;
  const [themes, setThemes] = useState(theme);

  return (
    <AlltasksContext.Provider value={[allTasks, setAllTasks]}>
      <ThemeContext.Provider value={[themes, setThemes]}>
        <GlobalStyles />
        <StyledApp>
          <BrowserRouter>
            <Navbar />
            <Content>
              <ColorTheme />
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/task/create" element={<FormTask />} />
                <Route path="/about" element={<About />} />
                <Route path="/tasks" element={<Task />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Content>
          </BrowserRouter>
        </StyledApp>
      </ThemeContext.Provider>
    </AlltasksContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
