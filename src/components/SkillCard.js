import React from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SkillCard({ skill }) {
  const { topic, topicItems } = skill;

  useGSAP(() => {
    gsap.to(".skillAnimation", {
      scrollTrigger: {
        trigger: ".skillAnimation",
        start: "top center",
        scrub: 1,
        markers: true,
        toggleActions: "restart pause reverse pause",
      },
      rotate: 360,

    });
  });
  return (
    <div className="skillCard">
      <div className="skillAnimation">Animation</div>
      <div className="skillInfo">
        <h3 className={topic}>{topic}</h3>
        <ul>
          {topicItems.map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
