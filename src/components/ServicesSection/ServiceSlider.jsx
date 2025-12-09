import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sapGoldPartner from "/images/sap-gold-partner.png"
import GlassButton from "../GlassButton/GlassButton";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import GlassButtonLight from "../GlassButton/GlassButtonLight";
import risewithsap from "/images/risewithsap.webp"
import sapbtp from "/images/sapbtp.webp"
import sabAriba from '/images/sap-ariba.webp'
import growWithSap from '/images/grow-with-sap-logo.png'
import ServiceTitleCard from "./ServiceTitleCard";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ServiceSlider = () => {
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
            <section className="service-slider" ref={containerRef}>
                <div className="service-slider-track" ref={trackRef}>
                    <ServiceTitleCard
                        image={sapGoldPartner}
                        title="SAP Services"
                        description="Powering Digital Transformation with SAP"
                        buttonText="Explore SAP Services"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCard
                        image={risewithsap}
                        title="RISE with SAP®"
                        description="We help businesses accelerate digital transformation with RISE with SAP, offering a simplified path to Our experts design scalable SAP landscapes that improve operational agility, enhance performance, and support long-term growth. With a focus on business continuity and accelerated value realization, we enable seamless migration to SAP S/4HANA Cloud. "
                        buttonText="Start Your SAP Transformation"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCard
                        image={growWithSap}
                        title="GROW with SAP"
                        description="We support organizations in scaling efficiently with Grow with SAP, helping them expand faster through cloud-based ERP, intelligent analytics, and streamlined operations. Our solutions are designed for growing businesses that need agility, cost efficiency, and enterprise-grade performance. By combining SAP best practices with industry expertise, we enable companies to improve productivity, accelerate decision-making, and expand sustainably."
                        buttonText="Unlock Business Growth with SAP"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCard
                        image={sabAriba}
                        title="SAP Ariba"
                        description="With seamless cloud integration and real-time analytics, our SAP Ariba solutions support efficient supplier collaboration, reduce purchasing costs, and enhance decision-making. We help businesses digitize their procurement cycle end-to-end and build stronger supply chain resilience."
                        buttonText="Transform Sourcing with SAP Ariba"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCard
                        image={sapbtp}
                        title="SAP BTP"
                        description="Future-ready enterprises rely on SAP Business Technology Platform (BTP) to outpace change. At AeonX Digital, we help you harness BTP to connect applications, integrate data across systems, and unlock real-time insights. Whether you're developing new capabilities or enhancing existing SAP landscapes, our team enables agility, innovation, and intelligent automation across your business. "
                        buttonText="Build Smart with SAP BTP"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                </div>
            </section>

        </>

    );
};

export default ServiceSlider;
