import React, { useRef } from "react";
import RaymondAeonXIQCaseStudy from "/images/Streamlining-raymonds.jpg"; // Replace with actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CaseStudySeven = () => {
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
                Streamlining Raymond Limited's Operations with <span style={{ color: "#f97316" }}>AeonX.IQ</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Raymond Limited, a 100-year legacy brand and one of India's most respected textile and lifestyle conglomerates, operates across textiles, apparel, engineering, real estate, and FMCG. With a diverse workforce and large-scale operational processes, Raymond needed an intelligent system to automate expense management, centralize knowledge, and improve decision-making efficiency.  AeonX IQ delivered an AI-powered solution that transformed their operations end-to-end.
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
                src={RaymondAeonXIQCaseStudy}
                alt="Raymond AeonX IQ Case Study"
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
                Raymond Limited, a 100-year legacy brand and one of India's most respected textile and lifestyle conglomerates, operates across textiles, apparel, engineering, real estate, and FMCG. With a diverse workforce and large-scale operational processes, Raymond needed an intelligent system to automate expense management, centralize knowledge, and improve decision-making efficiency.  AeonX IQ delivered an AI-powered solution that transformed their operations end-to-end.
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
                Raymond faced increasing inefficiencies due to manual expense workflows, fragmented knowledge repositories, and time-consuming reporting. To address this, AeonX implemented AeonX IQ, an AI-driven product built on AWS, designed to automate expense processing, simplify data retrieval, and enhance operational productivity for enterprise teams.
              </p>
              <p className="text-muted mb-2">The solution offered:</p>
              <ul className="text-muted">
                <li>Automated expense classification & verification</li>
                <li>AI-powered knowledge retrieval</li>
                <li>End-to-end visibility of company spending</li>
                <li>Scalable and secure cloud-native architecture</li>
              </ul>
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
                
                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Business Challenge 1</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Excessive time spent on manual expense entries</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>No automation for validation or classification</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>High chances of errors and duplicate entries</span>
                  </li>
                </ul>

                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Business Challenge 2</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Lengthy, complex reporting</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Slower decision-making due to lack of visual insights</span>
                  </li>
                </ul>

                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Business Challenge 3</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Scattered knowledge across multiple systems</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Difficulty locating accurate, updated process information</span>
                  </li>
                </ul>

                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Business Challenge 4</h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>No central AI-powered knowledge engine</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>New employee onboarding was slow and inconsistent</span>
                  </li>
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
            <p className="text-muted">AeonX deployed AeonX IQ, a customized, AI-enabled expense and knowledge automation platform.  Our approach included:</p>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <ul className="text-muted" style={{ fontSize: "1.1rem" }}>
                <li className="mb-3">Designing a cloud-native architecture using AWS</li>
                <li className="mb-3">Implementing OCR, NLP, and AI workflows for expense automation</li>
                <li className="mb-3">Building a scalable knowledge engine using semantic search</li>
                <li className="mb-3">Creating a unified dashboard for approvals, analytics, and insights</li>
                <li className="mb-3">Ensuring enterprise-grade security, compliance, and resilience</li>
              </ul>
            </div>
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
                title: "AI-powered expense management system", 
                desc: "" 
              },
              { 
                title: "Automated OCR, classification, and validation (via Textract & Comprehend)", 
                desc: "" 
              },
              { 
                title: "Chatbot-enabled knowledge assistant using Amazon Bedrock", 
                desc: "" 
              },
              { 
                title: "End-to-end workflow automation with approvals and policy enforcement", 
                desc: "" 
              },
              { 
                title: "Centralized expense repository with QuickSight dashboards", 
                desc: "" 
              },
              { 
                title: "Secure data storage with automated backups (S3 + RDS)", 
                desc: "" 
              },
              { 
                title: "Real-time notifications through SES", 
                desc: "" 
              },
              { 
                title: "Minimal third-party tool dependency for full control & compliance", 
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
              "Amazon Textract", 
              "Amazon Comprehend", 
              "Amazon Bedrock", 
              "Amazon Lambda", 
              "Amazon S3",
              "Amazon RDS",
              "Amazon QuickSight",
              "Amazon SES"
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
              { val: "70%", label: "Reduction in expense processing time: faster" },
              { val: "( %)", label: "Decrease in manual effort" },
              { val: "( %)", label: "Reduction in policy violations / compliance errors" },
              { val: "( ₹ / %)", label: "Cost savings from automation" },
              { val: "( %)", label: "Increase in reporting efficiency" },
              { val: "( %)", label: "Faster onboarding time using AI knowledge engine" },
              { val: "( %)", label: "Increase in productivity across finance & operations" },
              { val: "99.9%", label: "System uptime delivered through AWS" },
              { val: "( x users)", label: "Scalability to handle concurrent submissions" },
            ].map((res, i) => (
              <div className="col-md-6 col-lg-4" key={i} ref={addToRefs}>
                <div className="p-3">
                  <h3 className="display-4 fw-bold text-white mb-2" style={{ fontFamily: "Gilroy-Bold" }}>{res.val}</h3>
                  <p className="text-white fs-6">{res.label}</p>
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
            Transform your enterprise workflows with AeonX IQ
          </h2>
          <p className="lead text-muted mb-4">The AI engine built for speed, accuracy, and business intelligence.</p>
          <button className="slide-button-light">
            Learn More About AeonX IQ
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySeven;