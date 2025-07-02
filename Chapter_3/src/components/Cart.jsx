import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Read the cartItems from redux store
  const cartItems = useSelector((store) => store.cart.items);

  // Another way to read the cart but it is not a good way
  // const store = useSelector((store) => store)
  // const cartItems = store.cart.items

  console.log(cartItems);

  // Calculating the total amount
  const totalAmount = cartItems.reduce((accumulator, item) => {
    const { finalPrice, defaultPrice, price } = item?.card?.info;

    if(finalPrice) {
        return accumulator + finalPrice / 100;
    } else if (defaultPrice) {
        return accumulator + defaultPrice / 100;
    } else if (price) {
        return accumulator + price/ 100;
    } 
},0)
  // Clear cart
  const dispatch = useDispatch();
  const handleClearCartBtn = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto  p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => {
              
              // Destructuring
              const { name, finalPrice, defaultPrice, imageId, id, price } = item?.card?.info;
                
              return (
                <div
                  key={id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={CDN_URL + imageId}
                      alt={name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{name}</h4>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">
                      ₹{finalPrice/100  || defaultPrice/100  || price/100 }
                    </p>
                    <p className="text-sm text-gray-400">
                      ₹{finalPrice/100  || defaultPrice/100  || price/100 } each
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Summary Section */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Amount</span>
            <span>₹ {totalAmount}</span>
          </div>
          <div className="flex justify-between">
            <button
              className="mt-4 w-[30%] bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition cursor-pointer"
              onClick={handleClearCartBtn}
            >
              Clear Cart
            </button>
            <button className="mt-4 w-[30%] bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
