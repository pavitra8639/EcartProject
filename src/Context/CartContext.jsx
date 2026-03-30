
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// & create context
const CartContext = createContext();

// ^ provider
export const CartProvider = ({ children }) => {
  const navigate=useNavigate()
  const checkAuth=()=>{
    const user=localStorage.getItem("user")
    if(!user){
      toast.error("Please login first")
      navigate("/login")
      return false
    }
    return true
  }
  const [cart, setCart] = useState(()=>{
    let storeData=localStorage.getItem('cart')
    return storeData  && storeData!=="undefined"? JSON.parse(storeData) : []
  })
  // ================= WISHLIST =================
  const [wishlist, setWishlist] = useState(() => {
    try {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
});
  
   // ================= WISHLIST FUNCTIONS =================

  const addToWishlist = (product) => {
    if(!checkAuth()) return
    if (!product || !product.id) return; 
     setWishlist((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      return prev; // ✅ no duplicates (same as cart logic)
    }

    toast.success("Added to wishlist ❤️");
    return [...prev, product];
  });
};
const removeFromWishlist = (id) => {
  if(!checkAuth()) return
  setWishlist((prev) => prev.filter((item) => item.id !== id));
  toast.error("Removed from wishlist");
};

const toggleWishlist = (product) => {
  if(!checkAuth()) return
  if (!product || !product.id) return;

  setWishlist((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      toast.error("Removed from wishlist");
      return prev.filter((item) => item.id !== product.id);
    } else {
      toast.success("Added to wishlist ❤️");
      return [...prev, product];
    }
  });
};
  
   

  // * Add to cart (no duplicates + quantity support)
  const addToCart = (product) => {
    if(!checkAuth()) return
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        // increase quantity if already exists
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      toast.success("added to cart")
      return [...prev, { ...product, quantity: 1 }];
    });
    
  };

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  useEffect(() => {
    const clean=wishlist.filter((item)=>item && item.id)
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  // & Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  //! Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //& Remove item
  const removeFromCart = (id) => {
    if(!checkAuth()) return
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed")
  };


 //* clear Cart
  const clearCart = () => {
    if(!checkAuth()) return
    setCart([]);
    toast.error("cart cleared")
  };

  return (
    
     <CartContext.Provider
        value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        addToWishlist,        
        removeFromWishlist,    
        toggleWishlist
      }}
    >
       {children}
     </CartContext.Provider>
     
    
  );
};

export default CartContext;