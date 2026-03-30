
import React, { createContext, useContext, useEffect } from "react";
import CartContext from "../../Context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authuser } from "../../Context/AuthuserContext";

const Cart = () => {

  const { cart = [], removeFromCart, increaseQty, decreaseQty } = useContext(CartContext)

  //! Auth Data
  const { userData } = useContext(authuser)
  const navigate = useNavigate()

  useEffect(() => {
    if (userData === null) return
    if (!userData) {
      toast.error("please login first")
      navigate("/login")
    }
  }, [userData, navigate])

  if (!userData) return null

  //^ total price
  let totalPrice = cart.reduce(
    (curr, item) => curr + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-10 text-gray-100">

      <h1 className="text-3xl font-bold mb-8 text-yellow-800">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-lg">No items in cart</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-10">

          <div className="w-full md:w-2/3 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md transition-shadow flex justify-between items-center p-5">
                <div className="flex items-center gap-4">
                  <Link to={`/product_Details/${item.id}`}>
                    <img src={item.image} alt="" className="w-24 h-24 object-contain border rounded-lg p-2 bg-gray-900" />
                  </Link>
                  <div>
                    <h2 className="font-semibold text-lg line-clamp-2 text-gray-400">{item.title}</h2>
                    <p className="text-gray-500 mt-1">₹ {item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded-lg"> −
                      </button>

                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <p className="font-bold text-lg text-green-600">₹ {(item.price * (item.quantity)).toFixed(2)}</p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>

            ))}
          </div>
          {/* //& order summary */}

          <div className="w-full md:w-1/3">
            <div className="bg-gray-800 rounded-xl shadow-md p-6 sticky top-20">

              <h2 className="text-xl font-bold mb-5 border-b border-gray-600 pb-3 text-yellow-400">
                Order Summary
              </h2>

              <div className="space-y-3 text-white-600">

                <div className="flex justify-between">
                  <span>Items ({cart.length})</span>
                  <span>₹ {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">₹ 50</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>₹ {(totalPrice * 0.1).toFixed(2)}</span>
                </div>

              </div>


              <div className="flex justify-between font-bold text-lg mt-5 border-t border-black-400 pt-4">
                <span>Total</span>
                <span>
                  ₹ {(totalPrice + 50 + totalPrice * 0.1).toFixed(2)}
                </span>
              </div>
              <button onClick={() => navigate("/payment")}
                className="w-full bg-purple-500 hover:bg-purple-600 mt-6 py-3 rounded-lg font-semibold text-white"
              >
                Proceed to Pay
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;