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
      const response = await axios.get('https://apistore.renixlaboratories.com.bd/api/v1/slider/getSliders');
      const newData = response.data.data;
      setImages(newData);
      // Update local storage with new data
      localStorage.setItem('sliderImages', JSON.stringify(newData));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display a message to the user
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if data exists in local storage
    const storedData = localStorage.getItem('sliderImages');
    if (storedData) {
      setImages(JSON.parse(storedData));
      setLoading(false);
    } else {
      fetchData();
    }

    // Periodically check for updates every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="pt-[140px] md:pt-[200px] xl:pt-[112px]">
      {loading ? (
        <Loading />
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
