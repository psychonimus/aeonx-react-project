import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import profileOne from "/images/profile-1.webp"
import AwardCard from './AwardCard';
import TestCard from '../TestimonialSection/TestCard';

import gptw from "/images/Great-Place-To-Work-logo-updated.webp"
import risingStar from "/images/rising-star-partner-logo.webp"
import advanceTier from '/images/advance-tier-sol.webp'
import awsUpdatedLogo from '../../../public/images/PARTNERLOGOWhite.webp'


const AwardsSection = () => {
    // Create refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <section className="testimonials" data-aos="fade-up">
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
                                            image={gptw}
                                            awardTitle="Great Place to Work Certified 2025"
                                            awardDesc="APR 2025 - APR 2026"
                                            
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={risingStar}
                                            width="45%"
                                            awardTitle="AWS Rising Star Partner of the Year (SI)"
                                            awardDesc="APJ Winner 2022"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                    <AwardCard
                                            image={awsUpdatedLogo}
                                            width="45%"
                                            awardTitle="AWS Partner Advance Tier Services"
                                            awardDesc="Awarded by AWS"
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