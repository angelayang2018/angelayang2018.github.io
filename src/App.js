import React from "react";
import Home from "./pages/Home";
import "./styles/styles.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/projects/Portfolio";
import SpartanPantry from "./pages/projects/SpartanPantry";
import HackDavis from "./pages/projects/HackDavis";
import MathShip from "./pages/projects/MathShip";
import PyDoku from "./pages/projects/Pydoku";
import Maui from "./pages/projects/Maui";
import PageTrans from "./components/PageTrans";
import Instagram from "./pages/projects/Instagram";

export default function App() {
  return (
    <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PageTrans>
                <Home />
              </PageTrans>
            }
          />
          <Route
            path="/about"
            element={
              <PageTrans>
                <About />
              </PageTrans>
            }
          />
          <Route
            path="/project"
            element={
              <PageTrans>
                <Project />
              </PageTrans>
            }
          />
          <Route
            path="/project/portfolio"
            element={
              <PageTrans>
                <Portfolio />
              </PageTrans>
            }
          />
          <Route
            path="/project/spartanpantry"
            element={
              <PageTrans>
                <SpartanPantry />
              </PageTrans>
            }
          />
          <Route
            path="/project/pydoku"
            element={
              <PageTrans>
                <PyDoku />
              </PageTrans>
            }
          />
          <Route
            path="/project/mathship"
            element={
              <PageTrans>
                <MathShip />
              </PageTrans>
            }
          />
          <Route
            path="/project/maui"
            element={
              <PageTrans>
                <Maui />
              </PageTrans>
            }
          />
          <Route
            path="/project/hackdavis"
            element={
              <PageTrans>
                <HackDavis />
              </PageTrans>
            }
          />
          <Route
            path="/project/instagram"
            element={
              <PageTrans>
                <Instagram />
              </PageTrans>
            }
          />
          <Route
            path="*"
            element={
              <PageTrans>
                <Home />
              </PageTrans>
            }
          />
        </Routes>
    </div>
  );
}
