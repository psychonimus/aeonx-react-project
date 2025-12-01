import React from 'react'
import '../../index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import banner1 from '/images/banner.webp'
import banner2 from '/images/banner2.webp'
import banner3 from '/images/banner3.webp'
import partner from '/images/partner-logo.webp'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import GlassButton from '../GlassButton/GlassButton';
import contactBg from "/videos/contact-bg-dark.webm"
import ContactRobot from '../ProductShowcase/ContactRobot';
import { scale } from 'framer-motion';





const ContactHeader = () => {
    return (
        <>
            <div className="container-fluid p-0 hero-section">
                <div className="carousel">
                    <Swiper

                        modules={[Navigation, Autoplay, Pagination]}
                        // navigation={true}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        pagination={{
                            clickable: true,
                            type: "bullets", // try "progressbar" for a line effect
                        }}
                        className="mySwiper"
                        style={{ minHeight: "100vh" }}
                        // Ensures Swiper reinitializes on slides change for consistent behavior
                        key="hero-swiper"
                    >
                        <SwiperSlide>
                            <div className="contact-slide-bg" style={{ height: "100vh" }}>
                                {/* <img src={banner1} alt="" /> */}
                                <video className='earth-bg-video' style={{ width: "100%" }} autoplay="true" muted="true" loop="true" preload="metadata" playsinline="true" data-goto-next="true" data-object-fit="cover" data-object-position="center top" webkit-playsinline="true">
                                    <source src={contactBg} type="video/webm" />
                                </video>
                            </div>
                            <div className="container swiper-content-contact text-white">

                                <div className="contact-content" data-aos="fade-up" style={{ width: "100%" }}>
                                            <h1 className="slide-title">Let's Connect</h1>

                                            <h4>We combine deep domain expertise with the latest in AWS Cloud, AI, and SAP technologies to build secure, scalable, and intelligent solutions that power modern business transformation.</h4>


                                        </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ContactHeader