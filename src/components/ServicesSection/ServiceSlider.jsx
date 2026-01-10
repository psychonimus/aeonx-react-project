import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sapGoldPartner from "/images/sap-gold-partner.webp"
import GlassButton from "../GlassButton/GlassButton";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import GlassButtonLight from "../GlassButton/GlassButtonLight";
import risewithsap from "/images/risewithsap.webp"
import sapbtp from "/images/sap-btp-new-one.png"
// import sapbtp from "/images/sapbtp-slide.png"
import sabAriba from '/images/sap-ariba-top.webp'
import growWithSap from '/images/grow-with-sap-logo.webp'
// import sapSuccessFactors from '/images/sap-success-new.webp'
import sapSuccessFactors from '/images/ssf.png'
import sapConcur from '/images/sap-concurr.png'
// import sapConcur from '/images/sap-concur.webp'
import sapAnalyticsCloud from '/images/sap-analytics-cloud.webp'
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
                        href="/sap-focused-products"
                    />

                    <ServiceCard
                        image={risewithsap}
                        // width="25%"
                        title="RISE with SAP"
                        description="We help businesses accelerate digital transformation with RISE with SAP, offering a simplified path to Our experts design scalable SAP landscapes that improve operational agility, enhance performance, and support long-term growth. With a focus on business continuity and accelerated value realization, we enable seamless migration to SAP S/4HANA Cloud."
                        buttonText="Start Your SAP Transformation"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#rise-with-sap"
                    />

                    <ServiceCard
                        image={growWithSap}
                        // width="25%"
                        title="GROW with SAP"
                        description="Grow with SAP is designed to help fast-growing organizations scale confidently with a modern, cloud-based ERP foundation. Built for companies that need speed, agility, and simplicity, it delivers ready-to-run industry best practices, intelligent analytics, and enterprise-grade capabilities, all packaged in an accessible, cost-efficient subscription model.
"
                        buttonText="Unlock Business Growth with SAP"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#grow-with-sap"
                    />

                    <ServiceCard
                        image={sapSuccessFactors}
                        // width="40%"
                        title="SAP SuccessFactors"
                        description="SAP SuccessFactors delivers a modern, cloud-based HCM platform that streamlines HR processes and elevates employee experience. With intelligent, mobile-ready tools powered by SAP HXM, it helps organizations build agile, engaged, and high-performing teams."
                        buttonText="Know More about SAP SuccessFactors"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#sap-success-factor"
                    />

                    <ServiceCard
                        image={sapConcur}
                        // width="28%"
                        title="SAP Concur"
                        description="Streamline your travel and expense management with SAP Concur. A unified platform for real-time visibility, compliance, and cost control. We help businesses automate processes, reduce errors, and empower smarter financial decisions."
                        buttonText="Know More about SAP Concur"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#sap-concur"
                    />

                    <ServiceCard
                        image={sabAriba}
                        // width="35%"
                        title="SAP Ariba"
                        description="With seamless cloud integration and real-time analytics, our SAP Ariba solutions support efficient supplier collaboration, reduce purchasing costs, and enhance decision-making. We help businesses digitize their procurement cycle end-to-end and build stronger supply chain resilience."
                        buttonText="Transform Sourcing with SAP Ariba"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#sap-ariba"
                    />

                    <ServiceCard
                        image={sapbtp}
                        title="SAP BTP"
                        description="Future-ready enterprises rely on SAP Business Technology Platform (BTP) to outpace change. At AeonX Digital, we help you harness BTP to connect applications, integrate data across systems, and unlock real-time insights. Whether you're developing new capabilities or enhancing existing SAP landscapes, our team enables agility, innovation, and intelligent automation across your business."
                        buttonText="Build Smart with SAP BTP"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#sap-btp"
                    />

                    <ServiceCard
                        image={sapAnalyticsCloud}
                        // width="30%"
                        title="SAP Analytics Cloud"
                        description="Turn your data into actionable insights with SAP Analytics Cloud. A unified platform for analytics, planning, and predictive intelligence. We help businesses visualize trends, make informed decisions, and drive performance across the enterprise."
                        buttonText="Build Smart with SAP Analytics Cloud"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                        href="/sap-focused-products#sap-analytics-cloud"
                    />

                </div>
            </section>

        </>

    );
};

export default ServiceSlider;
