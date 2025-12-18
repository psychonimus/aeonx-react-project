import React, { useRef } from "react";
import CKBirlaCaseStudy from "/images/Modernizing-CK-Birla-Hospitals.jpg"; // Replace with actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CaseStudySix = () => {
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
                Modernizing CK Birla Hospitals Operations on <span style={{ color: "#f97316" }}>AWS Cloud</span>
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                The CK Birla Group of Hospitals — including BMBHRC, CMRI (Kolkata), and RBH (Jaipur) — is a leading healthcare network in India with 800+ beds, advanced inpatient & outpatient care, and a track record of 5.5 lakh+ surgeries, 1.9 lakh catheterizations, and 22,000 cardiac procedures.  To modernize their SAP landscape, improve performance, and reduce operational costs, CKBH embarked on a cloud-first journey with AWS and AeonX Digital as their strategic partner.
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
                src={CKBirlaCaseStudy}
                alt="CK Birla Hospitals Case Study"
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
                The CK Birla Group of Hospitals — including BMBHRC, CMRI (Kolkata), and RBH (Jaipur) — is a leading healthcare network in India with 800+ beds, advanced inpatient & outpatient care, and a track record of 5.5 lakh+ surgeries, 1.9 lakh catheterizations, and 22,000 cardiac procedures.  To modernize their SAP landscape, improve performance, and reduce operational costs, CKBH embarked on a cloud-first journey with AWS and AeonX Digital as their strategic partner.
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
                Operating across multiple locations, CKBH needed seamless data access, high system availability, reduced infrastructure maintenance, and a scalable architecture. The hospital chose AWS for its low cost, agility, security, and scalability — and partnered with AeonX for SAP- and healthcare-specific cloud expertise.
              </p>
              <p className="text-muted mb-2">Their goal:</p>
              <ul className="text-muted">
                <li>Migrate SAP workloads from aging on-prem infrastructure</li>
                <li>Improve performance, uptime, and reliability</li>
                <li>Reduce TCO and increase operational agility</li>
                <li>Adopt future-ready architecture for analytics and innovation</li>
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
                <ul className="list-unstyled">
                  {[
                    "Aging on-prem SAP systems causing performance issues",
                    "Rising maintenance & infrastructure costs",
                    "Lack of internal AWS architectural expertise",
                    "Need for a secure, scalable, and healthcare-compliant cloud environment",
                    "Requirement for real-time insights & seamless data access across locations",
                    "Need to modernize DR and HA capabilities",
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
            <p className="text-muted">AeonX provided end-to-end guidance, from cloud architecture to migration execution. Leveraging SAP + AWS best practices, AeonX:</p>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <ul className="text-muted" style={{ fontSize: "1.1rem" }}>
                <li className="mb-3">Conducted a deep assessment of CKBH's SAP landscape</li>
                <li className="mb-3">Designed an optimized cloud architecture for performance & cost efficiency</li>
                <li className="mb-3">Built an AWS-based monitoring platform for SAP</li>
                <li className="mb-3">Modernized DR & HA setup using AWS-native tools</li>
                <li className="mb-3">Ensured secure, compliant, and scalable deployment</li>
                <li className="mb-3">Delivered quick consulting assistance for seamless migration</li>
                <li className="mb-3">Provided expert oversight for long-term maintainability and scalability</li>
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
                title: "Migration of SAP workloads to AWS Cloud", 
                desc: "" 
              },
              { 
                title: "Built a modern SAP monitoring platform on AWS", 
                desc: "" 
              },
              { 
                title: "Optimized SAP performance using AWS Lambda, Amazon S3, Amazon Glacier, Amazon CloudWatch, Amazon EBS", 
                desc: "" 
              },
              { 
                title: "Implemented cost-efficient data aggregation workflows", 
                desc: "" 
              },
              { 
                title: "Delivered real-time transactional insights via automated monitoring", 
                desc: "" 
              },
              { 
                title: "Streamlined IT landscape & improved user experience across applications", 
                desc: "" 
              },
              { 
                title: "Hosted SAP Disaster Recovery (DR) and High Availability (HA) on AWS", 
                desc: "" 
              },
              { 
                title: "Enabled scalable, secure, and low-maintenance cloud operations", 
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
              "AWS Lambda", 
              "Amazon S3", 
              "Amazon Glacier", 
              "Amazon CloudWatch", 
              "Amazon EBS",
              "Amazon EC2",
              "AWS-native SAP migration tools",
              "SAP ECC"
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
              { val: "40%", label: "Year-over-year growth achieved" },
              { val: "17%", label: "Expense reduction post-migration" },
              { val: "( %)", label: "Reduction in infrastructure maintenance costs" },
              { val: "( %)", label: "Improvement in SAP performance & system availability" },
              { val: "( x faster)", label: "Faster access to real-time data & monitoring" },
              { val: "( %)", label: "Reduction in TCO" },
              { val: "( %)", label: "Scalability improvement across SAP workloads" },
              { val: "( %)", label: "Downtime minimized with DR & HA on AWS" },
              { val: "( %)", label: "Increase in operational efficiency due to automation" },
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
            Move your SAP workloads to a secure, scalable, and high-performing AWS environment.
          </h2>
          <p className="lead text-muted mb-4">Partner with AeonX Digital for future-ready cloud transformation.</p>
          <button className="slide-button-light">
            Talk to an AWS Expert
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySix;