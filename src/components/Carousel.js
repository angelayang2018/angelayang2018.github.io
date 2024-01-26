import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <div className="projects">
      <Swiper
        modules={[Navigation]}
        loop="true"
        centeredSlides={true}
        slidesPerView={1}
        navigation={{
          prevEl: ".buttonPrev",
          nextEl: ".buttonNext",
        }}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/FbwkY1Y/pantry-1.png" alt="pantry-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/dW1BJty/Hack-Davis.png" alt="Hack-Davis" />
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
            conveniently schedule food pickups while providing real-time updates
            on available pantry items.{" "}
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
  );
}
