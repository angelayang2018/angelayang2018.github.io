import React from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    const navAnim = gsap
      .from(".navbar", {
        scrollTrigger: {
         
          start: "top top",
         
          onUpdate: (self) => {
            self.direction === -1 ? navAnim.play() : navAnim.reverse();
          },
        },
        yPercent: -100,
        paused: true,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .progress(1);
  });

  return (
    <div className="navbar">
      <Link to="/">
        <h1>angela</h1>
      </Link>
      <Link to="/">
        <h1>yang</h1>
      </Link>
    </div>
  );
}
