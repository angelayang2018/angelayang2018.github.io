import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";
export default function PyDoku() {
  return (
    <div className="pydoku">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>PyDoku</h2>

      <div className="projectOverview">
        <p>Simple app that solves sudoku puzzles using backtracking.</p>
      </div>
      <div className="projectTech">
        <p>
          Team: Angela Yang,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="credit"
            href="https://www.linkedin.com/in/amin-shivam/"
          >
            Shivam Amin,
          </a>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="credit"
            href="https://www.linkedin.com/in/c-a-hernandez/"
          >
            Christian Hernandex,
          </a>{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="credit"
            href="https://www.linkedin.com/in/felix-ohlgart-926301203/"
          >
            Felix Ohlgart
          </a>
        </p>
        <p>Technologies Used: Python, PyGames</p>
        <p>Timeline: April - May 2023</p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/angelochristian29/PyDoku"
            className="buttonS"
          >
            Github
          </a>
        </p>
      </div>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1PPd_iDbzCjZ074TaUdBlIjcxKCC5xdwT/edit#heading=h.gjdgxs"
        >Full Report</a>
      </p>
      <img className = "pydokuImg" src="https://i.ibb.co/syM7P4j/pydoku.png" alt="pydoku" />
      <PageControl to="spartanpantry" from="maui"></PageControl>
    </div>
  );
}
