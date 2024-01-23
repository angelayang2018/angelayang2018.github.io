import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";

export default function HackDavis() {
  return (
    <div className="hackdavis">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Heatlhy Foods Website (HackDavis 2021)</h2>

      <div className="projectOverview">
        <p>
          Hackathon project for a healthy food recipe app. Users can take in an
          ingredient or a food they really enjoy as well as their location Zip
          code, and we display healthier alternatives and choices and encourage
          users to visit nearby farmers markets to shop for their produce.
        </p>
      </div>

      <div className="projectTech">
        <p>
          Team: Angela Yang and{" "}
          <a
            className="credit"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/alvin-agana/"
          >
            Alvin Agana
          </a>
        </p>
        <p>Technologies Used: Python, Flask, HTML, CSS, Javascript</p>
        <p>Timeline: January 2021</p>
        <p>
          <a
            href="https://github.com/angelayang2018/Healthy-Foods"
            target="_blank"
            rel="noreferrer"
            className="buttonS"
          >
            Github
          </a>
        </p>
      </div>

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
