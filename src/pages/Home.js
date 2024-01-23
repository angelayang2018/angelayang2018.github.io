import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div>
          <p>Frontend Developer | Software Engineer</p>
          <p>SJSU Computer Science Graduate</p>
          <p>Passionate about Beans</p>
          <p>Currently looking for job 2024</p>
        </div>
        <div className="aboutButtons">
          <Link className="buttonS" to="/about">
            <p>ABOUT</p>
          </Link>
          <a target="_blank" rel="noreferrer" className="buttonS" href="./">
            RESUME
          </a>
        </div>
      </div>

      <div className="skills">
        <h2>SKILLS</h2>
        <div className="skillContainer">
          <div className="skillInfo">
            <svg
              width="32"
              height="42"
              viewBox="0 0 32 42"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.61408 26.5002C-3.51616 13.8944 15.8729 11.6579 15.614 0C22.5809 9.65739 2.82662 12.9665 9.61408 26.5002Z" />
              <path d="M13.6942 27C6.08453 19.8647 17.3216 18.5988 17.1715 12C21.2092 17.4664 9.76053 19.3395 13.6942 27Z" />
              <path d="M0.26753 30.5006C-1.51769 28.8698 6.19458 27.9739 6.76751 28.0008C-5.90757 32.6491 18.2679 30.3659 23.2675 30.0008C18.0828 31.3347 3.69933 33.6355 0.26753 30.5006Z" />
              <path d="M2.26632 35.4561C0.808532 33.8542 7.10628 32.9741 7.57414 33.0006C-2.7762 37.5667 21.5479 34.5 21.5479 34.5L23.0479 35C23.0479 35 4.67843 38.1068 2.26632 35.4561Z" />
              <path d="M4.23511 40.7859C2.98558 38.9689 8.38365 37.9707 8.78467 38.0007C-0.0870466 43.1798 20.3336 38.5671 20.3336 38.5671L22.0479 40.2685C22.0479 40.2685 6.30263 43.7924 4.23511 40.7859Z" />
              <path d="M24.508 26.8003C33.9502 26.792 25.1882 35.454 24.0479 35.7287C26.5887 35.125 32.6297 32.7885 31.1705 28.66C30.1551 25.2463 26.2485 25.7125 24.508 26.8003Z" />
            </svg>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="20" height="40" rx="10" ry="5" />
              <rect x="0" y="10" width="40" height="20" rx="5" ry="10" />
              <circle cx="14.5" cy="5" r="1.85" fill="white" />
              <circle cx="25.5" cy="35" r="1.85" fill="white" />
              <line x1="10" y1="9.5" x2="20" y2="9.5" stroke="white" />
              <line x1="20" y1="30.5" x2="30" y2="30.5" stroke="white" />
              <path
                d="m 9.5,30 c 0,-10 2.5,-10 10,-10 8.5,0 11,0 11,-10"
                stroke="white"
                fill="none"
              />
            </svg>
          </div>
          <div className="skillInfo">
            <h3 className="languages">Languages</h3>
            <ul>
              <li>Java</li>
              <li>HTML</li>
              <li>Python</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="skillContainer">
          <div className="skillInfo">Animation</div>
          <div className="skillInfo">
            <h3 className="frameworks">Frameworks/ Libraries</h3>
            <ul>
              <li>React</li>
              <li>Tailwind</li>
              <li>GSAP</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="skillContainer">
          <div className="skillInfo">Animation</div>
          <div className="skillInfo">
            <h3 className="tools">Additional Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Figma</li>
              <li>MySQL</li>
              <li>Command Line</li>
            </ul>
          </div>
        </div>
      </div>

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

        <div className="projectDetails">
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
              <p>Explore All Projects</p>
            </Link>
            <div className="projectControls">
              <button className="buttonC buttonPrev">←</button>
              <button className="buttonC buttonNext">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="movingText">
        <h1>Let's Connect!</h1>
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
