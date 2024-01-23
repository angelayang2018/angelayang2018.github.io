import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetails({ projectInfo }) {
  const { title, overview, team, tech, timeline, github } = projectInfo;
  return (
    <div>
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>{title}</h2>
      <div className="projectOverview">
        <p>{overview}</p>
      </div>
      <div className="projectTech">
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
        <p>
          <a href={github} target="_blank" rel="noreferrer" className="buttonS">
            Github
          </a>
        </p>
      </div>
    </div>
  );
}
