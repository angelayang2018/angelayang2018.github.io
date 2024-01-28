import React from "react";
import SkillAnimation1 from "./SkillAnimation1";




export default function SkillCard({ skill }) {
  const { topic, topicItems } = skill;


  return (
    <div className="skillCard">
     <SkillAnimation1></SkillAnimation1>
      <div className="skillInfo">
        <h3 className={topic}>{topic}</h3>
        <ul>
          {topicItems.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
