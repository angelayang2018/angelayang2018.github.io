import React from "react";

export default function FeatureCard({feature}) {
    const { title, description, source } = feature;

  return (
    <div className="featureCard">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="featureImg">
        <img src={source} />
      </div>
    </div>
  );
}
