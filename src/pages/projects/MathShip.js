import React from "react";
import PageControl from "../../components/PageControl";
import { Link } from "react-router-dom";
import Features from "../../components/Features";

export default function MathShip() {
  const featuresData = [
    {
      title: "Login/Signup",
      description: "Create accounts and login",
      source: "https://i.ibb.co/mCkB2Xt/mathshiplogin.png",
    },
    {
      title: "Play",
      description: "Users solve math problems to progress through the game",
      source: "https://i.ibb.co/y40gjcY/mathshipplay.png",
    },
    {
      title: "High Score",
      description: "Display the top 10 highest scores",
      source: "https://i.ibb.co/WgSHFFZ/mathshipscore.png",
    },
  ];

  return (
    <div className="mathship">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Math Ship</h2>
      <div className="projectOverview">
        <p>
          MathShip is a straightforward and enjoyable math game inspired by
          Galaga. The game focuses on basic arithmetic operations and provides a
          fun way for players to practice while playing.
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
        <p>Technologies Used: JavaFX, Java, Scenebuilder, CSS, Eclipse, SQL</p>
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
      <div className="mathshipImgCont">
        <img
          className="mathshipHome"
          src="https://i.ibb.co/Z2CfjDR/mathshiphome-2.png"
          alt="mathshiphome"
        />
      </div>
      <Features featuresData = {featuresData}></Features>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Icons</h4>
        <div className="mathshipImgCont">
          <img
            className="mathshipImg"
            src="https://i.ibb.co/HB5ZH2q/mathship-1.png"
            alt="mathshipicon"
          />
        </div>
        <h4>Typography</h4>
        <p className="galactica">Galactica Grid</p>
      </div>

      <PageControl to="hackdavis" from="spartanpantry"></PageControl>
    </div>
  );
}
