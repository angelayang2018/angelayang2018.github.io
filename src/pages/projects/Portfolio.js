import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Portfolio</h2>
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
          Technologies Used: React, GSAP, HTML, CSS, Javascript, Swiper, Figma
        </p>
        <p>Timeline: January 2024</p>
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
      <div>
        <div className="tempImage"></div>
      </div>

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
          <p className="colors whiteColor">#FFFFFF</p>
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
