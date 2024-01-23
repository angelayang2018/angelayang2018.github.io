import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";

export default function HackDavis() {
  return (
    <div className="hackdavis">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://devpost.com/software/healthy-food-eoqnch"
        >
          DevPost
        </a>
      </div>
      <img
        className="projectImg"
        src="https://i.ibb.co/68LWpC4/healthyfoods.png"
        alt="healthyfoods"
      />
      <PageControl to="portfolio" from="mathship"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "Heatlhy Foods Website (HackDavis 2021)",
  overview:
    "Hackathon project for a healthy food recipe app. Users can take in an ingredient or a food they really enjoy as well as their location Zip code, and we display healthier alternatives and choices and encourage users to visit nearby farmers markets to shop for their produce.",
  team: [
    {
      name: "Alvin Agana",
      linkedin: "https://www.linkedin.com/in/alvin-agana/",
    },
  ],
  tech: "Python, Flask, HTML, CSS, Javascript",
  timeline: "January 2021",
  github: "https://github.com/angelayang2018/Healthy-Foods",
};
