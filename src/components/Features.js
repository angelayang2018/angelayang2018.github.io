import React from "react";
import FeatureCard from "./FeatureCard";

export default function Features({featuresData}) {
  return (
    <div>
      <h3>Features</h3>
      <div className="featuresCont">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}
