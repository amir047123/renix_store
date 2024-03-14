import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const ProductCarousel = () => {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    await fetch(`http://localhost:5000/api/v1/sidebarslider/getSliders`)
      .then((res) => res.json())
      .then((data) => setImages(data?.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="swiper_product_promotion"
      >
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <img
              src={image.sliderImg} // Directly using image URL as the src
              alt={image.altText} // Provide alt text for accessibility
              className="object-cover w-full h-full"
            />
            {/* <button className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium uppercase font-oswald py-3 px-10 rounded-full bg-white text-primary text-base ">
              Buy now
            </button> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
