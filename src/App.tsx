/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Avia from "./pages/Avia/Avia";
import Info from "./pages/Info/Info";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Avia />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
