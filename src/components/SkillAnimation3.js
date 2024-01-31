import React from "react";
import { gsap, Draggable} from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);

export default function SkillAnimation3(){
    useGSAP(() => {
        Draggable.create(".languageImg", {
          type: "rotation",
        });
    
      });
    return ( <div className="skillAnimation3">
    <img className = "languageImg" src="https://i.ibb.co/SQrnBmd/languages.png" alt="languages" />
  </div>);
}