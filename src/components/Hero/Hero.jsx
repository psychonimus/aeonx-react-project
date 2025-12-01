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
import heroBg from "/videos/globe-1.webm"
import heroBg2 from "/videos/globe-1.webm"
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { delay, stagger } from 'framer-motion';



const Hero = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create(".slide-title",{
            type : "words",
        });
        const subTitleSplit = SplitText.create(".slide-subtitle",{
            type : "chars",
        });
        const subParaSplit = SplitText.create(".slide-para",{
            type : "lines, words",
        });

        const t1 = gsap.timeline({
            delay : 0.5,
        });

        const t2 = gsap.timeline({
            delay : 0.5,
        });

        
        const t3 = gsap.timeline({
            delay : 2,
        });

        t1.from(".slide-content",{
            yPercent:20,
            opacity: 0,
            duration : 1,
        });

        t2.from(titleSplit.words,{
            yPercent:200,
            stagger : 0.02,
            ease : 'power2.out'

        }, 0).from(subTitleSplit.chars,{
            yPercent:200,
            stagger : 0.02,
            ease : 'power2.out'
        }, 0)
        .from(subParaSplit.lines,{
            yPercent: 300,
            stagger : 0.10,
            ease : 'power2.out'
        }).from(".partner-logo",{
            opacity : 0,
            yPercent : 100,
        }, 0);

        t3.from(".slide-buttons",{
            opacity : 0,
            yPercent : 300,
            
        })

       

        
    });







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
                            <div className="slide-image">
                                {/* <img src={banner1} alt="" /> */}
                                <video className='earth-bg-video d-none d-md-block' style={{ width: "100%" }} autoplay="true" muted="true" loop="true"  preload="metadata" playsinline="true" data-goto-next="true" data-object-fit="cover" data-object-position="center top" webkit-playsinline="true">
                                    <source src={heroBg} type="video/webm" />
                                </video>
                                <video className='earth-bg-video d-block d-md-none' style={{ width: "100%" }} autoplay="true" muted="true" loop="true"  preload="metadata" playsinline="true" data-goto-next="true" data-object-fit="cover" data-object-position="center top" webkit-playsinline="true">
                                    <source src={heroBg2} type="video/webm" />
                                </video>
                            </div>
                            <div className="black-overlay"></div>
                            <div className="container swiper-content">
                                <div className="partner-logo mt-5 mb-0 pb-0">
                                    <img src={partner} alt="" />
                                </div>
                                <div className="mt-3 mt-md-5 slide-content">
                                    <h1 className="slide-title">Innovate. Automate. Elevate</h1>
                                    <h2 className='slide-subtitle'>with AWS, AI, SAP, and Custom Apps</h2>
                                    <h4 className='slide-para'>We combine deep domain expertise with the latest in AWS Cloud, AI, and SAP technologies to build secure, scalable, and intelligent solutions that power modern business transformation.</h4>

                                    <div className="mt-4 d-flex flex-column flex-md-row gap-3 slide-buttons">
                                        <GlassButton href="" title="Explore More" icon={() => <BsArrowUpRightCircleFill color="" size={28} />} >  </GlassButton>
                                        <GlassButton href="" title="Lets Talk" icon={() => <FaPhoneAlt color="" size={25} />} >  </GlassButton>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Hero