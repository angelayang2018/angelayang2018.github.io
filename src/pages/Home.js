import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { gsap, ScrollTrigger, TextPlugin, MotionPathPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SkillAnimation1 from "../components/SkillAnimation1";
import SkillAnimation2 from "../components/SkillAnimation2";
import SkillAnimation3 from "../components/SkillAnimation3";


gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

export default function Home() {
  useGSAP(() => {
    gsap.to(".nostrav", {
      scrollTrigger: {
        start: "bottom bottom",
        end: "bottom bottom",
      },
      text: "LET'S TALK",
      ease: " none",
      delay: 2,
      duration: 2.5,
    });

    gsap.to(".airplane", {
      motionPath: {
        path: "M2 43.1618C78 60.1209 589.362 186.324 565.073 43.1618C554.327 -20.1743 452.174 -7.21863 452.174 60.1209C452.174 227.008 1030.58 144.674 1117.21 144.674",
        autoRotate: true,
      },
      delay: 1,
      duration: 4,
      ease: "power1.inOut",
    });
    gsap.to(".airplane", {
      motionPath: {
        path: [{x: window.innerWidth, y: 100}],
        autoRotate: true,
      },
      delay: 4.3,
      ease: "power1.out",
      duration: 1,
    });
  });

  return (
    <div className="home">
      <div className="intro">
        <p>Frontend Developer | Software Engineer</p>
        <p>SJSU Computer Science Graduate</p>
        <p>Currently looking for a software developer job 2024</p>

        <div className="aboutButtons">
          <Link className="buttonS" to="/about">
            ABOUT
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            className="buttonS"
            href="/angela_yang_resume.pdf"
          >
            RESUME
          </a>
        </div>
      </div>

      <div className="skills">
        <h2>SKILLS</h2>
        <div className="skillCard">
          <SkillAnimation3></SkillAnimation3>
          <div className="skillInfo">
            <h3 className="languages">Languages</h3>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="skillCard">
          <SkillAnimation2></SkillAnimation2>
          <div className="skillInfo">
            <h3 className="frameworks">Frameworks/Libraries</h3>
            <ul>
              {frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="skillCard">
          <SkillAnimation1></SkillAnimation1>
          <div className="skillInfo">
            <h3 className="tools">Additional Tools</h3>
            <ul>
              {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2>PROJECTS</h2>

      <Carousel></Carousel>

      <div className="movingText">
        <h2 className="nostrav">WANT TO CONNECT?</h2>
        <img
        className="airplane"
        src="https://i.ibb.co/LQ33KtK/airplane.png"
        alt="airplane"
      />
      </div>
      

      <div className="contact">
        <a className="contactButton"  href="mailto:angela.yang146@gmail.com">
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

const languages = ["Java", "HTML", "Python", "CSS", "Javascript"];
const frameworks = ["React", "Tailwind", "GSAP", "SASS"];
const tools = ["Docker", "Figma", "SQL", "Command Line", "Git"];
