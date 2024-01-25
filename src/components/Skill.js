import React from "react";
import SkillCard from "./SkillCard";

export default function Skill({ skillDetails }) {
  return (
    <div className="skills">
      <h2>SKILLS</h2>
      <hr></hr>
      {skillDetails.map((skill, index) => (
        <div>
        <SkillCard key={index} skill={skill} />
        <hr></hr>
        </div>
      ))}
    </div>
  );
}
