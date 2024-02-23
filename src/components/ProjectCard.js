import React from "react";
import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {
  const { title, link, img, alt } = project;

 
  
  return (
    <div className="projectCard">
      <Link to={link}>
        <img src={img} alt={alt} />
      </Link>
      <h3>{title}</h3>
    </div>
  );
}
