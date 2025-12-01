import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import imgOne from '/images/img-1.webp'
import imgTwo from '/images/img-2.webp'
import imgThree from '/images/img-3.webp'

const CareerCarouselSection = () => {
  return (
    <section className="career-carousel">
        <div className="container-fluid px-0">
        <div className="exp-carousel-wrapper pt-0 px-0">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={3}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                
                                navigation={false}
                                loop={true}
                                className="exp-swiper"

                                breakpoints={{
                                    1200: { slidesPerView: 3 },
                                    768: { slidesPerView: 2 },
                                    0: { slidesPerView: 1 }
                                }}
                            >
                                <SwiperSlide>
                                    <img src={imgOne} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgTwo} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgThree} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgOne} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgTwo} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgThree} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgOne} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgTwo} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgThree} className="exp-image" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
        </div>
    </section>
  )
}

export default CareerCarouselSection