import React, { useState } from "react";
import RestaurantsMenuItems from "./RestaurantsMenuItems";

const RestaurantMenuCategory = ({ data, showItem, setShowRestaurantMenu,}) => {
  const [showItemMenu, setShowItemMenu] = useState(false);

  const { title, itemCards } =data;

  const handleClick = () => {
    setShowItemMenu((prev) => !prev);
    setShowRestaurantMenu()
  };

  return (
    <div className="bg-gray-400 flex flex-col w-3xl">
      <div
        className="border-b border-t px-2 py-4 w-full bg-[#282828] mb-4"
      >
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-semibold">
            {title} ({itemCards.length})
          </span>
          <span className="text-lg">{(showItemMenu && showItem) ? "△" : "▽"}</span>
        </div>

        {(showItem && showItemMenu) && <RestaurantsMenuItems itemCards={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
