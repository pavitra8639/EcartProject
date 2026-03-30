import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


export const HomeContainerCard = ({ imgUrl, title, description, price, id,rating }) => {
  const {wishlist=[],toggleWishlist}=useContext(CartContext)
 
  const isWishlisted=Array.isArray(wishlist) && wishlist.some((item)=>item && item.id===id)

  return (

    <div className='relative w-[310px] h-[380px] bg-radial-[at_25%_25%] from-white to-zinc-900 to-75 flex flex-col justify-center items-center rounded-md '>
       {/* ❤️ Wishlist Icon */}
      <div
        className='absolute top-2 right-2 text-xl cursor-pointer'
        onClick={() =>{
          if(!id) return
          toggleWishlist({
            id,
            title,
            price,
            image: imgUrl,
            rating
          })
        }}
      >
        {isWishlisted ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-white hover:text-red-400" />
        )}
      </div>

      <img
        className='w-[55%] h-[60%]'
        src={imgUrl}
        alt="product"
      />
      <h1 className='font-semibold text-[20px] text-center tracking-tight'>
        {title?.slice(0, 20)} 
      </h1>
      <p className='flex text-center'>
        Des:{description?.slice(0, 40)}
      </p>
      <div className='flex items-center gap-4 mt-2'>
        <p className='text-black-200 font-bold'>
          $ {price}
        </p>
        <p className="text-yellow-500 font-semibold">
          ⭐ {rating}
        </p>
        {/* <p>rating:{rating}</p> */}
        <Link to={"/product_Details/" + id}>
          <button className='px-4 py-[-5px] border-2 text-blue-500 mt-2 cursor-pointer rounded-md hover:border-white'>View Info</button>
        </Link>

      </div>

    </div>

  )
}
export default HomeContainerCard