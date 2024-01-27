import React from "react";
import Home from "./pages/Home";
import "./styles/styles.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/projects/Portfolio";
import SpartanPantry from "./pages/projects/SpartanPantry";
import HackDavis from "./pages/projects/HackDavis";
import MathShip from "./pages/projects/MathShip";
import PyDoku from "./pages/projects/Pydoku";
import Maui from "./pages/projects/Maui";


export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/portfolio" element={<Portfolio />} />
          <Route path="/project/spartanpantry" element={<SpartanPantry/>} />
          <Route path="/project/pydoku" element={<PyDoku />} />
          <Route path="/project/mathship" element={<MathShip />} />
          <Route path="/project/maui" element={<Maui />} />
          <Route path="/project/hackdavis" element={<HackDavis />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </ScrollTop>
      </BrowserRouter>
    </div>
  );
}
