import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "var(--background-colour)" },
        }}
      />
      <BrowserRouter basename="/fridge_to_fork">
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
