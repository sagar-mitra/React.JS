import React from "react";

const ShimmerRestaurantMenuList = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-20 text-white">
      {/* Header Skeleton */}
      <div className="mb-4">
        <div className="h-6 w-48 bg-white animate-pulse rounded-md mb-2 p-6"></div>
        <div className="h-36 p-2 flex flex-col justify-evenly w-full bg-white animate-pulse rounded-lg">
            <div className="h-5 w-40 bg-gray-200 rounded"></div>
            <div className="h-5 w-36 bg-gray-200 rounded"></div>
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Menu Skeleton List */}
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-md animate-pulse">
              <div className="h-5 w-40 bg-gray-200 rounded"></div>
              <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerRestaurantMenuList;