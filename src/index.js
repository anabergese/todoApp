import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App/App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-k7zkd8n7ph0j42j3.us.auth0.com"
      clientId="NQ3dF4qcdtMA18vxJdgRQ9IB9mHCT3TW"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
