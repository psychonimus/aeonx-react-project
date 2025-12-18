import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import profileOne from "/images/profile-1.webp"
import TestCard from './TestCard';

import bnf from '/images/bnf-logo.webp'
import ck from '/images/ck-birla-logo.webp'
import ashapura from '/images/ashapura-logo.webp'
import bvg from '/images/bvg-logo.webp'


const testimonials = [
    {
        testimonial: "We had heard that AeonX Digital is a terrific service provider with a strong focus on customer support, and now we can confidently pass that information on. Thank you for all of your assistance with SAP Managed Services (AMS), Team AeonX. You’ve been quite helpful in getting everything up and running. We sincerely appreciate all of your efforts!",
        profile: bnf,
        name: "Ajay Arora",
        designation: "CFO, BNF Forgings"
    },
    {
        testimonial: "We appreciate how simple SAP managed services and SAP S/4HANA cloud migration were to implement. For our company, this has been a game-changer, and I couldn’t be happier with the outcomes. Working with AeonX Digital has been a fantastic experience for us, and we would gladly recommend them as one of the industry’s top providers.",
        profile: ck,
        name: "Mitali Biswas",
        designation: "CIO, CK Birla Hospitals"
    },
    {
        testimonial: "We were able to properly deploy SAP from the ground up thanks to AeonX. They were there for us every step of the journey, providing assistance and knowledge. We wouldn’t have been able to achieve it without them! Their assistance has been crucial to us, and we cannot express how grateful we are.We strongly recommend working with AeonX Digital!",
        profile: ashapura,
        name: "Ashish Desai",
        designation: "CFO, Ashapura"
    },
    {
        testimonial: "When it came to understanding our expectations, the team was incredibly supportive and conducted a stellar job. We are thankful to AeonX Digital for providing us with a new Disaster Recovery System and implementing SAP modules, which is helping our business run smoothly. It was a pleasure to work with AeonX. They’re a fantastic team and I loved getting to collaborate with them personally!",
        profile: bvg,
        name: "Bhushan Puranik",
        designation: "Head IT & SAP, BVG India"
    },
    
]

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

                                    {testimonials.map((testimonial,i) => {
                                        return(
                                            <SwiperSlide key={i}>
                                                <TestCard
                                                    testimonial={testimonial.testimonial}
                                                    profile={testimonial.profile}
                                                    name={testimonial.name}
                                                    designation={testimonial.designation}
                                                />
                                            </SwiperSlide>
                                        )
                                    })}
                                    
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