import React from "react";
import { Link } from "react-router-dom";
export default function Udemy() {
  return (
    <div className = "udemy">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Udemy Projects</h2>
    </div>
  );
}
