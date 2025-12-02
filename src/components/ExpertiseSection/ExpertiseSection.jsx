import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Header/Header";
import { FaCircleArrowRight } from "react-icons/fa6";
import GlassButton from "../GlassButton/GlassButton";
import expertise1 from "/images/expertise1.webp"
import expertise2 from "/images/expertise2.webp"
import expertise3 from "/images/expertise3.webp"
import GlassButtonLight from "../GlassButton/GlassButtonLight";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseSection = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    React.useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            // Each card will move up slightly and pin as we scroll
            cards.forEach((card, i) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top",
                        scrub: 1,
                        pin: true,
                        pinSpacing: false,
                    },
                    yPercent: -10 * i, // small offset for depth illusion
                    ease: "none",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <Header
                subtext="Our Expertise"
                headline="Our Expert Solutions Drives Your"
                highlight="Competitive Edge"
            />
            <div className="stack-section pt-5" ref={containerRef}>
                <div
                    className="stack-card stack-card-1"
                    
                    ref={(el) => (cardsRef.current[0] = el)}
                >
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-md-7">
                                <div className="h-100 d-flex flex-column justify-content-center">
                                    <h3 style={{ color: "#fff" }}>Cloud Migration & DevOps Consulting</h3>
                                    <p style={{ color: "#fff" }}><strong>We deliver end-to-end Cloud Migration and DevOps consulting to modernize infrastructure, improve agility, and speed up deployment cycles.</strong> We enable seamless migration to leading cloud platforms and implement DevOps best practices to enhance collaboration, reduce downtime, optimize costs, and scale securely in a digital-first environment.</p>
                                    <GlassButton title="Know More" icon={() => <FaCircleArrowRight color="" size={28} />} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="expertise-img-conainer h-100">
                                    <img src={expertise1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="stack-card stack-card-2"
                    
                    ref={(el) => (cardsRef.current[1] = el)}
                >
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-md-7">
                                <div className="h-100 d-flex flex-column justify-content-center">
                                    <h3 style={{ color: "#fff" }}>Custom Application Development</h3>
                                    <p style={{ color: "#fff" }}><strong>We develop custom applications tailored to specific business needs, helping organizations enhance productivity, user experience, and scalability.</strong> Using modern frameworks and cloud-native technologies, we build secure, high-performance solutions that integrate seamlessly with existing systems. With a focus on agility and innovation, we enable businesses to automate workflows, optimize operations, and drive sustainable growth.
</p>
                                    <GlassButton title="Know More" icon={() => <FaCircleArrowRight color="" size={28} />} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="expertise-img-conainer h-100">
                                    <img src={expertise2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="stack-card stack-card-3"
                    
                    ref={(el) => (cardsRef.current[2] = el)}
                >
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-md-7">
                                <div className="h-100 d-flex flex-column justify-content-center">
                                    <h3 style={{ color: "#000" }}>Business Process Transformation</h3>
                                    <p style={{ color: "#000" }}>By combining industry expertise with technology-driven strategies, we help businesses streamline workflows, eliminate redundancies, and adopt scalable models. Our transformation approach focuses on process innovation, automation, and continuous improvement, empowering companies to operate smarter, adapt faster, and deliver greater value.
</p>
                                    <GlassButtonLight title="Know More" icon={() => <FaCircleArrowRight color="#F97516" size={28} />} />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="expertise-img-conainer h-100">
                                    <img src={expertise3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>


    );
};

export default ExpertiseSection;
