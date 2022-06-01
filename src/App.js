import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import Tasks from "./Tasks";
import Home from "./Home";
import Details from "./Details";
import ColorTheme from "./ColorTheme";
import Menu from "./Menu";
import About from "./About";

// Data flows from the parent (App) to the child (Todo) via props.
const App = () => {
  const [colorTheme, setColorTheme] = useState("theme-white");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");

    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={`App ${colorTheme}`}>
        <ColorTheme colorTheme={colorTheme} setColorTheme={setColorTheme} />
        <Menu />
        <h1>Todo List Project</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/task/create" element={<CreateTask />} />
          <Route path="/tasks/completed" />
          <Route path="/tasks/uncompleted" />
          <Route path="/tasks/delete" />
          <Route path="/recycled" />
          <Route path="/about" element={<About />} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
