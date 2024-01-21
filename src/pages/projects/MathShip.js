import React from "react";
import PageControl from "../../components/PageControl";
import { Link } from "react-router-dom";

export default function MathShip() {
  return (
    <div className="mathship">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Math Ship</h2>
      <div className="projectOverview">
        <p>
          MathShip is a straightforward and enjoyable math game
          inspired by Galaga. The game focuses on basic arithmetic operations
          and provides a fun way for players to practice while playing.
        </p>
      </div>
      <div className="projectTech">
        <p>
          Team: Angela Yang,{" "}
          <a href="https://www.linkedin.com/in/jyee1001/">Joshua Yee </a>
          and{" "}
          <a href="https://www.linkedin.com/in/haroon-razzack-999472a1/">
            Haroon Razzack
          </a>
        </p>
        <p>Technologies Used: JavaFX, Java, Scenebuilder, CSS, Eclipse</p>
        <p>Timeline: September - December 2021</p>
        <p>
          <a
            href="https://github.com/angelayang2018/CS_151_Math_Ship_Term_Project"
            className="buttonS"
          >
            Github
          </a>
        </p>
      </div>
      <div>
        <div className="tempImage"></div>
      </div>
      <div>
        <h3>Features</h3>
        <div className="features">
          <div className="featureItem">
            <h4>Login/Signup</h4>
            <p>Create accounts and login</p>
            <div className="featureSample"></div>
          </div>
          <div className="featureItem">
            <h4>Play</h4>
            <p>Users solve math problems to progress through the game</p>
            <div className="featureSample"></div>
          </div>
          <div className="featureItem">
            <h4>High Score</h4>
            <p>Display the top 10 highest scores</p>
            <div className="featureSample"></div>
          </div>
        </div>
      </div>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Icons</h4>
        <h4>Typography</h4>
      </div>

      <PageControl></PageControl>
    </div>
  );
}
