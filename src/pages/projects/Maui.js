import React from "react";
import { Link } from "react-router-dom";
export default function Maui() {
  return (
    <div className = "maui">
      <Link to="/project">
        <p>← Back to Projects</p>
      </Link>
      <h2>Maui</h2>
    </div>
  );
}
