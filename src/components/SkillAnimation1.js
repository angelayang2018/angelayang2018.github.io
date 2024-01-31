import React from "react";
import { gsap, Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

export default function SkillAnimation1() {
  useGSAP(() => {
    Draggable.create(".drag", {
      type: "x, y",
      bounds: ".skillAnimation1"
    });
  });
  return (
    <div className="skillAnimation1">
      <div className="drag rSquare"><img src="https://i.ibb.co/mGH4vYr/mysql-2.png" alt="mysql" /></div>
      <div className="drag rSquare"></div>
      <div className="drag rSquare"><img src="https://i.ibb.co/nkDY4CN/git-1.png" alt="github" /></div>
      <div className="drag circle"><img src = "https://i.ibb.co/hHqTh4K/docker.png" alt = "docker" /></div>
      <div className="drag rSquare"><img src="https://i.ibb.co/tHGHkVP/terminal.png" alt="terminal" /></div>
    </div>
  );
}
