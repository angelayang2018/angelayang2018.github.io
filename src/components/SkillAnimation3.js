import React from "react";
import { gsap, Draggable, ScrollTrigger} from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable, ScrollTrigger);

export default function SkillAnimation3(){
    useGSAP(() => {
        Draggable.create(".languageImg", {
          type: "rotation",
        });
        gsap.to(".languageImg", {
          rotate: 5,
        })  
      });
    return ( <div className="skillAnimation3">
    <img className = "languageImg" src="https://i.ibb.co/vPsq8q8/Component-26-1.png" alt="Component-26" />
  </div>);
}