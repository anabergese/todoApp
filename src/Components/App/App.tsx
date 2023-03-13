import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Tasks from "../Tasks/Tasks";
import Home from "../Home/Home";
import Details from "../Details/Details";
import Navbar from "../Navbar/Navbar";
import ColorTheme from "../Themes/ColorTheme";
import Assistant from "../AI Assistant/Assistant";
import { StyledApp, Content, GlobalStyles } from "./Global";
import ThemeContext from "../../Contexts/ThemeContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import Landing from "../Pages/Landing";
import FormTask2 from "../Form/FormTask2";

const App = () => {
  const { isAuthenticated } = useAuth0();

  type ParseThemes = string[];
  const localColors = localStorage.getItem("theme-color");
  const theme = JSON.parse(
    localColors || '["#ffc7cd", "#fff0f1"]'
  ) as ParseThemes;
  const [themes, setThemes] = useState(theme);

  return (
    <ThemeContext.Provider value={[themes, setThemes]}>
      <GlobalStyles />
      <StyledApp>
        <BrowserRouter>
          {isAuthenticated ? (
            <>
              <Navbar />
              <Content theme={themes}>
                <ColorTheme />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/task/create" element={<FormTask2 />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route
                    path="/assistant"
                    element={
                      <Assistant url="https://storage.googleapis.com/landbot.pro/v3/H-1506463-VCYG6GJ3NNWS56WV/index.json" />
                    }
                  />
                </Routes>
              </Content>
            </>
          ) : (
            <Landing />
          )}
        </BrowserRouter>
      </StyledApp>
    </ThemeContext.Provider>
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
  document.getElementById("app") || document.createElement("div")
);

export default App;
