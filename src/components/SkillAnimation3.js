import React from "react";
import { gsap, Draggable} from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

export default function SkillAnimation3(){
    useGSAP(() => {
        Draggable.create(".drag", {
          type: "x, y",
        });
    
      });
    return ( <div className="skillAnimation3">
    <div className = "drag rSquare"></div>
    <div className = "drag rSquare"></div>
    <div className = "drag rSquare"></div>
    <div className = "drag circle"></div>
    <div className = "drag rSquare"></div>
  </div>);
}