import React, { useRef } from "react";
import AshapuraCaseStudy from "/images/Transforming-Ashapura.jpg"; // Replace with actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const CaseStudyThree = () => {
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
                Transforming Ashapura's Mineral Operations with <span style={{ color: "#f97316" }}>Intelligent Automation</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                With a history spanning more than 60 years, Ashapura is a top provider of multi mineral solutions with a global presence, operating across multiple Indian states and seven other nations. As a preferred supplier to multinational corporations in more than 70 countries across four continents, Ashapura is known for consistent quality and customized mineral solutions. However, its operational methods lacked efficiency and posed risks to future growth.
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
                alt="Ashapura Mineral Case Study"
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
                With a history spanning more than 60 years, Ashapura is a top provider of multi mineral solutions with a global presence, operating across multiple Indian states and seven other nations. As a preferred supplier to multinational corporations in more than 70 countries across four continents, Ashapura is known for consistent quality and customized mineral solutions. However, its operational methods lacked efficiency and posed risks to future growth.
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
                Ashapura relied heavily on Excel for managing all operational data, including manufacturing, logistics, and maintenance. Disparate spreadsheets resulted in inaccurate records, limited control, and flawed profitability analysis. Their multi country structure required handling multiple accounting systems, currencies, and consolidation needs, which their legacy setup could not support.
              </p>
              <p className="text-muted">
                Operating in Guinea, where the official language is French, further created communication barriers since the majority of the workforce did not speak English. Critical shipping activities at remote ports also lacked skilled staff, making the process dependent on inaccurate manual data. Ashapura required a modern system to manage operations effectively across geographies.
              </p>
            </div>
            <div className="col-lg-6" ref={addToRefs}>
              <div
                className="p-5 h-100 rounded-4 text-white case-study-challenge"
                style={{
                  
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316" }}>The Challenge</h3>
                <ul className="list-unstyled">
                  {[
                    "All data maintained manually in Excel",
                    "Disparate, inaccurate, and unstructured datasets",
                    "Lack of visibility across manufacturing, logistics, and maintenance operations",
                    "Multi country accounting complexity and currency consolidation issues",
                    "Language barriers due to French speaking teams in Guinea",
                    "Remote port operations lacking skilled staff",
                    "Inaccurate weight data and dependency on manual inputs",
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
            <p className="text-muted">A strategic roadmap to digital transformation</p>
          </div>

          <div className="row g-4">
            {[
              { 
                step: "01", 
                title: "Discovery & Audit", 
                desc: "Evaluated existing processes, identified gaps across operations, finance, and logistics, and mapped requirements for an integrated SAP system." 
              },
              { 
                step: "02", 
                title: "Process Re engineering", 
                desc: "Redesigned business processes and recommended SAP S/4HANA 1909 for mining and manufacturing operations, supported with SAP GUI French language packs and dual language master data." 
              },
              { 
                step: "03", 
                title: "Implementation", 
                desc: "Implemented SAP S/4HANA 1909, enabled multi currency reporting through FI/CO, set up work centres, storage locations, and automated weighbridge integration with RFID and AI based data capture." 
              },
              { 
                step: "04", 
                title: "Optimization", 
                desc: "Established SOPs for vendor invoice tracking, automated gate pass entries, and ensured background posting of SAP transactions for improved accuracy and control." 
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
      <section className="py-5 text-white case-study-sol-del">
        <div className="container py-5">
          <h2 className="mb-5 text-center" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Solutions Delivered
          </h2>
          <div className="row g-4">
            {[
              { 
                title: "SAP S/4HANA 1909 implementation for mining and manufacturing", 
                desc: "" 
              },
              { 
                title: "Automated sales and distribution document processing", 
                desc: "" 
              },
              { 
                title: "FI/CO multi currency enablement", 
                desc: "" 
              },
              { 
                title: "SAP GUI French language pack implementation", 
                desc: "" 
              },
              { 
                title: "Dual language configuration and master data", 
                desc: "" 
              },
              { 
                title: "Work centre setup for tracking machine performance and productivity", 
                desc: "" 
              },
              { 
                title: "Storage locations for vendor inventory visibility", 
                desc: "" 
              },
              { 
                title: "Weighbridge integration for accurate weight capture", 
                desc: "" 
              },
              { 
                title: "RFID and AI based automation for reducing manual entry errors", 
                desc: "" 
              },
              { 
                title: "Automated gate pass creation and SAP transaction posting", 
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
              "SAP S/4HANA 1909", 
              "SAP GUI", 
              "RFID Sensors", 
              "AI Based Automation", 
              "Work Centre Tracking"
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
      <section className="py-5 position-relative overflow-hidden case-study-nums">
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <h2 className="text-center text-white mb-5" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Business Impact
          </h2>
          <div className="row text-center g-4">
            {[
              { val: "X", label: "Reduction in Manual Errors" },
              { val: "X", label: "Improved Multi Country Visibility" },
              { val: "X", label: "Faster Operational Processing" },
              { val: "X", label: "Higher Accuracy in Inventory and Logistics Data" },
            ].map((res, i) => (
              <div className="col-6 col-md-3" key={i} ref={addToRefs}>
                <div className="p-3">
                  <h3 className="display-4 fw-bold text-white mb-2" style={{ fontFamily: "Gilroy-Bold" }}>{res.val}</h3>
                  <p className="text-white fs-5">{res.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white mt-5 lead" ref={addToRefs}>Within two weeks of going live, client teams adapted to the new processes with minimal downtime. AeonX transitioned from implementation to support and was selected for three years of SAP system support.</p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 bg-white text-center">
        <div className="container py-5" ref={addToRefs}>
          <h2 className="mb-3" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
            Planning a complex multi country SAP transformation?
          </h2>
          <p className="lead text-muted mb-4">Streamline operations with a robust, future ready SAP S/4HANA system.</p>
          <Link to="/contact">
            <button className="slide-button-light">
              Consult Our SAP Specialists
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyThree;