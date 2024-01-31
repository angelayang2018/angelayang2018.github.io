import React from "react";
import { gsap, Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Flip);

export default function SkillAnimation2() {
  useGSAP(() => {
    
  });
  return (
    <div className="skillAnimation2">
      <div className="frameworkIcon">
        <img src="https://i.ibb.co/g72QPC0/greensock.png" alt="greensock" />
      </div>
      <div className="frameworkIcon">
        <img src="https://i.ibb.co/McNtNdq/react.png" alt="react" />
      </div>
      <div className="frameworkIcon">
        <img
          src="https://i.ibb.co/kh1c6hQ/sass.png"
          alt="sass"
        />
      </div>
      <div className="frameworkIcon">
        <img src="https://i.ibb.co/brS6tbr/tailwind.png" alt="tailwind" />
      </div>
      <div></div>
    </div>
  );
}
