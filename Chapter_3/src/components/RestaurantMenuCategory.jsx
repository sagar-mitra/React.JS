import React, { useState } from "react";
import RestaurantsMenuItems from "./RestaurantsMenuItems";

const RestaurantMenuCategory = ({ data }) => {
  const [display, setDisplay] = useState("hidden");

  const handleClick = () => {
    display === "hidden" ? setDisplay("block") : setDisplay("hidden");
  };

  return (
    <div className="bg-gray-400 flex flex-col gap-4 w-3xl">
      {data.map((e) => {
        const { title, categoryId, itemCards } = e?.card?.card;
        return (
          <div
            key={categoryId}
            className="border-b border-t px-2 py-4 w-full bg-[#282828]"
          >
            <div
              className="flex justify-between cursor-pointer border"
              onClick={handleClick}
            >
              <h1 className="text-lg font-semibold">
                {title} ({itemCards.length})
              </h1>
              <span className="text-lg">▽</span>
            </div>
            <div className={`${display}`}>
              <div className="w-full flex flex-col justify-center items-center">
                {itemCards.map((e) => (
                  <RestaurantsMenuItems
                    key={e?.card?.info?.id}
                    itemData={e?.card?.info}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuCategory;
