import React, { useRef } from "react";
import {Helmet} from "react-helmet";
import AshapuraCaseStudy from "/images/Ashapura-case-study.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyOne = () => {
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
              start: "top 85%", // Trigger a bit earlier
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
    <>
      
      
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
                Improving Manufacturing Efficiency with <span style={{ color: "#f97316" }}>SAP S/4HANA</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Discover how AeonX transformed operational workflows, boosted production
                throughput, and optimized resource planning for a large-scale manufacturing firm
                using SAP S/4HANA and automation-driven solutions.
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
                src={AshapuraCaseStudy}
                alt="Case Study Hero"
                className="img-fluid position-relative"
                style={{ zIndex: 1, borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW & PROBLEM ================= */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6" ref={addToRefs}>
              <h2 className="mb-4" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>Overview</h2>
              <p className="lead text-muted">
                Our client, a leading global manufacturing enterprise, faced challenges with
                outdated ERP systems, lack of process visibility, and inefficient production
                planning. AeonX implemented SAP S/4HANA to streamline operations, automate
                workflows, and enable real-time decision-making across departments.
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
                    "Outdated systems leading to inefficient manual processes",
                    "No centralized data across procurement & logistics",
                    "Lack of real-time analytics and reporting",
                    "Difficulty in scaling operations to meet demands",
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
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5" ref={addToRefs}>
            <h2 style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>Our Approach</h2>
            <p className="text-muted">A strategic roadmap to digital transformation</p>
          </div>

          <div className="row g-4">
            {[
              { step: "01", title: "Discovery & Audit", desc: "Conducted system audit, gathered requirements, and mapped business workflows." },
              { step: "02", title: "Process Re-engineering", desc: "Re-designed processes to fit S/4HANA best practices and industry standards." },
              { step: "03", title: "Implementation", desc: "Implemented SAP modules and migrated all legacy data into a secure cloud environment." },
              { step: "04", title: "Optimization", desc: "Integrated automation tools to eliminate repetitive tasks and improve efficiency." },
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
              { title: "SAP S/4HANA Implementation", desc: "End-to-end deployment with real-time dashboards and analytics." },
              { title: "Automated Production Planning", desc: "Introduced automated material requirement planning (MRP) and workflow automation." },
              { title: "Cloud Migration", desc: "Migrated workloads to AWS ensuring scalability and security." },
              { title: "Unified Data Platform", desc: "Centralized data allowing seamless access across departments." },
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
                    <p className="mb-0 text-white-50 small">{sol.desc}</p>
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
            {["SAP S/4HANA", "AWS Cloud", "Fiori UI", "API Integrations", "Automation Tools", "Power BI"].map((tech, i) => (
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
              { val: "40%", label: "Increase in Efficiency" },
              { val: "55%", label: "Reduction in Manual Work" },
              { val: "30%", label: "Faster Production Cycles" },
              { val: "100%", label: "Real-time Visibility" },
            ].map((res, i) => (
              <div className="col-6 col-md-3" key={i} ref={addToRefs}>
                <div className="p-3">
                  <h3 className="display-4 fw-bold text-white mb-2" style={{ fontFamily: "Gilroy-Bold" }}>{res.val}</h3>
                  <p className="text-white fs-5">{res.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 bg-white text-center">
        <div className="container py-5" ref={addToRefs}>
          <h2 className="mb-3" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
            Want similar results?
          </h2>
          <p className="lead text-muted mb-4">Let's transform your business with smart digital solutions.</p>
          <button className="slide-button-light">
            Talk to an Expert
          </button>
        </div>
      </section>
    </div>
    </>
  );
};

export default CaseStudyOne;
