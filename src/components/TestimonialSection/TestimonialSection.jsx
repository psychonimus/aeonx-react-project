import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import profileOne from "/images/profile-1.webp"
import TestCard from './TestCard';

const TestimonialSection = () => {
    // Create refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <section className="testimonials pt-5">
                <div className="container-fluid testimonial-bg">
                    <div className="container">
                        <div className="heading-part">
                            <h2>CLIENT <br /> TESTIMONIALS</h2>
                            
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
                                        <TestCard
                                            testimonial="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require."
                                            profile={profileOne}
                                            name="John Doe"
                                            designation="SAP Lead, Manufacturing"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TestCard
                                            testimonial="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require."
                                            profile={profileOne}
                                            name="John Doe"
                                            designation="SAP Lead, Manufacturing"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TestCard
                                            testimonial="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require."
                                            profile={profileOne}
                                            name="John Doe"
                                            designation="SAP Lead, Manufacturing"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TestCard
                                            testimonial="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require."
                                            profile={profileOne}
                                            name="John Doe"
                                            designation="SAP Lead, Manufacturing"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TestCard
                                            testimonial="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require."
                                            profile={profileOne}
                                            name="John Doe"
                                            designation="SAP Lead, Manufacturing"
                                        />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <TestCard
                                            testimonial="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require."
                                            profile={profileOne}
                                            name="John Doe"
                                            designation="SAP Lead, Manufacturing"
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

export default TestimonialSection