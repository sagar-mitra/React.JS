import "../CSS/restaurantsMenuItems.css"

const RestaurantsMenuItems = ({itemData}) => {

    const {name, price, description} = itemData;
    const {rating, ratingCountV2} = itemData?.ratings?.aggregatedRating
  return (
    <>
      <div className="menu-item">
        <div className="menu-left">
          <h3 className="item-name">{name}</h3>
          <div className="price">₹{price/100}</div>
          <div className="rating">
            <span className="star">★</span>
            <span className="rate">{rating}</span>
            <span className="votes">({ratingCountV2})</span>
          </div>
          <p className="desc">
            {description}
          </p>
        </div>
        <div className="menu-right">
          <img src="eggchow.jpg" alt={name} className="dish-img" />
          <button className="add-btn">ADD</button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default RestaurantsMenuItems;
