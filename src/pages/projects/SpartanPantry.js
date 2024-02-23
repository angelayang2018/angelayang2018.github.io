import React from "react";
import PageControl from "../../components/PageControl";
import Features from "../../components/Features";
import ProjectDetails from "../../components/ProjectDetails";

export default function SpartanPantry() {
  return (
    <div className="spartanpantry">
      <ProjectDetails projectInfo={projectInfo}></ProjectDetails>
      <div>
        <div>
          <img
            className="pantryhome"
            src="https://i.ibb.co/Mg3rPw7/pantryhome.png"
            alt="pantryhome"
          />
        </div>
      </div>
      <Features featuresData={featuresData}></Features>
      <div>
        <h3>Redis Database</h3>
        <p>↓</p>
        <h4>Data Model</h4>
        <p className="modelInfo">
          User, product and order information were modeled using hashes in
          Redis. The key for the hashes were the username, product id, and order
          id, respectively. Each hash had a corresponding set, which would keep
          track of each unique entry. A sorted set was created to keep track of
          popular items.
        </p>
        <div className="modelImgCont">
          <img
            className="modelImg"
            src="https://i.ibb.co/zbpfGft/pantry-Model-3.png"
            alt="pantry-Model"
          />
        </div>
      </div>

      <div>
        <h3>Design</h3>
        <p>↓</p>
        <h4>Colors</h4>
        <div className="colorsContainer">
          <p className="colors pantryBlue">#0067A7</p>
          <p className="colors pantryYellow">#D99800</p>
        </div>
        <h4>Typography</h4>
        <p className="arial">Arial</p>
      </div>

      <div>
        <h3>Challenges/Lessons Learned</h3>
        <ul>
          <li>
            One team member left halfway through the semester without notifying
            the rest of the team
          </li>
          <li>New to Redis databases and Node/Express</li>
          <li>Feature changes due to limited resources and time</li>
          <li>Poor communication and time management within the team</li>
        </ul>
      </div>

      <PageControl to="mathship" from="pydoku"></PageControl>
    </div>
  );
}

const featuresData = [
  {
    title: "Browse Inventory",
    description: "Browse through pantry product inventory in real time",
    source: "https://i.ibb.co/GJwDFyZ/pantrylogin.png",
    alt: "Pantry Inventory Page",
  },
  {
    title: "Profile",
    description: "Show last visted date, and recent purchases",
    source: "https://i.ibb.co/m4gNp6W/pantryprofile.png",
    alt: "Pantry Profile Pge",
  },
  {
    title: "Shopping Cart",
    description: "Add, delete items and place orders",
    source: "https://i.ibb.co/tLPrLm4/pantrycart.png",
    alt: "Pantry Shopping Cart",
  },
];

const projectInfo = {
  title: "Spartan Pantry",
  overview:
    " The Spartan Pantry Website is designed to streamline and enhance the user experience for ordering essential items from the Spartan Pantry. It aims to provide an efficient and user-friendly platform for the San Jose State University community to access pantry resources conveniently.",
  team: [
    {
      name: "Barnabas Yuen",
      linkedin: "https://www.linkedin.com/in/barnabas-yuen-cs/",
    },
  ],
  tech: "React, Javascript, HTML, CSS, Docker, Redis, Node, Express, Figma",
  timeline: "March - May 2023",
  github: "https://github.com/angelayang2018/CS157C-team5",
  report: "Report",
  reportURL:
    "https://docs.google.com/document/d/1206R--RGbNKehLk_M9Qp8iX0ZOf2fxBecjUPAoDnnss/edit?usp=sharing",
};
