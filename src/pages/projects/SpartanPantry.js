import React from "react";

export default function SpartanPantry() {
  return (
    <div className="spartanpantry">
      <h2>Spartan Pantry</h2>

      <div className="features"></div>

      <div className="projectTech">
        <p>
          Team: Angela Yang and{" "}
          <a href="https://www.linkedin.com/in/barnabas-yuen-cs/">
            Barnabas Yuen
          </a>
        </p>
        <p>
          Technologies Used: React, HTML, CSS, Docker, Redis, Node, Express,
          Figma
        </p>
        <p>Timeline: March - May 2023</p>
        <p className="buttonS">Github</p>
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
        <h3>Prototypes</h3>
      </div>
      <div>
        <h3>Features</h3>
        <div className = "features">
        <div><h4>Browse Inventory</h4></div>
          <div>
            <h4>Profile</h4>
          </div>
          <div>
            <h4>Shopping Cart</h4>
          </div>
        </div>
      </div>
      <div>
        <h3>Redis Database</h3>
        <p>↓</p>
        <h4>Use Case Diagrams</h4>
        <h4>Data Model</h4>
      </div>
    </div>
  );
}
