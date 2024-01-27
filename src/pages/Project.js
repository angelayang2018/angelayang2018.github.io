import React from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {

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
    <div className="projectPage">
      <h2>Take a look around</h2>
      <div className="projectContainer">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Portfolio (this website!)",
    link: "/project/portfolio",
    img: "https://i.ibb.co/MBK07NP/portfolio.png",
    alt: "portfolio",
  },
  {
    title: "Maui Condos",
    link: "/project/maui",
    img: "https://i.ibb.co/MkZPWhf/maui.png",
    alt: "maui",
  },
  {
    title: "Pydoku",
    link: "/project/pydoku",
    img: "https://i.ibb.co/Q9nw9st/Udemy.png",
    alt: "Pydoku",
  },
  {
    title: "Spartan Pantry",
    link: "/project/spartanpantry",
    img: "https://i.ibb.co/FbwkY1Y/pantry-1.png",
    alt: "Pantry",
  },
  {
    title: "Math Ship",
    link: "/project/mathship",
    img: "https://i.ibb.co/PrkYCPL/MathShip.png",
    alt: "MathShip",
  },
  {
    title: "Hack Davis 2021",
    link: "/project/hackdavis",
    img: "https://i.ibb.co/dW1BJty/Hack-Davis.png",
    alt: "Hack-Davis",
  },
];
