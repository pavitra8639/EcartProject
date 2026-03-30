import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import toast from 'react-hot-toast'

import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { authuser } from '../../Context/AuthuserContext'


const ProductDetails = () => {
    let DYdata = useParams()

    const { userData } = useContext(authuser)
    let [spData, setSpData] = useState(null)
    let { addToCart, wishlist = [], toggleWishlist } = useContext(CartContext)

    async function fetchingData() {

        let res = await fetch(`https://fakestoreapi.com/products/${DYdata.id}`)

        let finaldata = await res.json()

        setSpData(finaldata)
        console.log(finaldata)
    }
    useEffect(() => {
        fetchingData()
    }, [])
    console.log(spData)
    // ✅ Prevent crash while loading
    if (!spData) {
        return <h1 className="text-white text-center mt-20">Loading...</h1>
    }
    let rating = Math.round(spData?.rating?.rate || 0)
    let filledStars = "⭐".repeat(rating)
    let emptyStars = "☆".repeat(5 - rating)

    // ✅ Check if already in wishlist
    const isWishlisted = Array.isArray(wishlist) && wishlist.some(item => item.id === spData.id)


    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 fixed top-0 flex items-center justify-center flex-col pt-20'>


            <img className='w-[200px] border border-white rounded-mg shadow-lg shadow-white/40 mb-3 p-4' src={spData?.image} alt="image" />
            <div className='flex items-center justify-between w-[500px]'>
                <h1 className='text-white'>price:<span className='text-red-800 '>-60%</span>${spData?.price}</h1>
                <p className='my-2'>Ratings:{filledStars} {emptyStars}</p>
                <p>Reviews: {spData.rating?.count}</p>
            </div>
            <h1 className='font-bold text-white text-xl my-[10px] underline underline-offset-1 text-white text-2xl my-[10px]'>{spData?.title}</h1>
            <h3 className='text-justify w-[500px] text-slate-400 text-[14px] '>{spData?.description}</h3>
            <div className="flex justify-center items-center gap-4 mt-6">
                <button onClick={() =>
                    addToCart({
                        id: spData.id,
                        title: spData.title,
                        price: spData.price,
                        image: spData.image,
                        rating: spData.rating,
                        category: spData.category
                    })
                }
                    className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-400 transition"
                >
                    Add to Cart
                </button>
                {/* //& Wishlist */}
                <span
                    onClick={() => {
                        toggleWishlist({
                            id: spData.id,
                            title: spData.title,
                            price: spData.price,
                            image: spData.image,
                            rating: spData.rating,
                            category: spData.category
                        })

                    }}
                    className='text-2xl cursor-pointer'>
                    {isWishlisted ? (
                        <FaHeart className='text-red-500' />) : (
                        <FaRegHeart className='text-white hover:text-red-400' />
                    )}
                </span>


                <Link to='/'>
                    <button className='px-6 py-2 border border-gray-400 cursor-pointer rounded-lg hover:bg-gray-100'>close</button>
                </Link>
            </div>
        </div>

    )
}

export default ProductDetails 