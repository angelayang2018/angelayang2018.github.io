import React from "react";
import { gsap } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function About() {
  useGSAP(() => {
    gsap
      .timeline()
      .to(".emoji", {
        y: -60,
        duration: 0.1,
        ease: "power2.out",
        delay: 2,
      })
      .to(".emoji", {
        y: 0,
        duration: 0.5,
        ease: "bounce.out",
      })
      .to(".angela", {
        y: -60,
        duration: 0.1,
        ease: "power2.out",
      })
      .to(".angela", {
        y: 0,
        duration: 0.5,
        ease: "bounce.out",
      })
      .play();
  });

  return (
    <div className="about">
      <div className="aboutInfo">
        <h2>
          <span className="emoji">🙆🏻‍♀️</span> is for{" "}
          <span className="angela">Angela</span>
        </h2>
        <p>
          Hi! I'm Angela Yang, frontend software developer based in San Jose, CA. I am a recent graduate
          of San Jose State University with a degree in Computer Science. My
          education at SJSU equipped me with a robust technical foundation, and
          I am committed to staying ahead in the ever-evolving frontend
          landscape.
        </p>
        <br></br>
        <p>
          I specialize in translating designs into captivating user interfaces.
          Whether it's exploring new JavaScript frameworks or adopting modern
          design patterns, I am dedicated to continuous learning and
          improvement.
        </p>
      </div>
      <div className="aboutImage">
        <img
          src="https://i.ibb.co/vLCcKPj/IMG-0659.jpg"
          alt="angie:)"
          border="0"
        />
      </div>
    </div>
  );
}
