import React, { useRef } from "react";
import AshokAlcoChemCaseStudy from "/images/Digitizing-Customer.webp"; // Replace with actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyFive = () => {
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
      <div ref={containerRef} className="case-study-wrapper" >
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
                Digitizing Customer Feedback for Ashok Alco-Chem with <span style={{ color: "#f97316" }}>AWS</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Ashok Alco-Chem Limited (AACL), a long-established leader known for product quality and continuous improvement, wanted to strengthen its customer engagement process by digitizing and automating feedback collection. Their goal was to streamline data gathering, reduce manual effort, and enable actionable insights.
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
                src={AshokAlcoChemCaseStudy}
                alt="Ashok Alco-Chem Case Study"
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
                Ashok Alco-Chem Limited (AACL), a long-established leader known for product quality and continuous improvement, wanted to strengthen its customer engagement process by digitizing and automating feedback collection. Their goal was to streamline data gathering, reduce manual effort, and enable actionable insights.
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
                AACL caters to a large customer base and needed a centralized, automated system to send feedback forms after every delivery. The existing manual process was slow, difficult to track, and lacked a consolidated database for analysis. They turned to AWS serverless capabilities and AeonX Digital's cloud expertise to build a scalable, intelligent feedback management solution.
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
                    "Manual, time-consuming process of sending feedback forms",
                    "No unified storage for customer responses",
                    "Difficulty in analysing feedback data",
                    "Requirement for seamless SAP data integration",
                    "Need for a scalable and low-maintenance system",
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
            <p className="text-muted">AeonX proposed a serverless, fully automated architecture leveraging AWS-managed services to minimize infrastructure overhead. We integrated SAP data, automated communication workflows, and built a centralized analytics dashboard—ensuring accuracy, scalability, and efficiency across the process.</p>
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
                title: "Hosted feedback form and admin dashboard on Amazon S3", 
                desc: "" 
              },
              { 
                title: "Integrated SAP customer data using AWS Lambda", 
                desc: "" 
              },
              { 
                title: "Automated monthly email triggers with unique feedback URLs", 
                desc: "" 
              },
              { 
                title: "Stored all submitted feedback securely in Amazon DynamoDB", 
                desc: "" 
              },
              { 
                title: "Built an admin dashboard to view analytics and generate reports", 
                desc: "" 
              },
              { 
                title: "Managed all backend workflows via Lambda + API Gateway", 
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
                "AWS Lambda", 
              "Amazon S3", 
              "Amazon DynamoDB", 
              "Amazon API Gateway", 
              "SAP"
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
              { val: "( )%", label: "Automated feedback collection rate" },
              { val: "( )%", label: "Reduction in manual workload for sales team" },
              { val: "( )%", label: "Improvement in feedback response rate or customer satisfaction tracking" },
              { val: "( )%", label: "Reduction in total cost of ownership due to serverless architecture" },
              { val: "( )%", label: "Increase in speed of insights / decision making after deployment" },
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
            Transform customer experiences with automated, scalable, cloud-native solutions.
          </h2>
          <p className="lead text-muted mb-4">Partner with AeonX Digital to modernize your workflows with AWS.</p>
          <NavLink to="/contact">
            <button className="slide-button-light">
            Talk to an AWS Expert
          </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyFive;