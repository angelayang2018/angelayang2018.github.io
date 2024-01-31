import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";

export default function HackDavis() {
  return (
    <div className="hackdavis">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <img
        className="projectImg"
        src="https://i.ibb.co/68LWpC4/healthyfoods.png"
        alt="healthyfoods"
      />
      <div>
        <h3>Objective</h3>
        <ul>
          <li> Build a project that addresses a social good initiative</li>
        </ul>
        <h3>Schedule</h3>
        <ul>
          <li>Begin work on 9:00 AM PT on Saturday, January 16, 2021</li>
          <li>Submit project before 7:30 PM PT on Sunday, January 17, 2021</li>
        </ul>
      </div>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Colors</h4>
        <div className="colorsContainer">
          <p className="colors hackGreen">#69CF72</p>
          <p className="colors hackPink">#E57575</p>
        </div>
        <h4>Typography</h4>
        <p>Montserrat</p>
        <p className="lemonmilk">Lemon Milk</p>
        <p className="nicholia">Nicholia</p>
        <p></p>
      </div>

      <div>
        <h3>Challenges/Lessons Learned</h3>
        <ul>
          <li>
            Encountered challenges stemming from organizational issues and high
            stress levels
          </li>

          <li>
            Underestimated the scope of work required for the development of our
            application
          </li>
          <li>
            Had to acquire proficiency in various areas, effectively learning
            everything from scratch
          </li>
          <li>Introduced to Sketch and Figma</li>
        </ul>
      </div>

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
  timeline: "January 16 - January 17, 2021",
  github: "https://github.com/angelayang2018/Healthy-Foods",
  report: "DevPost",
  reportURL: "https://devpost.com/software/healthy-food-eoqnch",
};
