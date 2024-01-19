import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div className = "projectPage">
        <h2>Take a look around</h2>
      <div className="projectContainer">
        <div>
            <Link to = "/project/spartanpantry">
          <img src="https://i.ibb.co/FbwkY1Y/pantry-1.png" alt="pantry-1" />
          </Link>
          <div>
            <h3>Spartan Pantry</h3>
          </div>
        </div>
        <div>
        <Link to = "/project/hackdavis">
          <img src="https://i.ibb.co/dW1BJty/Hack-Davis.png" alt="Hack-Davis" />
          </Link>
          <div>
            <h3>Hack Davis Submission</h3>
          </div>
        </div>
        <div>
        <Link to = "/project/mathship">
          
          <img src="https://i.ibb.co/PrkYCPL/MathShip.png" alt="MathShip" />
          </Link>
          <div>
            <h3>Math Ship</h3>
          </div>
        </div>
        <div>
        <Link to = "/project/udemy">
          <img src="https://i.ibb.co/Q9nw9st/Udemy.png" alt="Udemy" />
          </Link>
          <div>
            <h3>Udemy Projects</h3>
          </div>
        </div>
        <div>
        <Link to = "/project/maui">
          <img src="https://i.ibb.co/MkZPWhf/maui.png" alt="maui" />
          </Link>
          <div>
            <h3>Maui Condos</h3>
          </div>
        </div>
        <div>
        <Link to = "/project/portfolio">
          <img src="https://i.ibb.co/MBK07NP/portfolio.png" alt="portfolio" />
          </Link>
          <div>
            <h3>Portfolio (this website!)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
