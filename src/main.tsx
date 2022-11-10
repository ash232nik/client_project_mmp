import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: "#0C4CA8",
    },
  },
  typography: {
    subtitle1: {
      fontSize: "16px",
      color: grey[900],
      fontWeight: 600,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path={"/*"} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
