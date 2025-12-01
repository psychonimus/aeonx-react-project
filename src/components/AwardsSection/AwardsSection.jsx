import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import profileOne from "/images/profile-1.webp"
import AwardCard from './AwardCard';
import TestCard from '../TestimonialSection/TestCard';
import awardOne from "/images/award-1.webp"
import awardTwo from "/images/award-2.webp"
import awardThree from "/images/award-3.webp"


const AwardsSection = () => {
    // Create refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <section className="testimonials">
                <div className="container-fluid awards-bg">
                    <div className="container">
                        <div className="heading-part">
                            <h2>FEATURED AWARDS</h2>
                            <p style={{color:"#fff"}}>For over 15 years, we've been pioneering innovation with award-winning Mobile, Web, Cloud, IoT, and AI services</p>
                            
                        </div>

                        <div className="testimonials-part">
                            <div style={{ position: 'relative' }}>
                                {/* Navigation Buttons */}
                                <button
                                    ref={prevRef}
                                    className="custom-nav-btn prev-btn"
                                    
                                    aria-label="Previous testimonial"
                                >
                                    &#8592;
                                </button>
                                <button
                                    ref={nextRef}
                                    className="custom-nav-btn next-btn"
                                    
                                    aria-label="Next testimonial"
                                >
                                    &#8594;
                                </button>

                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    navigation={{
                                        prevEl: prevRef.current,
                                        nextEl: nextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        // Swiper expects DOM elements, so set these before swiper mounts.
                                        swiper.params.navigation.prevEl = prevRef.current;
                                        swiper.params.navigation.nextEl = nextRef.current;
                                    }}
                                    breakpoints={{
                                        1200: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        0: { slidesPerView: 1 }
                                    }}
                                    style={{ padding: "10px 0" }}
                                >
                                    <SwiperSlide>
                                        <AwardCard
                                            image={awardOne}
                                            awardTitle="Top Enterprise App Developers"
                                            awardDesc="Awarded by Clutch"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={awardTwo}
                                            awardTitle="Top Enterprise App Developers"
                                            awardDesc="Awarded by Clutch"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={awardThree}
                                            awardTitle="Top Enterprise App Developers"
                                            awardDesc="Awarded by Clutch"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={awardOne}
                                            awardTitle="Top Enterprise App Developers"
                                            awardDesc="Awarded by Clutch"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={awardOne}
                                            awardTitle="Top Enterprise App Developers"
                                            awardDesc="Awarded by Clutch"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={awardOne}
                                            awardTitle="Top Enterprise App Developers"
                                            awardDesc="Awarded by Clutch"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AwardsSection