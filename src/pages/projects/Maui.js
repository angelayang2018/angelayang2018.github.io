import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";

export default function Maui() {
  return (
    <div className="maui">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Maui</h2>
      <div className="projectOverview">
        <p>
          My portfolio website showcases my journey as a software developer. It
          features a collection of projects, skills, and experiences that define
          my passion for creating.
        </p>
      </div>
      <div className="projectTech">
        <p>Team: Angela Yang</p>
        <p>
          Technologies Used: React, HTML, CSS, Javascript, Figma
        </p>
        <p>Timeline: August 2023 - January 2024</p>
        <p>
          <a
            href="https://github.com/angelayang2018/portfolio_website"
            className="buttonS"
          >
            Github
          </a>
        </p>
      </div>

      <div>
        <a href="https://docs.google.com/document/d/1ZpMYjZGotLS6SmQDj8c2H4OD47N5AtC1Nz1r54OtNi0/edit?usp=sharing">Full Report</a>
      </div>
      <div>
        <div className="tempImage"></div>
      </div>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Theme</h4>
        <h4>Colors</h4>
        <div className="colorsContainer">
          <p className = "blackColor">#000000</p>
          <p className="colors redColor">#DC4747</p>
          <p className="colors orangeColor">#EA8118</p>
          <p className="colors yellowColor">#E6D041</p>
        </div>
        
      </div>

      <PageControl></PageControl>
    </div>
  );
}
