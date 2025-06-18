import React from "react";
// Import shimmer-specific styles

const ShimmerRestaurantCard = () => {
  return (
    <div className="restaurant-card shimmer-card">
      <div className="shimmer-image shimmer-bg"></div>
      <div className="restaurant-details">
        <div className="shimmer-line shimmer-bg w70" />
        <div className="shimmer-line shimmer-bg w90" />
        <div className="shimmer-line shimmer-bg w50" />
        <div className="shimmer-line shimmer-bg w40" />
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard;
