import React from "react";
import PageControl from "../../components/PageControl";
import ProjectDetails from "../../components/ProjectDetails";


export default function Instagram() {
  

  return (
    <div className="instagram">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <div>
      
        <img
          className="projectImg"
          src="/images/instagramlogin.png"
          alt="mathshiphome"
        />
      
        <h3>Design</h3>
        <p>↓</p>
        <h4>Theme</h4>
        <h4>Colors</h4>
        <div className="colorsContainer">
          
          <p className="colors instaBlue">#515BD4</p>
          <p className="colors instaPurple">#8134AF</p>
          <p className="colors instaMagenta">#DD2A7B</p>
          <p className="colors instaYellow">#FEDA77</p>
          <p className="colors instaOrange">#F58529</p>
          <p className="colors fbBlue">#316FF6</p>
        </div>
        <h4>Typography</h4>
        <p>Instagram Sans</p>
        <p>Instagram Sans Headline</p>
        
      </div>

      <PageControl to="portfolio" from="catstronauts"></PageControl>
    </div>
  );
}

const projectInfo = {
  title: "Instagram Clone",
  overview:
    "An Instagram Clone, redesigned.",
  team: [],
  tech: "React, HTML, CSS, Javascript, Figma, Firebase",
  timeline: "February 2024 (ongoing)",
  github: "https://github.com/angelayang2018/socialmedia",
  report: "Report",
  reportURL: "https://www.notion.so/Instagram-Clone-Redesign-eef2cbfd8c4e43ef924a6abe506f8007?pvs=4"
};
