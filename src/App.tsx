import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Tasks from "./Components/Tasks";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";
import ColorTheme from "./Components/ColorTheme";
import FormTask from "./Components/FormTask";
import { StyledApp, Content, GlobalStyles } from "./Components/Styles/Global";
import ThemeContext from "./Contexts/ThemeContext";
import AlltasksContext, { IAllTasks } from "./Contexts/AlltasksContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Components/Login";
import { LogoutButton } from "./Components/Logout";
import { Profile } from "./Components/Profile";

const App = () => {
  const localTasks = localStorage.getItem("allTasks");
  const tasks = JSON.parse(localTasks || "[]") as IAllTasks;
  const [allTasks, setAllTasks] = useState(tasks);
  const { isAuthenticated } = useAuth0();

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
            {isAuthenticated ? (
              <>
                <Profile />
                <LogoutButton />
                <Navbar />
                <Content>
                  <ColorTheme />
                  <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/task/create" element={<FormTask />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Content>
              </>
            ) : (
              <LoginButton />
            )}
          </BrowserRouter>
        </StyledApp>
      </ThemeContext.Provider>
    </AlltasksContext.Provider>
  );
};

render(
  <Auth0Provider
    domain="dev-k7zkd8n7ph0j42j3.us.auth0.com"
    clientId="NQ3dF4qcdtMA18vxJdgRQ9IB9mHCT3TW"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root") || document.createElement("div")
);

export default App;
