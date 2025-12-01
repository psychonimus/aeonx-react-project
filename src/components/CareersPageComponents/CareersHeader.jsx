import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import GlassButton from "../GlassButton/GlassButton";
import { IoArrowDownCircle } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import GPTW from '/images/Great-Place-To-Work-logo-updated.webp'
import CareerBg from "/videos/career-bg.mp4"


const ExperienceSection = () => {
    return (
        <section className="experience-section py-5" >

            <div className="video-container">
                <video className='earth-bg-video d-none d-md-block' style={{ width: "100%" }} autoplay="true" muted="true" loop="true" preload="metadata" playsinline="true" data-goto-next="true" data-object-fit="cover" data-object-position="center top" webkit-playsinline="true">
                    <source src={CareerBg} type="video/webm" />
                </video>
            </div>

            <div className="container career-hero-overlay" style={{ marginTop: "7rem", zIndex: "2" }}>
                <div className="row text-white">

                    {/* LEFT SECTION */}
                    <div className="col-lg-4 mb-5 mb-lg-0 text-white">
                        <h1 className="exp-title">
                            Augment your Professional Career
                        </h1>
                        <GlassButton
                            title="Explore Open Positions"
                            icon={() => <IoArrowDownCircle size={30} />}
                        />
                        <div className="ms-3 d-flex gap-3 align-items-center mt-3">
                            <span className="fw-bold">Find us on:</span>
                            <BsLinkedin />
                            <AiFillInstagram />
                            <BsTwitterX />
                        </div>

                    </div>

                    {/* RIGHT SECTION */}
                    <div className="col-lg-8">
                        <p className="exp-text mb-4">
                            Welcome to AeonX Digital, where passion meets a pinch of craziness! We're a
                            vibrant team dedicated to crafting amazing digital experiences.
                            Whether you're into tech, creativity, or media, if you've got the
                            passion and a dreamer's spirit, we're ready to welcome you with
                            open arms. Join our crew and let's make digital magic together!
                        </p>
                        <div className="d-flex gap-4">

                            <div className="gptw-container ">
                                <img
                                    src={GPTW}
                                    alt="Great Place to Work"
                                    className="badge-img"
                                />
                            </div>
                            <div className="d-flex flex-column gap-3 ">


                            </div>



                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
