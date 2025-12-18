import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import risewithsap from "/images/risewithsap.webp"
import sapbtp from "/images/sapbtp.webp"
import aws from "/images/aws-partner.png"
import ServiceTitleCardTwo from "./ServiceTitleCardTwo";
import ServiceCardTwo from "./ServiceCardTwo";
import sapaws from "/images/sap-on-aws.png"
import ml from "/images/ml.webp"
import disasterRecovery from '/images/disaster-recovery-logo.png'
import IndSol from '/images/industrial-sol.png'
import AppModernization from '/images/application-modernization-logo.png'
import MsOnAws from '/images/ms-on-aws-logo.png'
import awsIot from '/images/awsIot.png'
import ManagedServices from '/images/managed-services-logo.png'

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
            <section className="service-slider service-slider-two" ref={containerRef} style={{ position: 'relative' }}>
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
                        title="SAP on AWS"
                        description="Transform your SAP landscape with a cloud-ready foundation. AeonX delivers secure, scalable, and high-performance SAP environments on AWS, designed for agility, resilience, and innovation. "
                        descColor="#fff"
                        buttonText="Accelerate SAP on AWS"
                        url="/aws-products#sap-on-aws"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={ml}
                        title="Machine Learning"
                        description="AeonX enables organizations to turn data into intelligence with AWS-driven machine learning. From automation and anomaly detection to predictive insights, our ML solutions combine domain expertise with advanced AWS capabilities to help enterprises innovate and scale securely. "
                        descColor="#fff"
                        buttonText="Turn Data into Intelligence"
                        url="/aws-products#machine-learning"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={disasterRecovery}
                        title="AWS Disaster Recovery"
                        description="SAP Disaster Recovery on AWS ensures high availability and business continuity by replicating critical SAP workloads to a secure, scalable secondary environment for rapid failover and minimal downtime. With AWS-native automation, low-latency connectivity, and advanced security controls, enterprises can protect SAP systems from outages, data loss, and operational disruption."
                        descColor="#fff"
                        buttonText="Ensure SAP Business Continuity"
                        url="/aws-products#disaster-management"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={IndSol}
                        title="Industrial Solutions"
                        description="AeonX delivers industry-grade cloud and IoT solutions for manufacturing and process industries, helping enterprises streamline operations, integrate supply chains, and move toward smart, connected factories. As an AWS Industrial Software Competency Partner, we enable secure, scalable digital transformation across the full application lifecycle from design and deployment to training and ongoing support. "
                        descColor="#fff"
                        buttonText="Power Smart Industrial Operationss"
                        url="/aws-products#industry-standard-solutions"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={AppModernization}
                        title="Application Modernization"
                        description="We modernize legacy applications on AWS to deliver faster performance, lower costs, and greater agility. From re-architecting to serverless adoption, we help businesses build cloud-ready applications that scale seamlessly."
                        descColor="#fff"
                        buttonText="Reimagine Applications on AWS"
                        url="/aws-products#application-modernization"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={MsOnAws}
                        title="Microsoft on AWS"
                        description="We help enterprises to run Microsoft workloads seamlessly on AWS with secure, scalable, and cost-efficient cloud architectures. From databases to web and mobile applications, we deliver fully automated, flexible deployments that help businesses scale on demand without long-term commitments."
                        descColor="#fff"
                        buttonText="Scale Microsoft Workloads on AWS"
                        url="/aws-products#ms-on-aws"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={awsIot}
                        title="Internet of Things"
                        description="AeonX delivers end-to-end IoT solutions on AWS, helping enterprises connect devices, capture real-time insights, and optimize operations with secure, cloud-enabled architectures. From sensor integration to intelligent platforms, we build IoT ecosystems that improve efficiency, reduce costs, and drive meaningful business impact."
                        descColor="#fff"
                        buttonText="Connect, Monitor, Optimize at Scale"
                        url="/aws-products#iot-solutions"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                    <ServiceCardTwo
                        image={ManagedServices}
                        title="Managed Services"
                        description="AWS managed services ensure your cloud environment remains secure, optimized, and high-performing at all times. From infrastructure monitoring and automation to cost management and continuous improvement, we keep your AWS workloads running smoothly so you can focus on your business."
                        descColor="#fff"
                        buttonText="Keep AWS Optimized & Secure"
                        url="/aws-products#aws-managed-services"
                        buttonIcon={() => <BsArrowUpRightCircleFill color="#fff" size={28} />}
                    />

                </div>
            </section>

        </>

    );
};

export default ServiceSliderTwo;
