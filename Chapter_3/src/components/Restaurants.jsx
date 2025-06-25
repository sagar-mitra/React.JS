import { useParams } from "react-router-dom";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantMenuCategory from "./RestaurantMenuCategory.jsx";

const Restaurants = () => {
  const { resId } = useParams();

  const { resInfo, menuItemsList } = useRestaurantMenu(resId);

  // Showing ShimmerCard
  if (resInfo === null && menuItemsList.length === 0)
    return <ShimmerRestaurantCard />;

  // Filtering out all the categories
  const categories =
    resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((e) => {
      return (
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(resInfo?.cards[2]?.card?.card?.info);

  // Destructuring restaurant information
  const {
    name,
    avgRating,
    totalRatingsString,
    city,
    costForTwoMessage,
    cuisines,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.cards[2]?.card?.card?.info?.sla;

  return (
    <>
      <div className="restaurants-container mt-20 flex flex-col items-center justify-evenly">
        <div className="restaurants-card pt-3 w-3xl rounded-lg mb-7">
          <h2 className="restaurant-name text-2xl font-semibold mb-4">
            {name}
          </h2>
          <div className="restaurant-info border-2 rounded-2xl p-4 flex flex-col gap-1">
            <span className="rating mb-3">
              <span className="mr-4">
                <span className="star font-semibold">★</span> {avgRating}{" "}
                <span className="ratings font-semibold">
                  ({totalRatingsString})
                </span>
              </span>
              <span className="">
                <span className="separator mr-2 font-semibold">•</span>
                <span className="price font-semibold">{costForTwoMessage}</span>
              </span>
            </span>

            <div className="cuisines">{cuisines.join(", ")}</div>
            <div className="outlet-info">
              <div className="outlet">
                <div className="dot-line">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>
                <div className="location opacity-65">
                  Outlet - <span className="city opacity-65">{city}</span>
                  <div className="time">
                    {minDeliveryTime}–{maxDeliveryTime} mins
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <RestaurantMenuCategory data={categories}/>
      </div>
    </>
  );
};

export default Restaurants;
