import React, { useRef } from "react";
import DeluxCaseStudy from "/images/Modernizing-Delux-Bearings.jpg"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyFour = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero Animations
    tl.from(heroRef.current.querySelector("h1"), {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        heroRef.current.querySelector("p"),
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        imgRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

    // Section Animations
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, { scope: containerRef });

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
      <div ref={containerRef} className="case-study-wrapper" style={{ overflowX: "hidden" }}>
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="case-hero d-flex align-items-center position-relative"
        style={{
          minHeight: "100vh",
          color: "#fff",
          paddingTop: "80px",
        }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <span
                className="d-inline-block px-3 py-1 mb-3 rounded-pill"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  fontSize: "0.9rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Case Study
              </span>
              <h1
                className="display-3 fw-bold mb-4"
                style={{ fontFamily: "Gilroy-Bold", lineHeight: "1.1" }}
              >
                Modernizing Delux Bearings' Operations with <span style={{ color: "#f97316" }}>AWS Cloud</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Delux Bearings is India's largest manufacturer of Clutch Release Bearings, with the widest range of bearing and precision components, a PAN India presence, and a global footprint with Original Equipment and Tier I manufacturers.  Founded in 1956, the company offers end to end customized engineering solutions to the automotive sector.
              </p>
              <button className="slide-button">
                Read Full Story <FaArrowRight className="ms-2" />
              </button>
            </div>
            <div className="col-lg-6 text-center position-relative">
              <div
                className="hero-blob"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "500px",
                  height: "500px",
                  background: "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(0,0,0,0) 70%)",
                  zIndex: 0,
                  filter: "blur(50px)",
                }}
              ></div>
              <img
                ref={imgRef}
                src={DeluxCaseStudy}
                alt="Delux Bearings Case Study"
                className="img-fluid position-relative"
                style={{ zIndex: 1, borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE SUMMARY ================= */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <div className="text-center mb-5">
                <h2 className="mb-4" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
                  Executive Summary
                </h2>
              </div>
              <p className="lead text-muted text-center">
                Delux Bearings is India's largest manufacturer of Clutch Release Bearings, with the widest range of bearing and precision components, a PAN India presence, and a global footprint with Original Equipment and Tier I manufacturers.  Founded in 1956, the company offers end to end customized engineering solutions to the automotive sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW & PROBLEM ================= */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6" ref={addToRefs}>
              <h2 className="mb-4" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>Overview</h2>
              <p className="text-muted">
                Delux Bearings was running its complete business operations on SAP S/4HANA hosted in an on premise infrastructure. With growing demand and an expanding customer base, the company needed to modernize its technology landscape to stay competitive.  They decided to migrate their SAP environment to AWS to leverage a reliable, secure, and scalable cloud platform capable of improving efficiency, reducing costs, and supporting business growth.
              </p>
            </div>
            <div className="col-lg-6" ref={addToRefs}>
              <div
                className="p-5 h-100 rounded-4 text-white"
                style={{
                  background: "linear-gradient(135deg, #1e1e2f 0%, #2d2d44 100%)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316" }}>The Challenge</h3>
                <ul className="list-unstyled">
                  {[
                    "Entire SAP S/4HANA landscape running on on premise infrastructure",
                    "Need to modernize core business operations",
                    "Scalability limitations due to physical infrastructure",
                    "Growing customer demand requiring improved performance and agility",
                    "Need for enhanced reliability, security, and long term flexibility",
                    "Desire to reduce operational overhead and infrastructure costs",
                  ].map((item, i) => (
                    <li key={i} className="mb-3 d-flex align-items-start">
                      <FaCheckCircle className="me-3 mt-1" style={{ color: "#f97316", minWidth: "20px" }} />
                      <span style={{ fontSize: "1.1rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="text-center mb-5" ref={addToRefs}>
            <h2 style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>Our Approach</h2>
            <p className="text-muted">A structured roadmap for cloud migration</p>
          </div>

          <div className="row g-4">
            {[
              { 
                step: "01", 
                title: "Discovery & Assessment", 
                desc: "A thorough assessment of the existing SAP landscape, infrastructure, applications, and data to identify potential migration risks and determine the best cloud strategy." 
              },
              { 
                step: "02", 
                title: "Architecture Design", 
                desc: "Designed a new AWS based architecture focused on performance, security, and scalability. AWS architects and engineers collaborated closely with Delux Bearings to establish a robust and flexible cloud foundation." 
              },
              { 
                step: "03", 
                title: "Migration Execution", 
                desc: "SAP systems were migrated in phases to minimize business disruption. Each system was moved, tested thoroughly, and then data was migrated. AWS tools and services were used to automate large parts of the process, reducing errors and delays." 
              },
              { 
                step: "04", 
                title: "Optimization & Enablement", 
                desc: "AWS provided continuous support, training, best practices, and optimization guidance. Services such as Amazon EC2 and Amazon S3 were leveraged to ensure high performance and reliability." 
              },
            ].map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i} ref={addToRefs}>
                <div
                  className="p-4 h-100 border rounded-4 position-relative overflow-hidden approach-card-hover"
                  style={{ transition: "all 0.3s ease", background: "#fff" }}
                >
                  <span
                    style={{
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "rgba(249, 115, 22, 0.1)",
                      position: "absolute",
                      top: "-10px",
                      right: "10px",
                    }}
                  >
                    {item.step}
                  </span>
                  <h4 className="mt-3 mb-3" style={{ fontFamily: "Gilroy-Bold" }}>{item.title}</h4>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS DELIVERED ================= */}
      <section className="py-5 text-white" style={{ background: "#111" }}>
        <div className="container py-5">
          <h2 className="mb-5 text-center" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Solutions Delivered
          </h2>
          <div className="row g-4">
            {[
              { 
                title: "Infrastructure as a Service (IaaS) on AWS", 
                desc: "" 
              },
              { 
                title: "Architecting and provisioning AWS infrastructure", 
                desc: "" 
              },
              { 
                title: "Deployment of SAP applications including SAP S/4HANA and SAP Fiori Gateway", 
                desc: "" 
              },
              { 
                title: "Configuration and setup of SAP instances on AWS", 
                desc: "" 
              },
              { 
                title: "Managed services for AWS infrastructure with defined SLAs", 
                desc: "" 
              },
              { 
                title: "Phased migration of SAP workloads for minimal downtime", 
                desc: "" 
              },
              { 
                title: "Use of AWS tools to automate migration and reduce operational risk", 
                desc: "" 
              },
            ].map((sol, i) => (
              <div className="col-md-6" key={i} ref={addToRefs}>
                <div
                  className="p-4 rounded-4 h-100 d-flex align-items-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    className="me-4 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      minWidth: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #f97316 0%, #facc15 100%)",
                      color: "#fff",
                      fontSize: "1.5rem",
                    }}
                  >
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "Gilroy-Bold", fontSize: "1.25rem" }}>{sol.title}</h4>
                    {sol.desc && <p className="mb-0 text-white-50 small">{sol.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-5 bg-light">
        <div className="container py-5 text-center">
          <h2 className="mb-5" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold" }}>Technology Stack</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3" ref={addToRefs}>
            {[
              "AWS Cloud", 
              "Amazon EC2", 
              "Amazon S3", 
              "SAP S/4HANA", 
              "SAP Fiori Gateway",
              "AWS Migration Tools"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-pill fw-bold"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                  color: "#333",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f97316 0%, #facc15 100%)" }}>
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <h2 className="text-center text-white mb-5" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Business Impact
          </h2>
          <div className="row text-center g-4">
            {[
              { val: "", label: "Increase in Agility and Scalability" },
              { val: "", label: "Reduction in Operational Costs" },
              { val: "", label: "Improved Performance and Reliability" },
              { val: "", label: "Higher Flexibility and Faster Response to Market Demands" },
            ].map((res, i) => (
              <div className="col-6 col-md-3" key={i} ref={addToRefs}>
                <div className="p-3">
                  <h3 className="display-4 fw-bold text-white mb-2" style={{ fontFamily: "Gilroy-Bold" }}>{res.val}</h3>
                  <p className="text-white fs-5">{res.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white mt-5 lead" ref={addToRefs}>The AWS migration enabled Delux Bearings to strengthen business continuity, introduce new features faster, and prepare their digital landscape for future expansion. The transition to AWS delivered agility, flexibility, scalability, improved data security, and long term cost efficiency.</p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 bg-white text-center">
        <div className="container py-5" ref={addToRefs}>
          <h2 className="mb-3" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
            Ready to modernize your infrastructure?
          </h2>
          <p className="lead text-muted mb-4">Move to a secure, scalable, and future ready AWS cloud environment.</p>
          <button className="slide-button-light">
            Talk to an AWS Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyFour;