import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import './Slider.css';
import Loading from '../../Shared/Loading';

const BannerSlider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/slider/getSliders');
      setImages(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display a message to the user
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pt-[140px] md:pt-[200px] xl:pt-[112px]">
      {loading ? (
        <Loading/>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide className="overflow-hidden" key={image._id}>
              <img className="w-full" src={image.sliderImg} alt="Slider Image" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default BannerSlider;
