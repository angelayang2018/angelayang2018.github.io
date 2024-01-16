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
        <div>
          <Link to="/about">
            <button>ABOUT</button>
          </Link>
          <button>RESUME</button>
        </div>
      </div>

      <div className="skills">
        <h2>SKILLS</h2>
        <div className="languages">
          <div>
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

        <div className="frameworks">
          <div>
            <h3>Frameworks/Libraries</h3>
            <ul>
              <li>React</li>
              <li>Tailwind</li>
              <li>GSAP</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
        </div>

        <div className="tools">
          <div>
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
        <button>Explore All Projects</button>
      </div>

      <div>
        <button>EMAIL</button>
        <button>LINKEDIN</button>
        <button>GITHUB</button>
      </div>
    </div>
  );
}
