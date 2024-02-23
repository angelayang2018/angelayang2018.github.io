import React from "react";
import { Link } from "react-router-dom";
import { gsap} from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function ProjectDetails({ projectInfo }) {
  useGSAP(() => {
    gsap.from(".projectDetails", {
      duration: 2,
      opacity: 0,
      delay: 1
    });})

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
        <span className = "bold">Team:</span> Angela Yang
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
      <p><span className = "bold">Technologies Used:</span> {tech}</p>
      <p><span className = "bold">Timeline:</span> {timeline}</p>

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
