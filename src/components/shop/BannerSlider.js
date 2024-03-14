import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const BannerSlider = () => {
  const [images,setImages]=useState([]);
  const fetchData = async()=>{
   await fetch(`http://localhost:5000/api/v1/slider/getSliders`)
    .then((res) => res.json())
    .then((data) => setImages(data?.data));
  }

  useEffect(() => {
    fetchData()
  }, []);



  return (
    <div className="pt-[140px] md:pt-[200px] xl:pt-[112px]">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images?.map((i) => (
            <SwiperSlide className=" overflow-hidden  " key={i?._id}>
              <img className="w-full" src={i?.sliderImg} alt="img"></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default BannerSlider;



