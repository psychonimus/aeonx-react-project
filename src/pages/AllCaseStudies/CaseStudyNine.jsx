import React, { useRef } from "react";
import RaymondXpenseCaseStudy from "/images/xpense-case-study.jpg"; // Replace with actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyNine = () => {
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
                Streamlining Raymond's Expense Management with <span style={{ color: "#f97316" }}>AeonX Xpense</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Raymond Limited, a global textile and fashion leader, faced major inefficiencies in its manual expense reimbursement process—resulting in delays, fraud risks, compliance gaps, and high operational overhead. AeonX Digital implemented an AI-powered expense automation system (Xpense) using Amazon Bedrock and Amazon SageMaker to streamline approvals, enhance financial governance, and eliminate fraud vulnerabilities. The solution enabled intelligent anomaly detection, policy validation, real-time summaries, and automated auditability—creating a fast, compliant, and employee-friendly expense management ecosystem.
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
                src={RaymondXpenseCaseStudy}
                alt="Raymond Xpense Case Study"
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
                Raymond Limited, a global textile and fashion leader, faced major inefficiencies in its manual expense reimbursement process—resulting in delays, fraud risks, compliance gaps, and high operational overhead. AeonX Digital implemented an AI-powered expense automation system (Xpense) using Amazon Bedrock and Amazon SageMaker to streamline approvals, enhance financial governance, and eliminate fraud vulnerabilities. The solution enabled intelligent anomaly detection, policy validation, real-time summaries, and automated auditability—creating a fast, compliant, and employee-friendly expense management ecosystem.
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
                With 97 years of excellence, Raymond Limited is one of India's most respected textile and apparel enterprises. The Raymond Group spans premium fabrics, garments, retail, FMCG, and real estate, serving global customers and manufacturing for leading fashion brands. Ray­mond's growing workforce and multi-location operations required a modern, scalable system to manage reimbursements with transparency, governance, and automation at scale.
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
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  Raymond's legacy expense management process relied heavily on manual workflows, causing delays, inconsistent validations, and high operational overhead. A lack of intelligent anomaly detection, poor auditability, limited system integration, and unstructured document processing increased compliance risk and reduced process efficiency. Without automation, the system struggled to scale for future business needs, creating financial leakage, employee dissatisfaction, and governance challenges.
                </p>
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
            <p className="text-muted">AeonX Digital designed an AI-driven, mobile-first expense automation solution powered by Amazon Bedrock and Amazon SageMaker. The system was engineered for intelligent document interpretation, anomaly detection, policy validation, and automated audit trails. Using an event-driven AWS architecture, expense reports flowed seamlessly from submission to automated analysis, GenAI summarization, multi-level approval, and financial system integration.</p>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS DELIVERED ================= */}
      <section className="py-5 text-white case-study-sol-del">
        <div className="container py-5">
          <h2 className="mb-5 text-center" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Solutions Delivered
          </h2>
          
          <div className="mb-5" ref={addToRefs}>
            <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316", fontSize: "1.8rem" }}>AI & ML Automation with Amazon SageMaker</h3>
            <div className="row g-4">
              {[
                "Multi-dimensional anomaly detection across historical patterns, peer comparisons, and policy rules",
                "Fraud detection using receipt authenticity checks and outlier behaviour analytics",
                "Event-driven evaluation using AWS Lambda"
              ].map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="me-3 mt-1" style={{ color: "#f97316", minWidth: "20px" }} />
                    <span style={{ fontSize: "1.1rem" }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5" ref={addToRefs}>
            <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316", fontSize: "1.8rem" }}>Generative AI with Amazon Bedrock</h3>
            <div className="row g-4">
              {[
                "Natural language summaries for each expense report",
                "Role-based insights for employees, managers, and finance controllers",
                "Policy violation explanations and corrective action suggestions",
                "Automated contextual reasoning for exception handling"
              ].map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="me-3 mt-1" style={{ color: "#f97316", minWidth: "20px" }} />
                    <span style={{ fontSize: "1.1rem" }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5" ref={addToRefs}>
            <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316", fontSize: "1.8rem" }}>End-to-End Workflow Automation</h3>
            <div className="row g-4">
              {[
                "Mobile-first submission with offline capture",
                "Real-time alerts and escalations",
                "Centralized audit trails with searchable histories",
                "Integration with SAP ERP, payroll, and financial systems",
                "Secure storage with S3 retention policies"
              ].map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="me-3 mt-1" style={{ color: "#f97316", minWidth: "20px" }} />
                    <span style={{ fontSize: "1.1rem" }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={addToRefs}>
            <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316", fontSize: "1.8rem" }}>Governance & Security Enhancements</h3>
            <div className="row g-4">
              {[
                "Fine-grained IAM roles and MFA-based secure approval flows",
                "AWS CloudTrail-based activity logging",
                "Automated reconciliation and compliance-ready recordkeeping"
              ].map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="me-3 mt-1" style={{ color: "#f97316", minWidth: "20px" }} />
                    <span style={{ fontSize: "1.1rem" }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-5 bg-light">
        <div className="container py-5 text-center">
          <h2 className="mb-5" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold" }}>Technology Stack</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3" ref={addToRefs}>
            {[
              "AI/ML: Amazon SageMaker",
              "GenAI: Amazon Bedrock",
              "Compute: AWS Lambda",
              "Storage: Amazon S3",
              "Security: AWS IAM, MFA, AWS CloudTrail",
              "Integration: SAP ERP, payroll systems"
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
      <section className="py-5 position-relative overflow-hidden case-study-nums" >
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <h2 className="text-center text-white mb-5" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Business Impact
          </h2>
          <div className="row text-center g-4">
            {[
              { val: "40%", label: "Fraudulent expense claims reduced" },
              { val: "$1.2M", label: "Annual savings from fraud reduction" },
              { val: "25%", label: "Approval cycle time reduced (14 days → 3.5 days)" },
              { val: "70%", label: "Reduction in manual finance review effort" },
              { val: "( )", label: "Improvement in employee satisfaction & productivity" },
              { val: "( )", label: "Compliance and audit readiness improvement" },
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
            Transform financial governance with AI-driven automation.
          </h2>
          <p className="lead text-muted mb-4">Empower your teams with faster, smarter, compliant expense management.</p>
          <button className="slide-button-light">
            Talk to an Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyNine;