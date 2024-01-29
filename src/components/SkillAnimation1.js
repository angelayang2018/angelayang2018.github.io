import React from "react";
import { gsap, Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

export default function SkillAnimation1() {
  useGSAP(() => {
    var startX, startY;
    Draggable.create(".drag", {
      type: "x, y",
      onPress: function () {
        startX = this.x;
        startY = this.y;
      },
      onRelease: function () {
        if (false) {
         this.to(this.target, 1, { x: startX, y: startY });
        }
      },
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
