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
        timeout={1500}
        onEnter={() => {
          window.scrollTo({ top: 0, left: 0 });
          gsap
            .timeline({ paused: true })
            .set(".rect", {
              y: "1000px",
            })
            .to(".rect", {
              y: "-1000px",
              stagger: {
                ease: "power1.out",
                each: 0.1,
              },
              delay: 0.5,
              duration: 0.5,
            })
            .play();
        }}
        onExit={() => {
          gsap
            .timeline({ paused: true })
            .to(".rect", {
              y: 1000,

              stagger: {
                ease: "power1.out",
                each: 0.1,
              },
              duration: 0.5,
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
