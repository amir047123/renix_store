// import required modules

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";


const BannerSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigationShow = (show) => {
    setIsHovered(show);
  };
  let arr = [1, 2, 3];
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className=""
        navigation={{
          clickable: true,
        }}
        onNavigationShow={isHovered}
        onMouseEnter={() => handleNavigationShow(true)}
        onMouseLeave={() => handleNavigationShow(false)}
      >
        {arr.map((slider) => (
          <SwiperSlide>
            <div
              className="py-[10%] px-5 flex flex-col items-start  justify-center bg-no-repeat bg-cover w-full"
              style={{
                background: "url('/assets/banner/banner1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="border-l-[5px] xl:space-y-5 border-solid border-primary ml-8 pl-5 lg:pl-8">
                <h3 className=" text-lg lg:text-[28px] text-primary pt-2 uppercase font-oswald">
                  Season 2018
                </h3>
                <h2 className=" text-2xl lg:text-[46px] font-semibold text-[#333e48] uppercase font-oswald">
                  Organic <span className="font-normal">World</span>
                </h2>
                <p className="text-sm text-[#333e48] font-openSans uppercase lg:text-[22px]">
                  GET 40% OFF ⋅ Free Delivery
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
