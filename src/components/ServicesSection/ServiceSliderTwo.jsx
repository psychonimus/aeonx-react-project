import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import risewithsap from "/images/risewithsap.webp"
import sapbtp from "/images/sapbtp.webp"
import aws from "/images/aws-partner.png"
import ServiceTitleCardTwo from "./ServiceTitleCardTwo";
import ServiceCardTwo from "./ServiceCardTwo";
import sapaws from "/images/sapaws.webp"
import ml from "/images/ml.webp"

gsap.registerPlugin(ScrollTrigger);

const ServiceSliderTwo = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        if (window.innerWidth <= 1024) return; // disable GSAP on small screens

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".service-card");
            const totalScrollWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;

            gsap.to(cards, {
                xPercent: -120 * (cards.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${totalScrollWidth - viewportWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className="service-slider service-slider-two" ref={containerRef}>
                <div className="service-slider-track" ref={trackRef}>
                    <ServiceTitleCardTwo
                        image={aws}
                        title="Cloud Solutions"
                        titleColor="#fff"
                        description="Start building on AWS today"
                        descColor="#fff"
                        buttonText="Explore AWS Solutions"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={sapaws}
                        title="SAP AWS"
                        description="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require. "
                        descColor="#fff"
                        buttonText="Explore SAP Services"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={ml}
                        title="Machine Learning"
                        description="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require. "
                        descColor="#fff"
                        buttonText="Explore SAP Services"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={risewithsap}
                        title="RISE with SAP"
                        description="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require. "
                        descColor="#fff"
                        buttonText="Explore SAP Services"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={sapbtp}
                        title="SAP BTP"
                        description="RISE with SAP assists businesses in implementing SAP cloud solutions. It hastens cloud adoption by eliminating much of the guesswork and piecemeal licencing acquisitions that plague company planning: It gives clients all of the tools they require. "
                        descColor="#fff"
                        buttonText="Explore SAP Services"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                </div>
            </section>

        </>

    );
};

export default ServiceSliderTwo;
