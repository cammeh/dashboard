import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.scss";
import { ThemeProvider, createTheme } from "@mui/material";

import Staff from "../src/App/App";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          transform: "translateZ(0)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "320px",
          backgroundColor: "#253053",
          padding: "10px",
          color: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#333996",
      light: "#3C44B126",
    },
    secondary: {
      main: "#F83245",
      light: "#F8324526",
    },
    background: {
      default: "#F4F5FD",
    },
    default: {
      main: "#F4F5FD",
    },
  },
  shape: {
    borderRadius: "6px",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
