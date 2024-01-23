import React from "react";
import PageControl from "../../components/PageControl";
import Features from "../../components/Features";
import ProjectDetails from "../../components/ProjectDetails";

export default function MathShip() {
  return (
    <div className="mathship">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <div className="mathshipImgCont">
        <img
          className="mathshipHome"
          src="https://i.ibb.co/Z2CfjDR/mathshiphome-2.png"
          alt="mathshiphome"
        />
      </div>
      <Features featuresData={featuresData}></Features>

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

const featuresData = [
  {
    title: "Login/Signup",
    description: "Create accounts and login",
    source: "https://i.ibb.co/mCkB2Xt/mathshiplogin.png",
    alt: "Math Ship Login Page",
  },
  {
    title: "Play",
    description: "Users solve math problems to progress through the game",
    source: "https://i.ibb.co/y40gjcY/mathshipplay.png",
    alt: "Math Ship Select Ship Page",
  },
  {
    title: "High Score",
    description: "Display the top 10 highest scores",
    source: "https://i.ibb.co/WgSHFFZ/mathshipscore.png",
    alt: "Math Ship High Score Table",
  },
];

const projectInfo = {
  title: "Math Ship",
  overview:
    "MathShip is a straightforward and enjoyable math game inspired by Galaga. The game focuses on basic arithmetic operations and provides a fun way for players to practice while playing.",
  team: [
    {
      name: "Joshua Yee",
      linkedin: "https://www.linkedin.com/in/jyee1001/",
    },
    {
      name: "Haroon Razzack",
      linkedin: "https://www.linkedin.com/in/haroon-razzack-999472a1/",
    },
  ],
  tech: "JavaFX, Java, Scenebuilder, CSS, Eclipse, SQL",
  timeline: "September - December 2021",
  github: "https://github.com/angelayang2018/CS_151_Math_Ship_Term_Project",
};
