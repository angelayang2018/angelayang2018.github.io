import React from "react";
import "./App.css";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Project} from "./pages/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
