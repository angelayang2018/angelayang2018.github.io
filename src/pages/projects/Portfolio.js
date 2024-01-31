import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Theme</h4>
        <h4>Colors</h4>
        <div className="colorsContainer">
          <p className="blackColor">#000000</p>
          <p className="colors redColor">#DC4747</p>
          <p className="colors orangeColor">#EA8118</p>
          <p className="colors yellowColor">#E6D041</p>
          <p className="colors greenColor">#40A250</p>
          <p className="colors blueColor">#2E75BC</p>
          <p className="colors pinkColor">#E5A1EA</p>
          <p className="colors sandColor">#FAF7EF</p>
        </div>
        <h4>Typography</h4>
        <p>Mori</p>
        <p className="nostrav">Nostrav</p>
      </div>

      <div>
        <h3>JS Animation</h3>
      </div>

      <div>
        <div className="tempImage"></div>
      </div>

      <PageControl to="maui" from="hackdavis"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "Portfolio",
  overview:
    "My portfolio website showcases my journey as a software developer. It features a collection of projects, skills, and experiences that define my passion for creating.",
  team: [],
  tech: "React, GSAP, HTML, CSS, Javascript, Swiper, Figma",
  timeline: "January 2024 (ongoing)",
  github: "https://github.com/angelayang2018/portfolio_website",
  report: "Report",
  reportURL: "https://docs.google.com/document/d/1ZpMYjZGotLS6SmQDj8c2H4OD47N5AtC1Nz1r54OtNi0/edit?usp=sharing"
};
