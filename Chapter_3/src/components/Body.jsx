import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { BODY_RESTAURANTS_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // Filter button
  const handleFilterBtn = () => {
    let filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
    setFilteredRestaurant(filteredList);
  };

  if (listOfRestaurant.length === 0) return <ShimmerRestaurantCard />;

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
    setListOfRestaurant(restaurants)
  };

  return (
    <>
      <div className="body-upper">
        <div className="filter-btn">
          <button className="my-button" onClick={handleFilterBtn}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchList = listOfRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="bodyRestCards">
        {filteredRestaurant.length === 0
          ? Array(15)
              .fill("")
              .map((e,idx) => <ShimmerRestaurantCard key={idx} />)
          : filteredRestaurant.map((restData) => {
              return (
                <Link key={restData.info.id} to={`/restaurants/${restData.info.id}`} ><RestaurantCard resData={restData} /></Link>
              );
            })}
           
      </div>
    </>
  );
};

export default Body;
