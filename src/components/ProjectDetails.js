import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetails({ projectInfo }) {
  const { title, overview, team, tech, timeline, github, report, reportURL } =
    projectInfo;
  return (
    <div className="projectDetails">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>{title}</h2>
      <p>{overview}</p>
      <p>
        Team: Angela Yang
        {team.map((member, index) => (
          <span>
            ,{" "}
            <a
              className="credit"
              target="_blank"
              rel="noreferrer"
              href={member.linkedin}
            >
              {member.name}
            </a>
          </span>
        ))}
      </p>
      <p>Technologies Used: {tech}</p>
      <p>Timeline: {timeline}</p>

      <div className = "projectButtons">
        <a href={github} target="_blank" rel="noreferrer" className="buttonS">
          Github
        </a>
        <a
          href={reportURL}
          target="_blank"
          rel="noreferrer"
          className="buttonS"
        >
          {report}
        </a>
      </div>
    </div>
  );
}
