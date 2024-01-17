import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <p>Frontend Developer | Software Engineer</p>
          <p>SJSU Computer Science Graduate</p>
          <p>Passionate about Beans</p>
          <p>Currently looking for job 2024</p>
        </div>
        <div className = "aboutButtons">
          <Link className = "buttonS" to="/about">
            <p>ABOUT</p>
          </Link>
          <a className = "buttonS" href = "./">RESUME</a>
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

      <div>
        <h2>PROJECTS</h2>
        <Link to = "/project" className = "buttonM">
        <p>Explore All Projects</p>
        </Link>
      </div>

        <div className = "movingText"><h2>Let's Connect!</h2></div>
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
