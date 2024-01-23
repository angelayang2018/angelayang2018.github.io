import React from "react";

export default function FeatureCard({ feature }) {
  const { title, description, source, alt } = feature;

  return (
    <div className="featureCard">
      <h4>{title}</h4>
      <p>{description}</p>
      <img src={source} alt={alt} />
    </div>
  );
}
