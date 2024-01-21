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
        My portfolio website serves
          showcases my journey as a software developer. It features a collection
          of projects, skills, and experiences that define my passion for
          creating.
        </p>
      </div>
      <div className="projectTech">
        <p>
          Team: Angela Yang
        </p>
        <p>Technologies Used: React, GSAP, HTML, CSS, Javascript, Swiper, Figma</p>
        <p>Timeline: January 2024</p>
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
        <div className="tempImage"></div>
      </div>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Colors</h4>
        <p>#FAF7EF</p>
        <h4>Typography</h4>
        <p>Mori</p>
        <p>Nostrav</p>
      </div>

      <PageControl></PageControl>
    </div>
  );
}
