import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const RestaurantsMenuItems = ({ itemCards }) => {
  // Used to dispatch Redux actions
  const dispatch = useDispatch();

  const handleAddItemBtn = (items, name) => {
    dispatch(addItem(items));
    toast.success(`${name} is added to the cart` )
  };

  return (
    <div className="flex flex-col items-center ">
      {itemCards.map((e) => {
        const {
          name,
          price,
          description,
          imageId,
          id,
          finalPrice,
          defaultPrice,
        } = e.card.info;
        const { rating, ratingCountV2 } = e.card.info.ratings?.aggregatedRating;
        return (
          <div
            key={id}
            className="menu-item w-2xl border-b-2 mt-3 mb-4 p-4 flex justify-between"
          >
            <div className="menu-left flex flex-col gap-3  w-[67%]">
              <h3 className="item-name text-lg font-semibold">{name}</h3>
              <div className="price">
                ₹{finalPrice / 100 || defaultPrice / 100 || price / 100}
              </div>
              <div className="rating text-sm">
                <span className="star">★</span>
                <span className="rate">{rating}</span>
                <span className="votes">({ratingCountV2})</span>
              </div>
              <p className="desc text-sm opacity-70">{description}</p>
            </div>
            <div className="menu-right w-[30%] flex flex-col p-4 items-center gap-5">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
                alt={name}
                className="dish-img w-36 h-36 object-cover rounded-xl"
              />
              <button
                className="py-1.5 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-hidden focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 cursor-pointer"
                onClick={() => handleAddItemBtn(e, name)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantsMenuItems;
