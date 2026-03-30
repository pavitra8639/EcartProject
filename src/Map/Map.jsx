import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/NavbarComp/Pages/auth/Login";
import Register from "../Components/NavbarComp/Pages/auth/Register";
import Layout from "../Components/NavbarComp/Pages/Layout";
import Home from "../Components/HomeContainer/Home";
import ProductDetails from "../Components/HomeContainer/ProductDetails";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Payment from "../PaymentDetails/Payment";

export let MyMap=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
                
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/cart',
        element:<Cart/>
    },
    {
        path:"/wishlist",
        element:<Wishlist/>
    },
      {
        path:'/product_Details/:id',
        element:<ProductDetails/>
    },
    {
        path:'/payment',
        element:<Payment/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
]
    }
])