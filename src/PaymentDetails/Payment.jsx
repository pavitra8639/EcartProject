import { useContext, useEffect, useState } from "react";
import { authuser } from "../Context/AuthuserContext";
import { useNavigate } from "react-router-dom";

import CartContext from "../Context/CartContext";
import toast from "react-hot-toast";

const Payment = () => {

  const { cart = [], clearCart } = useContext(CartContext);
  const { userData } = useContext(authuser);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  // 🔒 Protect page
  useEffect(() => {
    if (userData === null) return;

    if (!userData) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [userData, navigate]);

  if (!userData) return null;

  // 💰 Total (same logic as cart)
  const totalPrice = cart.reduce(
    (curr, item) => curr + item.price * item.quantity,
    0
  );

  const finalAmount = totalPrice + 50 + totalPrice * 0.1;

  // 💳 Payment
  const handlePayment = () => {
    if (!address) {
      toast.error("Please enter address");
      return;
    }

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    toast.success("Order placed successfully 🎉");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 p-6 text-white flex justify-center items-center">

      <div className="w-full max-w-xl bg-gray-900 p-6 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Payment 💳
        </h1>

        {/* 📍 Address */}
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address..."
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 outline-none"
          rows="4"
        />

        {/* 💰 Amount */}
        <div className="mt-4 text-lg flex justify-between">
          <span>Total Amount:</span>
          <span className="text-green-400 font-bold">
            ₹ {finalAmount.toFixed(2)}
          </span>
        </div>

        {/* 💳 Pay Button */}
        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold text-black"
        >
          Pay Now
        </button>

      </div>

    </div>
  );
};

export default Payment;