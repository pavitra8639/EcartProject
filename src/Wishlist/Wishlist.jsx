import { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import { authuser } from "../Context/AuthuserContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Wishlist = () => {

  const { wishlist = [], removeFromWishlist } = useContext(CartContext);
  const { userData } = useContext(authuser);
  const navigate = useNavigate();

  // 🔒 Protect page
  useEffect(() => {
    if (userData === null) return;

    if (!userData) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [userData, navigate]);

  // ⛔ Prevent UI flash
  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 p-6">

      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        My Wishlist ❤️
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-300">
          No items in wishlist
        </p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="w-[260px] bg-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >

              {/* 🔥 Clickable product */}
              <Link to={`/product_Details/${item.id}`}>
                <img
                  src={item.image}
                  alt="product"
                  className="w-full h-[150px] object-contain p-3 bg-gray-800 rounded-t-xl"
                />
              
              <div className="px-3 pb-2">
                <h4 className="font-semibold">
                  {item.title?.slice(0, 30)}
                </h4>

                <p className="text-green-400 font-bold mt-1">
                  $ {item.price}
                </p>

                <p className="text-yellow-400">
                  ⭐ {item.rating?.rate || item.rating}
                </p>
              </div>
              </Link>


              {/* ❌ Remove button */}
              <div className="px-3 pb-3">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 w-full"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Wishlist;