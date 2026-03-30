import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { authuser } from '../../../../Context/AuthuserContext';
import CartContext from '../../../../Context/CartContext';
import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Menu = ({ search, setSearch }) => {
  // console.log(search)
  let { userData, logout } = useContext(authuser)
  // console.log(userData)
  let { cart=[],wishlist=[] } = useContext(CartContext)
  const navigate=useNavigate()
  // protect navigation
  const handleProtectNav=(path)=>{
    if(!userData){
      toast.error("Please login first")
      navigate("/login")
    }else{
      navigate(path)
    }
  }

  function validUser() {
    return (
      <div className='flex items-center gap-3'>
        <button onClick={logout} className='text-slate cursor-pointer'>Logout</button>
        <section className='flex gap-2 cursor-pointer items-center'>
          <img className="w-8 h-8 rounded-full object-cover" src={userData?.photoURL} alt="" />
          <p>{userData?.displayName}</p>
        </section>
      </div>
    )
  }
  function inValidUser() {
    return (
      <>
        <NavLink className={({ isActive }) =>
          isActive ? 'text-pink-400 border-b-2 border-blue-500' : ""} to="/Login" >
          Login</NavLink>

        {/* <NavLink to='/login'>
           {
            (object)=>{
              console.log(object)             we can see isActive object
              return(
                <p>Login</p>
              )
            }
           } 

          </NavLink> */}


        <NavLink className={({ isActive }) =>
          isActive ? "text-cyan-400" : ""} to="/Register" >
          Register</NavLink>
      </>
    )
  }
  return (
    <div className='flex justify-end gap-5'>
      <form action="" className='relative'>
        <CiSearch className='absolute top-2 left-5' />
        <input type="text" placeholder='search' className='pl-[40px] py-1 bg-slate-500 rounded-[50px] outline-none border-none' value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      <div className='flex items-center gap-6'>
        <NavLink className={({ isActive }) =>
          isActive ? "text-cyan-400" : ""} to="/" >Home</NavLink>
      </div>
       
      {/* <Link to="/cart"> */}
        <div onClick={()=>handleProtectNav("/cart")}className="relative cursor-pointer text-xl">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
            {cart.length}
          </span>
        </div>
      {/* </Link> */}
      {/* ❤️ WISHLIST ICON */}
      {/* <Link to="/wishlist"> */}
        <div onClick={()=>handleProtectNav("/wishlist")}className="relative cursor-pointer text-xl">
          <FaHeart color='red' />

          {/* 🔴 Count */}
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {wishlist.length}
            </span>
          )}
           </div>
      {/* </Link> */}

      {
        userData?.emailVerified === true ? validUser() : inValidUser()
      }
    </div>
  )
}
export default Menu