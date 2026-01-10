import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import imgOne from '/images/group/img-1.webp'
import imgTwo from '/images/group/img-2.webp'
import imgThree from '/images/group/img-3.webp'
import imgFour from '/images/group/img-4.webp'
import imgFive from '/images/group/img-5.webp'
import imgSix from '/images/group/img-6.webp'
import imgSeven from '/images/group/img-7.webp'
import imgEight from '/images/group/img-8.webp'
import imgNine from '/images/group/img-9.webp'
import imgTen from '/images/group/img-10.webp'
import imgEleven from '/images/group/img-11.webp'
import imgTwelve from '/images/group/img-12.webp'
import imgThirteen from '/images/group/img-13.webp'

const CareerCarouselSection = () => {
  return (
    <section className="career-carousel" data-aos="fade-up">
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
                                    <img src={imgTwo} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgOne} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgFive} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgEight} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgThree} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgFour} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgEleven} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgSix} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgSeven} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgNine} className="exp-image" />
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <img src={imgThirteen} className="exp-image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={imgTen} className="exp-image" />
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <img src={imgTwelve} className="exp-image" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
        </div>
    </section>
  )
}

export default CareerCarouselSection