import React from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap/all";

const PageTrans = ({ children }) => {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={() => {
          gsap
            .timeline({ paused: true })
          
            .play();
        }}
        onExit={() => {
          gsap
            .timeline({ paused: true })
            
            .to(".rect", {
              y: 1000,
             
              stagger: {
                ease: "power1.out",
                each: 0.05,
              },
              duration: 0.25
              
            })
            .play();
        }}
      >
        <div>
          <div className="transitionCont">
            <div className="rect"></div>
            <div className="rect"></div>
            <div className="rect"></div>
            <div className="rect"></div>
            <div className="rect"></div>
          </div>
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};
export default PageTrans;