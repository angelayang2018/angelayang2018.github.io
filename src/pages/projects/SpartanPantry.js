import React from "react";
import { Link } from "react-router-dom";
import PageControl from "../../components/PageControl";

export default function SpartanPantry() {
  return (
    <div className="spartanpantry">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Spartan Pantry</h2>
      <div className = "projectOverview">
        <p>
          The Spartan Pantry Website is designed to streamline and enhance the
          user experience for ordering essential items from the Spartan Pantry.
          It aims to provide an efficient and user-friendly platform for the San
          Jose State University community to access pantry resources
          conveniently.
        </p>
      </div>
      <div className="features"></div>

      <div className="projectTech">
        <p>
          Team: Angela Yang and{" "}
          <a href="https://www.linkedin.com/in/barnabas-yuen-cs/">
            Barnabas Yuen
          </a>
        </p>
        <p>
          Technologies Used: React, Javascript, HTML, CSS, Docker, Redis, Node,
          Express, Figma
        </p>
        <p>Timeline: March - May 2023</p>
        <p>
          <a href="https://github.com/ginilo/CS157C-team5" className="buttonS">
            Github
          </a>
        </p>
      </div>

      <div>
        <a href="https://docs.google.com/document/d/1wa41YxHJZWbbHBnAJoCgxomVUGHQ4he7Kbm-EgiVw9w/edit?usp=sharing">
          Proof of Concept
        </a>
      </div>
      <div>
        <a href="https://docs.google.com/document/d/1206R--RGbNKehLk_M9Qp8iX0ZOf2fxBecjUPAoDnnss/edit?usp=sharing">
          Final Report
        </a>
      </div>
      <div>
        <div className="tempImage"></div>
      </div>
      <div>
        <h3>Features</h3>
        <div className="features">
          <div className="featureItem">
            <h4>Browse Inventory</h4>
            <p>Browse through pantry product inventory in real time</p>
            <div className="featureSample"></div>
          </div>
          <div className="featureItem">
            <h4>Profile</h4>
            <p>Show last visted date, and recent purchases</p>
            <div className="featureSample"></div>
          </div>
          <div className="featureItem">
            <h4>Shopping Cart</h4>
            <p>Add, delete items and place orders </p>
            <div className="featureSample"></div>
          </div>
        </div>
      </div>
      <div>
        <h3>Redis Database</h3>
        <p>↓</p>
        <h4>Use Case Diagrams</h4>
        <h4>Data Model</h4>
        <div className="tempImage"></div>
        <div className="tempImage"></div>
      </div>
      <PageControl to ="mathship" from = "pydoku" ></PageControl>
    </div>
  );
}
