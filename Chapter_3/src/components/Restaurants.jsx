import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "../CSS/restaurants.css";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import RestaurantsMenuItems from "./RestaurantsMenuItems";

const Restaurants = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItemsList, setMenuItemsList] = useState([]);

  const {resId} = useParams()

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8555231&lng=88.7439874&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const jsonData = await data.json();
    setResInfo(jsonData.data);
    setMenuItemsList(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
  };

  if (resInfo === null && menuItemsList.length === 0 ) return <ShimmerRestaurantCard />;
  console.log(resId);

  const {
    name,
    avgRating,
    totalRatingsString,
    city,
    costForTwoMessage,
    cuisines,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { minDeliveryTime, maxDeliveryTime } = resInfo?.cards[2]?.card?.card?.info?.sla;


  return (
    <>
      <div className="restaurants-container">
        <div className="restaurants-card">
          <h2 className="restaurant-name">{name}</h2>
          <div className="restaurant-info">
            <span className="rating">
              <span className="star">★</span> {avgRating}{" "}
              <span className="ratings">({totalRatingsString})</span>
            </span>
            <span className="separator">•</span>
            <span className="price">{costForTwoMessage}</span>
          </div>
          <div className="cuisines">{cuisines.join(", ")}</div>
          <div className="outlet-info">
            <div className="outlet">
              <div className="dot-line">
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="location">
                Outlet <span className="city">{city}</span>
                <div className="time">
                  {minDeliveryTime}–{maxDeliveryTime} mins
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        {menuItemsList.map((e) => <RestaurantsMenuItems key={e?.card?.info?.id} itemData={e?.card?.info} /> )}

        
      </div>
    </>
  );
};

export default Restaurants;
