import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { BODY_RESTAURANTS_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); 

  // Applying online status : onLine/offLine
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Currently you are offline, check your internet connection</h1>;
  }


    // Filter button
  const handleFilterBtn = () => {
    let filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
    setFilteredRestaurant(filteredList);
  };

  // Fetching data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_RESTAURANTS_API);

    const jsonData = await data.json();

    const restaurants =
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;


    setFilteredRestaurant(restaurants);
    setListOfRestaurant(restaurants);
  };

  // const RestaurantCardAverage = withBelowAvgTag(RestaurantCard);

  return (
    <div className=" flex flex-col gap-10 p-3 mt-8">
      <div className="body-upper flex flex-row-reverse items-center justify-between ">
        <div className="filter-btn ">
          <button
            className="my-button py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={handleFilterBtn}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search-container flex items-center gap-5">
          <input
            type="text"
            placeholder="type restaurant name..."
            className="search-input py-1.5 sm:py-2 px-3 block w-md border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchList);
            }}
            className="py-1.5 px-4.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-hidden focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
      <div className="bodyRestCards grid grid-cols-5 gap-4 ">
        {filteredRestaurant.length === 0
          ? Array(15)
              .fill("")
              .map((e, idx) => <div key={idx} className=" flex"><ShimmerRestaurantCard /> </div>)
          : filteredRestaurant.map((restData) => {
              return (
                <Link
                  key={restData.info.id}
                  to={`/restaurants/${restData.info.id}`}
                >
                  {/* {restData.info.avgRating < 4.5 ? (
                    <RestaurantCardAverage resData={restData} />
                  ) : (
                    <RestaurantCard resData={restData} />
                  )} */}
                  <RestaurantCard resData={restData} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
