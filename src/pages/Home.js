import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Home() {
  gsap.to("movingText", {
    duration: 5,
    text: "This is the new text",
    ease: "none",
  });

  return (
    <div className = "home">
      <div className = "intro">
        <div>
          <p>Frontend Developer | Software Engineer</p>
          <p>SJSU Computer Science Graduate</p>
          <p>Passionate about Beans</p>
          <p>Currently looking for job 2024</p>
        </div>
        <div className="aboutButtons">
          <Link className="buttonS" to="/about">
            <p>ABOUT</p>
          </Link>
          <a className="buttonS" href="./">
            RESUME
          </a>
        </div>
      </div>

      <div className="skills">
        <h2>SKILLS</h2>
        <div className="skillContainer">
          <div className="skillInfo">Animation</div>
          <div className="skillInfo">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>HTML</li>
              <li>Python</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="skillContainer">
          <div className="skillInfo">Animation</div>
          <div className="skillInfo">
            <h3>Frameworks/ Libraries</h3>
            <ul>
              <li>React</li>
              <li>Tailwind</li>
              <li>GSAP</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="skillContainer">
          <div className="skillInfo">Animation</div>
          <div className="skillInfo">
            <h3>Additional Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Figma</li>
              <li>MySQL</li>
              <li>Command Line</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>PROJECTS</h2>
      <div className="projects">
        <div className="projectItems">
          <div className="projectItem1"></div>
          <div className="projectItem2"></div>
          <div className="projectItem3"></div>
        </div>

        <div className="projectDetails">
          <div>
            <h3>Spartan Pantry</h3>
            <p>
              The Spartan Pantry website at SJSU allows students and staff to
              conveniently schedule food pickups while providing real-time
              updates on available pantry items.{" "}
            </p>
          </div>
          <div className = "projectTools">
            <Link to="/project" className="buttonM">
              <p>Explore All Projects</p>
            </Link>
            <div className = "projectControls">
              <button className = "buttonC">←</button>
              <button className = "buttonC">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="movingText">
        <h2>Let's Connect!</h2>
      </div>
      <div className="contact">
        <a className="buttonS" href="mailto:angela.yang146@gmail.com">
          EMAIL
        </a>
        <a className="buttonS" href="https://www.linkedin.com/in/angela-yangg/">
          LINKEDIN
        </a>
        <a className="buttonS" href="https://github.com/angelayang2018">
          GITHUB
        </a>
      </div>
    </div>
  );
}
