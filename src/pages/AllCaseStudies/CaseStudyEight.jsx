import React, { useRef } from "react";
import AshapuraLogystixCaseStudy from "/images/Optimizing-Ashapura.webp"; // Replace with actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyEight = () => {
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
      <div ref={containerRef} className="case-study-wrapper">
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
              {/* <span
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
              </span> */}
              <h1
                className="display-3 fw-bold mb-4"
                style={{ fontFamily: "Gilroy-Bold", lineHeight: "1.1" }}
              >
                Optimizing Ashapura Minechem's Logistics with <span style={{ color: "#f97316" }}>Logystix</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Ashapura Minechem Ltd, a 60+ year global leader in multi-mineral solutions operating across 70+ countries, faced major inefficiencies in freight, routing, and logistics planning due to fragmented, manual processes. AeonX implemented Logystix, an AI-driven logistics optimization platform powered by AWS Bedrock, SageMaker, and Comprehend—modernizing Ashapura's freight booking, route planning, document processing, and vendor management with predictive intelligence and automation.
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
                src={AshapuraLogystixCaseStudy}
                alt="Ashapura Logystix Case Study"
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
                Ashapura Minechem Ltd, a 60+ year global leader in multi-mineral solutions operating across 70+ countries, faced major inefficiencies in freight, routing, and logistics planning due to fragmented, manual processes. AeonX implemented Logystix, an AI-driven logistics optimization platform powered by AWS Bedrock, SageMaker, and Comprehend—modernizing Ashapura's freight booking, route planning, document processing, and vendor management with predictive intelligence and automation.
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
                Ashapura's logistics workflows relied heavily on paper documentation, manual approvals, ad-hoc rate negotiations, and non-integrated systems. To address rising freight costs, inefficiency, compliance risks, and lack of data-driven decision-making, AeonX deployed Logystix, an enterprise logistics intelligence engine that digitized and automated Ashapura's end-to-end freight lifecycle.
              </p>
              <p className="text-muted mb-2">The modernized platform delivered:</p>
              <ul className="text-muted">
                <li>AI-generated carrier/vehicle recommendations</li>
                <li>Predictive freight estimation</li>
                <li>Automated document classification</li>
                <li>Real-time tracking & data-driven decisions</li>
                <li>Seamless ERP integrations</li>
                <li>Scalable cloud-native architecture</li>
              </ul>
            </div>
            <div className="col-lg-6" ref={addToRefs}>
              <div
                className="p-5 h-100 rounded-4 text-white case-study-challenge"
                style={{
                  
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316" }}>The Challenge</h3>
                
                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Business Challenges</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Manual, paper-based freight booking causing operational delays</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>No historical/predictive insights for freight pricing, leading to inflated costs</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Inefficient load & route planning increasing fuel usage and cycle times</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Workforce productivity reduced due to repetitive admin tasks</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Lack of transparency & unreliable logistics visibility</span>
                  </li>
                </ul>

                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Technical Challenges</h5>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>No centralized data lake; logistics data scattered across emails & spreadsheets</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>No AI/ML integration for forecasting or planning</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Legacy system unable to scale with growing shipment volume</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Missing API-driven integrations with vendors & ERP</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Security, access control, audit, and compliance gaps</span>
                  </li>
                </ul>

                <h5 className="text-white mb-3" style={{ fontSize: "1.1rem", fontWeight: "600" }}>Risks If Unresolved</h5>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Freight costs exceeding industry benchmarks by 20–25%</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Customer attrition due to delivery delays & lack of visibility</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Inability to scale logistics operations for new markets</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>High risk of system downtime & failure</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Missed opportunities for predictive analytics and automation</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <FaCheckCircle className="me-2 mt-1" style={{ color: "#f97316", minWidth: "16px", fontSize: "0.9rem" }} />
                    <span style={{ fontSize: "0.95rem" }}>Security vulnerabilities & potential non-compliance issues</span>
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
            <p className="text-muted">AeonX deployed Logystix, a complete GenAI-powered logistics optimization system built on AWS. Our approach included:</p>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <ul className="text-muted" style={{ fontSize: "1.1rem" }}>
                <li className="mb-3">Implementing a predictive freight engine using Amazon SageMaker</li>
                <li className="mb-3">Embedding GenAI decision-making via Amazon Bedrock (Claude & Titan)</li>
                <li className="mb-3">Automating document extraction through Amazon Comprehend</li>
                <li className="mb-3">Developing end-to-end workflows for booking, approvals & tracking</li>
                <li className="mb-3">Creating scalable microservices using Lambda & API Gateway</li>
                <li className="mb-3">Integrating seamlessly with SAP ERP</li>
                <li className="mb-3">Establishing a centralized S3 data lake for structured/unstructured data</li>
                <li className="mb-3">Enforcing enterprise-grade security, IAM controls & audit logging</li>
              </ul>
            </div>
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
                title: "Automated freight booking & approval workflows", 
                desc: "" 
              },
              { 
                title: "AI-generated carrier, route & vehicle recommendations", 
                desc: "" 
              },
              { 
                title: "Predictive freight cost modeling & booking window optimization", 
                desc: "" 
              },
              { 
                title: "End-to-end document extraction & validation (multi-language)", 
                desc: "" 
              },
              { 
                title: "Vendor APIs for automated freight confirmations", 
                desc: "" 
              },
              { 
                title: "Real-time logistics visibility & exception alerts", 
                desc: "" 
              },
              { 
                title: "ERP integration for reconciliation & financial sync", 
                desc: "" 
              },
              { 
                title: "Quicksight dashboards for freight, SLA, and vendor insights", 
                desc: "" 
              },
              { 
                title: "Continuous model retraining to improve accuracy over time", 
                desc: "" 
              },
              { 
                title: "Centralized logistics data lake & scalable serverless architecture", 
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
            <h2 className="mb-5 section-heading" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold" }}>Technology Stack</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3" ref={addToRefs}>
              {[
                "Amazon Bedrock (Claude, Titan Models)", 
              "Amazon SageMaker (XGBoost, Forecasting Models)", 
              "Amazon Comprehend (NER, Classification, Sentiment)", 
              "AWS Lambda", 
              "Amazon API Gateway",
              "Amazon S3 (Data Lake)",
              "Amazon CloudWatch / CloudTrail",
              "Amazon SNS",
              "Amazon QuickSight",
              "SAP ERP Integrations via Lambda"
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 fw-bold tech-stack-item"
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
              { val: "18%", label: "Reduction in freight costs" },
              { val: "$3.2M", label: "Annual cost savings" },
              { val: "30%", label: "Faster freight booking cycle (4 days → <24 hrs)" },
              { val: "12 FTEs", label: "Manual effort eliminated: repurposed" },
              { val: "97%", label: "Delivery performance improved to: on-time" },
              { val: "( %)", label: "Fuel efficiency improved" },
              { val: "( %)", label: "SLA violations reduced" },
              { val: "( %)", label: "Vendor performance accuracy improved" },
              { val: "100%", label: "End-to-end audit & compliance visibility: traceability" },
              { val: "( x)", label: "Scalability to handle peak shipment volumes" },
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
            Reimagine your logistics with Logystix
          </h2>
          <p className="lead text-muted mb-4">The AI-powered engine that cuts costs, accelerates operations, and unlocks complete supply chain intelligence.</p>
          <NavLink to="/contact">
            <button className="slide-button-light">
            Learn More About Logystix
          </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyEight;