import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, slaString, avgRating } = resData?.info;
  return (
    <div className="restaurant-card border-2 w-72 h-[380px] rounded-3xl overflow-hidden">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image rounded-t-lg h-52 w-full object-cover object-center"
      />
      <div className="restaurant-details flex flex-col p-3.5">
        <h2 className="restaurant-name text-lg font-bold text-gray-800 dark:text-white mt-3">{name}</h2>
        <p className="restaurant-cuisines mt-1 text-gray-500 dark:text-neutral-400">{cuisines.join(", ")}</p>
        <p className="restaurant-time mt-1 text-gray-500 dark:text-neutral-400">{slaString}</p>
        <p className="restaurant-time mt-1 text-gray-500 dark:text-neutral-400">{avgRating}☆</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
