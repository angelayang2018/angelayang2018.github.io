import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";

export default function Maui() {
  return (
    <div className="maui">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <img
        className="projectImg"
        src="https://i.ibb.co/tDW75yV/mauihome.png"
        alt="Maui Home Page"
      />
      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Theme</h4>
        <h4>Colors</h4>
        <div className="colorsContainer">
          <p className="colors mauiTurq">#11DFF0</p>
          <p className="colors mauiGray">#F1F0F0</p>
          <p className="colors mauiTan">#CF9E3E</p>
          <p className="colors mauiPink">#F0B099</p>
          <p className="colors mauiBlue">#5B668B</p>
        </div>
        <h4>Typography</h4>
        <p>Montserrat</p>
        <p>Cinzel</p>
        <p></p>
      </div>

      <PageControl to="pydoku" from="portfolio"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "Maui Condos",
  overview:
    "My portfolio website showcases my journey as a software developer. It features a collection of projects, skills, and experiences that define my passion for creating.",
  team: [],
  tech: "React, HTML, CSS, Javascript, Figma",
  timeline: "October 2023 - January 2024",
  github: "https://github.com/angelayang2018/portfolio_website",
  report: "Report",
  reportURL: "https://docs.google.com/document/d/1ZpMYjZGotLS6SmQDj8c2H4OD47N5AtC1Nz1r54OtNi0/edit?usp=sharing"
};
