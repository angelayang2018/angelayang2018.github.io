import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";
export default function PyDoku() {
  
  return (
    
    <div className="pydoku">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1PPd_iDbzCjZ074TaUdBlIjcxKCC5xdwT/edit#heading=h.gjdgxs"
        >
          Full Report
        </a>
      </p>
      <img
        className="pydokuImg"
        src="https://i.ibb.co/syM7P4j/pydoku.png"
        alt="pydoku"
      />
      <PageControl to="spartanpantry" from="maui"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "PyDoku",
  overview: "Simple app that solves sudoku puzzles using backtracking.",
  team: [
    {
      name: "Shivam Amin",
      linkedin: "https://www.linkedin.com/in/amin-shivam/",
    },
    {
      name: "Christian Hernandez",
      linkedin: "https://www.linkedin.com/in/c-a-hernandez/",
    },
    {
      name: "Felix Ohlgart",
      linkedin: "https://www.linkedin.com/in/felix-ohlgart-926301203/",
    },
  ],
  tech: "Python, PyGames",
  timeline: "April - May 2023",
  github: "https://github.com/angelochristian29/PyDoku",
};