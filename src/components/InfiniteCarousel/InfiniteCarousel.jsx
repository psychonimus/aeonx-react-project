// GalleryCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";



const InfiniteCarousel = ({ images = [], slidesPerView = 4, speed = 8000 }) => {
  return (
    <div className="w-full pb-5 px-3 overflow-x-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={true}
        grabCursor={true}
        speed={speed}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        
        allowTouchMove={true}
        breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="infinite-car-container">
            <img
              src={src}
              alt={`slide-${index}`}
              className="infinite-car-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteCarousel;
