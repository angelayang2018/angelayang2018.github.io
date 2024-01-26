import React from "react";

export default function SkillCard({skill}) {
    const {topic, topicItems} = skill;
  return (
    <div className = "skillCard">
      <div className="skillAnimation">Animation</div>
      <div className="skillInfo">
        <h3 className = {topic}>{topic}</h3>
        <ul>
        {topicItems.map((listItem) => (
          <li key = {listItem}>{listItem}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}
