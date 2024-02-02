import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { gsap, ScrollTrigger, TextPlugin, MotionPathPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Marquee from "../components/Marquee";

gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

export default function Home() {
  useGSAP(() => {
    gsap.to(".changingText", {
      scrollTrigger: {
        start: "bottom bottom",
        end: "bottom bottom",
      },
      text: "LET'S TALK! ☟",
      ease: " none",
      color: "#DC4747",
      delay: 2,
      duration: 3,
    });

    gsap.to(".rotation", {
      scrollTrigger: {
        scrub: 1,
      },
      rotate: 360,
    });

    gsap.to(".rotating", {
      duration: 5,
      rotate: 360,
      ease: "none",
      repeat: -1,
    });

    gsap.from(".skillCard", {
      scrollTrigger: {
        trigger: ".skillCard",
        start: "center center",
      },
      stagger: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out"
    })

    gsap.from(".contact", {
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
      },
      opacity: 0,
      duration: 1,
      ease: "power1.out"
    })

    gsap
      .timeline()
      .to(".introText .char", {
        y: 0,
        stagger: 0.05,
        delay: 1,
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
          <p className="rotation">✦</p>
          <a target="_blank" rel="noreferrer" href="/angela_yang_resume.pdf">
            <p>RESUME</p>
          </a>
        </div>
      </div>

      <hr></hr>
        <Marquee className="skillMarq">SKILLS ☞</Marquee>
        <hr></hr>
      <div className="skills">
        <div className="skillCard">
          <h3 className="languages">LANGUAGES</h3>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>

        <div className="skillCard">
          <h3 className="frameworks">FRAMEWORKS/ LIBRARIES</h3>
          <ul>
            {frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
          </ul>
        </div>

        <div className="skillCard">
          <h3 className="tools">ADDITIONAL TOOLS</h3>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr></hr>
      <Marquee className="projectMarq">PROJECTS ☜</Marquee>
      <hr></hr>
      <Carousel></Carousel>

      <hr></hr>
      <Marquee className="contactMarq">CONTACT ☟</Marquee>
      <hr></hr>

      <div className="contact">
        <h3 className="rotating">✦</h3>
        <p className="changingText">WANT TO CONNECT?</p>

        <h2>
          angela.yang146<br></br>@gmail.com
        </h2>
        <div className="contactButtons">
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
        <p className="contactText">MADE WITH 💪 BY ANGELA</p>
      </div>
    </div>
  );
}

const languages = ["Java", "HTML", "CSS", "Javascript"];
const frameworks = ["React", "Tailwind", "GSAP", "SASS"];
const tools = ["Docker", "Figma", "SQL", "Command Line", "Git"];
