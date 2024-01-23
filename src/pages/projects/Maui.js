import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";

export default function Maui() {
  return (
    <div className="maui">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Maui Condos</h2>
      <div className="projectOverview">
        <p>
          My portfolio website showcases my journey as a software developer. It
          features a collection of projects, skills, and experiences that define
          my passion for creating.
        </p>
      </div>
      <div className="projectTech">
        <p>Team: Angela Yang (freelancer)</p>
        <p>Technologies Used: React, HTML, CSS, Javascript, Figma</p>
        <p>Timeline: October 2023 - January 2024</p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/angelayang2018/portfolio_website"
            className="buttonS"
          >
            Github
          </a>
        </p>
      </div>

      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1ZpMYjZGotLS6SmQDj8c2H4OD47N5AtC1Nz1r54OtNi0/edit?usp=sharing"
        >
          Full Report
        </a>
      </div>
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
