import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, slaString, avgRating } =
    resData?.info;
  return (
    <div className="restaurant-card border-2 w-72 h-[380px] rounded-3xl overflow-hidden hover:scale-95 duration-200 ease-linear ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="restaurant-image rounded-t-lg h-52 w-full object-cover object-center"
      />
      <div className="restaurant-details flex flex-col p-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-3">
          {name}
        </h2>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {avgRating} ☆
        </p>
        <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-400">
          {cuisines.join(", ")}
        </p>
        <p className=" mt-1  text-gray-500 dark:text-neutral-400">
          {slaString}
        </p>
      </div>
    </div>
  );
};

// Higher Order Component
// export const withBelowAvgTag = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <>
//         <h1 className="absolute bg-red-300 px-1.5 py-1 rounded-lg mt-1.5 text-black z-100">Below Average</h1>
//         <RestaurantCard {...props} />
//       </>
//     );
//   };
// };

export default RestaurantCard;
