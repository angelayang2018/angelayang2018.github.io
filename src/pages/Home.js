import React from "react";
import { Link } from "react-router-dom";
import Skill from "../components/Skill";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="home">
      <div className="intro">
        <p>Frontend Developer | Software Engineer</p>
        <p>SJSU Computer Science Graduate</p>
        <p>Passionate about Beans</p>
        <p>Currently looking for job 2024</p>

        <div className="aboutButtons">
          <Link className="buttonS" to="/about">
            ABOUT
          </Link>
          <a target="_blank" rel="noreferrer" className="buttonS" href="./">
            RESUME
          </a>
        </div>
      </div>

      <Skill skillDetails={skillDetails}></Skill>

      <h2>PROJECTS</h2>
      
      <Carousel></Carousel>

      <div className="movingText">
        <h2 className="nostrav">LET'S CONNECT</h2>
      </div>
      <div className="contact">
        <a className="contactButton" href="mailto:angela.yang146@gmail.com">
          EMAIL
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="contactButton"
          href="https://www.linkedin.com/in/angela-yangg/"
        >
          LINKEDIN
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="contactButton"
          href="https://github.com/angelayang2018"
        >
          GITHUB
        </a>
      </div>
    </div>
  );
}

const skillDetails = [
  {
    topic: "Languages",
    topicItems: ["Java", "HTML", "Python", "CSS", "Javascript"],
  },
  {
    topic: "Frameworks/ Libraries",
    topicItems: ["React", "Tailwind", "GSAP", "Express", "Node"],
  },
  {
    topic: "Additional Tool",
    topicItems: ["Docker", "Figma", "SQL", "Command Line"],
  },
];
