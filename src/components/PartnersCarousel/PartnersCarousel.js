import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PartnersCarousel = () => {
  let arr = [1, 2, 4, 5, 6, 7, 8];
  return (
    <div className="container">
      {/* Partner */}
      <div className="mt-20">
        <div className=" relative max-w-[310px]  mb-10">
          <h2 className=" md:text-[40px] font-oswald text-2xl  text-primary font-semibold py-3 ">
            Our partner
          </h2>
        </div>
        <>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              767: {
                slidesPerView: 3, // Show 2 slides on tablets
              },
              1024: {
                slidesPerView: 4, // Show 3 slides on laptops
              },
              1440: {
                slidesPerView: 5, // Show 4 slides on laptops
              },
            }}
          >
            {arr.map((i) => (
              <SwiperSlide key={i}>
                <img src="/assets/partner/techmint.svg" alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default PartnersCarousel;
