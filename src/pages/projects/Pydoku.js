import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";
export default function PyDoku() {
  return (
    <div className = "pydoku">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>PyDoku</h2>

      <div className="projectOverview">
        <p>
          My portfolio website showcases my journey as a software developer. It
          features a collection of projects, skills, and experiences that define
          my passion for creating.
        </p>
      </div>
      <div className="projectTech">
        <p>Team: Angela Yang, Shivam Amin, Christian Hernandex, Felix Ohlgart</p>
        <p>
          Technologies Used: Python, PyGames
        </p>
        <p>Timeline: April - May 2023</p>
        <p>
          <a
            href="https://github.com/angelayang2018/portfolio_website"
            className="buttonS"
          >
            Github
          </a>
        </p>
      </div>
      <PageControl to = "spartanpantry" from ="maui"></PageControl>
    </div>
  );
}
