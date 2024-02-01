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

    gsap.to(".rotation",{
      scrollTrigger: {
        scrub: 1
      }, 
      rotate: 360
      
    })

    gsap
      .timeline()
      .to(".introText .char", {
        y: 0,
        stagger: 0.05,
        delay: 1.5,
        duration: 0.1,
      })
      .to(".gradText", {
        y: 0,
        duration: 1,
        ease: "power1.out",
      })
      .play();
  });

  return (
    <div className="home">
      <div className="intro">
        <h1 className="introText">
          <span className="line">
            <span className="char">F</span>
            <span className="char">r</span>
            <span className="char">o</span>
            <span className="char">n</span>
            <span className="char">t</span>
            <span className="char">e</span>
            <span className="char">n</span>
            <span className="char">d</span> <span className="char">D</span>
            <span className="char">e</span>
            <span className="char">v</span>
            <span className="char">e</span>
            <span className="char">l</span>
            <span className="char">o</span>
            <span className="char">p</span>
            <span className="char">e</span>
            <span className="char">r</span> <span className="char">&</span>{" "}
          </span>
          <span className="line">
            <span className="gradText">Software Engineer</span>
          </span>
        </h1>

        <div className="aboutButtons">
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <p className = "rotation">✦</p>
          <a target="_blank" rel="noreferrer" href="/angela_yang_resume.pdf">
            <p>RESUME</p>
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
            <h3 className="frameworks">Frameworks/ Libraries</h3>
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

const languages = ["Java", "HTML", "Python", "CSS", "Javascript"];
const frameworks = ["React", "Tailwind", "GSAP", "SASS"];
const tools = ["Docker", "Figma", "SQL", "Command Line", "Git"];
