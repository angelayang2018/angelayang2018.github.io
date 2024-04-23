import React from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  useGSAP(() => {
    gsap.from(".projectCard", {
      scrollTrigger: {
        start: "top-=800 center+=150",
        end: "bottom+=200 bottom",
        scrub: 1,
        trigger: ".projectCard",
      },
      y: 500,
      stagger: 0.2,
      opacity: 0,


    });

    gsap.to(".projectHeader h2", {
      y: 0,
      delay: 1,
      opacity: 1,
    });
    
  });

  return (
    <div className="projectPage">
     <div className = "projectIntro">
      <div className = "projectHeader">
        <h2>Take a look around</h2>
        </div>
        </div>
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
    title: "Instagram Clone",
    link: "/project/instagram",
    img: "https://i.ibb.co/G3j5N5V/instagram.png",
    alt: "Instagram Clone",
  },
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
