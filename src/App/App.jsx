import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { CssBaseline } from "@mui/material";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Staff from "../pages/Staff/Staff";
import Administration from "../pages/Administration/Administration";

function App() {
  return (
    <BrowserRouter>
      <div>
        <SideMenu />
        <div className="app-main">
          <Header />
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Staff />} />
            <Route path="/administration" element={<Administration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
