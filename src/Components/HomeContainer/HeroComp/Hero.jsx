import React from 'react'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules'


const Hero = () => {
    return (
        <>
            <Swiper modules={[Navigation,Pagination,Scrollbar,Autoplay]} navigation 
            pagination={{clickable:true}} 
            scrollbar={{draggable:true}} 
            autoplay={{delay:1500,pauseOnMouseEnter:true, disableOnInteraction:false}} className='h-[65vh]'>
                <SwiperSlide>
                    <img className='w-full h-[100%] object-cover'src="https://media.istockphoto.com/id/685787564/photo/group-of-friends-playing-music.jpg?s=1024x1024&w=is&k=20&c=G0LwknaYe77z4jS0bKNl_2DcFr0Ci1Yaf1DxGSJUVrQ=" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[100%] object-cover' src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[100%] object-cover' src="https://media.istockphoto.com/id/694044888/photo/i-would-never-shop-without-her-opinion.jpg?s=1024x1024&w=is&k=20&c=mEpZM9tPXJy7cbnOK3o6Ikda-ZjnYREBbcM5bkVBIY0=" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero