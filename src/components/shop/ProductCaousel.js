// import required modules

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const ProductCaousel = () => {
  let arr = [1, 2, 3];
  return (
    <div>
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
        className="swiper_product_promtion"
      >
        {arr.map((slider) => (
          <SwiperSlide>
            <div
              className="2xl:py-[40%] py-[30%]  px-5 flex flex-col items-center justify-center bg-no-repeat bg-cover w-full"
              style={{
                background: "url('/assets/products/slide1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="xl:text-[26px] text-xl text-white uppercase font-oswald">
                FRUIT SHOP
              </h3>
              <h2 className="xl:text-[40px] text-3xl font-medium text-white uppercase font-oswald">
                UP TO 50% OFF
              </h2>
              <p className="text-center text-white font-openSans my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="font-medium uppercase font-oswald py-3 px-10 rounded-full bg-white text-primary text-base ">
                Buy now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCaousel;
