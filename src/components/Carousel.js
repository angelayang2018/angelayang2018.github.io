import React from "react";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function Carousel() {

  return (
    <div className="carousel">
      <Swiper
        modules={[Navigation]}
        loop="true"
        centeredSlides={true}
        slidesPerView={1}
        navigation={{
          prevEl: ".buttonPrev",
          nextEl: ".buttonNext",
        }}
        breakpoints={{
          800: { slidesPerView: 1.4 },
        }}
      >
        {swiperImages.map((swiperImage, index) => (
          <SwiperSlide key={index}>
            <img src={swiperImage.img} alt={swiperImage.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiperDetails">
        <Swiper
          modules={[EffectFade, Navigation]}
          loop="true"
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{
            prevEl: ".buttonPrev",
            nextEl: ".buttonNext",
          }}
        >
          {swiperText.map((text, index) => (
            <SwiperSlide key={index}>
              <div>
                <h3>{text.title}</h3>
                <p>{text.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
  );
}

const swiperImages = [
  { img: "https://i.ibb.co/FbwkY1Y/pantry-1.png", alt: "Pantry" },
  { img: "https://i.ibb.co/dW1BJty/Hack-Davis.png", alt: "Hack Davis" },
  { img: "https://i.ibb.co/PrkYCPL/MathShip.png", alt: "Math Ship" },
  { img: "https://i.ibb.co/Q9nw9st/Udemy.png", alt: "Pydoku" },
  { img: "https://i.ibb.co/MkZPWhf/maui.png", alt: "Maui Condos" },
  { img: "https://i.ibb.co/MBK07NP/portfolio.png", alt: "Portfolio" },
];

const swiperText = [
  {
    title: "Spartan Pantry",
    text: "The Spartan Pantry Website is designed to streamline and enhance the user experience for ordering essential items from the Spartan Pantry.",
  },
  {
    title: "Hack Davis 2021",
    text: "Hackathon project for a healthy food recipe app.",
  },
  {
    title: "Math Ship",
    text: "MathShip is a straightforward and enjoyable math game inspired by Galaga.",
  },
  {
    title: "Pydoku",
    text: "Simple app that solves sudoku puzzles using backtracking.",
  },
  {
    title: "Maui Condos",
    text: "My portfolio website showcases my journey as a software developer. It features a collection of projects, skills, and experiences that define my passion for creating.",
  },
  {
    title: "Portfolio Website",
    text: "My portfolio website showcases my journey as a software developer. It features a collection of projects, skills, and experiences that define my passion for creating.",
  },
];
