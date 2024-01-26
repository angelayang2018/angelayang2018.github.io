import React from "react";
import {gsap} from "gsap";
import {useGSAP} from '@gsap/react';

export default function SkillCard({skill}) {
    const {topic, topicItems} = skill;

    useGSAP(() => {
      gsap.to( ".skillAnimation", { rotate: 360 })
    });
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
