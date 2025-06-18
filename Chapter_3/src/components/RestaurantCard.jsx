import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, slaString, avgRating } = resData?.info;
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL +cloudinaryImageId}
        alt={name}
        className="restaurant-image"
      />
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <p className="restaurant-time">{slaString}</p>
        <p className="restaurant-time">{avgRating}☆</p>
      </div>
    </div>
  );
};

export default RestaurantCard;