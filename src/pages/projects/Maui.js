import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";

export default function Maui() {
  return (
    <div className="maui">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <img
        className="projectImg"
        src="https://i.ibb.co/tDW75yV/mauihome.png"
        alt="Maui Home Page"
      />
      <div>
        <h3>Objective</h3>
        <ul>
          <li>
            Create a clean and inviting design that mirrors the tranquility and
            beauty of Maui
          </li>
          <li>
            Aesthetic revolves around a tropical theme, employing soothing
            colors and captivating imagery, capturing the essence of the island
          </li>
          <li>Facilitate user engagement and streamline information access</li>
          <li>
            Feature Airbnb links, ensuring easy access of potential visitors
          </li>
        </ul>
      </div>
      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Theme</h4>
        <p>
          For the tropical theme and soothing color palette, I curated a
          selection of hues that reflect the esscence of Maui.
        </p>
        <h4>Colors</h4>
        <p>
          I drew inspiration from the island's natural elements. The palette
          includes:{" "}
        </p>
        <ul>
          <li>
            Serene blue tones reminiscent of the ocean, turquoise waters, and
            the sky
          </li>
          <li>Warm gold hues symbolizing the glow of the sun</li>
          <li>Earthy brown prevalent in Hawaiian furniture</li>
          <li>
            A soft pink shade found in many of the native Hawaiian flowers
          </li>
        </ul>
        <div className="colorsContainer">
          <p className="colors mauiTurq">#11DFF0</p>
          <p className="colors mauiGray">#F1F0F0</p>
          <p className="colors mauiTan">#CF9E3E</p>
          <p className="colors mauiPink">#F0B099</p>
          <p className="colors mauiBlue">#5B668B</p>
        </div>
        <h4>Typography</h4>
        <p>Montserrat</p>
        <p>Cinzel</p>
        <p></p>
      </div>
      <PageControl to="pydoku" from="portfolio"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "Maui Condos",
  overview:
    "This website aims to trascend the conventional Airbnb advertising apporach and offers users valuable insights into the Maui condos.",
  team: [],
  tech: "React, HTML, CSS, Javascript, Figma",
  timeline: "October 2023 - January 2024 (ongoing)",
  github: "https://github.com/angelayang2018/portfolio_website",
  report: "Report",
  reportURL:
    "https://docs.google.com/document/d/1ZpMYjZGotLS6SmQDj8c2H4OD47N5AtC1Nz1r54OtNi0/edit?usp=sharing",
};
