import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Skill from "../components/Skill";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className="home">
      <div className="intro">
        <p>Frontend Developer | Software Engineer</p>
        <p>SJSU Computer Science Graduate</p>
        <p>Passionate about Beans</p>
        <p>Currently looking for job 2024</p>

        <div className="aboutButtons">
          <Link className="buttonS" to="/about">
            ABOUT
          </Link>
          <a target="_blank" rel="noreferrer" className="buttonS" href="./">
            RESUME
          </a>
        </div>
      </div>

      <Skill skillDetails={skillDetails}></Skill>

      <h2>PROJECTS</h2>
      <div className="projects">
        <Swiper
          modules={[Navigation]}
          loop="true"
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={100}
          navigation={{
            prevEl: ".buttonPrev",
            nextEl: ".buttonNext",
          }}
        >
          <SwiperSlide>
            <img src="https://i.ibb.co/FbwkY1Y/pantry-1.png" alt="pantry-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/dW1BJty/Hack-Davis.png"
              alt="Hack-Davis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/PrkYCPL/MathShip.png" alt="MathShip" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/Q9nw9st/Udemy.png" alt="Udemy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MkZPWhf/maui.png" alt="maui" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/MBK07NP/portfolio.png" alt="portfolio" />
          </SwiperSlide>
        </Swiper>

        <div className="swiperDetails">
          <div>
            <h3>Spartan Pantry</h3>
            <p>
              The Spartan Pantry website at SJSU allows students and staff to
              conveniently schedule food pickups while providing real-time
              updates on available pantry items.{" "}
            </p>
          </div>
          <div className="projectTools">
            <Link to="/project" className="buttonM">
              Explore All Projects
            </Link>
            <div className="projectControls">
              <button className="buttonC buttonPrev">←</button>
              <button className="buttonC buttonNext">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="movingText">
        <h2 className="nostrav">Let's Connect!</h2>
      </div>
      <div className="contact">
        <a className="buttonS" href="mailto:angela.yang146@gmail.com">
          EMAIL
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="buttonS"
          href="https://www.linkedin.com/in/angela-yangg/"
        >
          LINKEDIN
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="buttonS"
          href="https://github.com/angelayang2018"
        >
          GITHUB
        </a>
      </div>
    </div>
  );
}

const skillDetails = [
  {
    topic: "Languages",
    topicItems: ["Java", "HTML", "Python", "CSS", "Javascript"],
  },
  {
    topic: "Frameworks/ Libraries",
    topicItems: ["React", "Tailwind", "GSAP", "Express", "Node"],
  },
  {
    topic: "Additional Tool",
    topicItems: ["Docker", "Figma", "SQL", "Command Line"],
  },
];
