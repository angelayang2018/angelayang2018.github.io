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
      <div className="drag rSquare"></div>
      <div className="drag rSquare"></div>
      <div className="drag rSquare"></div>
      <div className="drag circle"></div>
      <div className="drag rSquare"></div>
    </div>
  );
}
