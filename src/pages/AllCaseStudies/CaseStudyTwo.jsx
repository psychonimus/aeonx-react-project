import React, { useRef } from "react";
import RaymondCaseStudy from "/images/Unifying-Raymond.webp"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CaseStudyTwo = () => {
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
              
              <h1
                className="display-3 fw-bold mb-4"
                style={{ fontFamily: "Gilroy-Bold", lineHeight: "1.1" }}
              >
                Raymond Engineering SBU: Unifying Operations with <span style={{ color: "#f97316" }}>SAP S/4HANA RISE</span> for a Smarter, Scalable Future
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.9, fontWeight: 300 }}>
                Raymond Limited (Engineering SBU) the precision engineering arm of the Raymond Group, unified three diverse verticals (Automobile, Aerospace, Tools & Hardware) into one intelligent digital core. By consolidating two SAP ECC systems and one non-SAP system onto SAP S/4HANA RISE, the organization established a future-ready, scalable platform that harmonizes processes, boosts efficiency, and accelerates decision-making.
              </p>
              <button className="slide-button" onClick={() => window.scrollTo({ top: document.getElementById("executive-summary").offsetTop, behavior: "smooth" })}>
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
                src={RaymondCaseStudy}
                alt="Raymond Engineering Case Study"
                className="img-fluid position-relative"
                style={{ zIndex: 1, borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXECUTIVE SUMMARY ================= */}
      <section id="executive-summary" className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <div className="text-center mb-5">
                <h2 className="mb-4" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
                  Executive Summary
                </h2>
              </div>
              <p className="lead text-muted text-center">
                Raymond Limited (Engineering SBU) the precision engineering arm of the Raymond Group,  unified three diverse verticals (Automobile, Aerospace, Tools & Hardware) into one intelligent digital core. By consolidating two SAP ECC systems and one non-SAP system onto SAP S/4HANA RISE, the organization established a future-ready, scalable platform that harmonizes processes, boosts efficiency, and accelerates decision-making.
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
              <h2 className="mb-4" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>Customer Challenge</h2>
              <p className="text-muted">
                Raymond Engineering SBU needed to merge three independent business verticals into a single unified ecosystem.
              </p>
              <p className="text-muted">
                The goal was clear: build one digital foundation for efficiency, accuracy, and innovation.
              </p>
            </div>
            <div className="col-lg-6" ref={addToRefs}>
              <div
                className="p-5 h-100 rounded-4 text-white case-study-challenge"
                style={{
                  
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className="mb-4" style={{ fontFamily: "Gilroy-Bold", color: "#f97316" }}>Challenges included:</h3>
                <ul className="list-unstyled">
                  {[
                    "Migrating from 3 different legacy systems (2 SAP ECC + 1 non-SAP)",
                    "Harmonizing complex master data",
                    "Standardizing business processes across divisions",
                    "Driving change management for users new to SAP Fiori, Joule, and Business AI",
                    "Ensuring minimal disruption during a business-critical transformation",
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

      {/* ================= WHY SAP ================= */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <h2 className="mb-4 text-center" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
                Why SAP?
              </h2>
              <p className="text-muted mb-4">
                SAP S/4HANA RISE enabled Raymond to:
              </p>
              <ul className="text-muted">
                <li className="mb-2">Adopt clean-core, industry-aligned best practices</li>
                <li className="mb-2">Consolidate operations across all divisions</li>
                <li className="mb-2">Bring embedded analytics, predictive insights & AI-driven workflows</li>
                <li className="mb-2">Create a single source of truth for reporting and performance visibility</li>
                <li className="mb-2">Simplify user experience through Fiori apps and guided processes</li>
              </ul>
              <p className="text-muted mt-4">
                SAP's intelligent enterprise capabilities made it the natural fit for large-scale transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY AEONX ================= */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <h2 className="mb-4 text-center" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
                Why AeonX Digital?
              </h2>
              <p className="text-muted mb-4">
                Raymond chose AeonX Digital for their:
              </p>
              <ul className="text-muted">
                <li className="mb-2">Expertise in SAP S/4HANA RISE transformations</li>
                <li className="mb-2">Deep experience in multi-division consolidations</li>
                <li className="mb-2">Strong command of SAP Activate and clean-core design</li>
                <li className="mb-2">Proven data migration success across heterogeneous systems</li>
                <li className="mb-2">Capability to drive user adoption with structured change management</li>
                <li className="mb-2">Ability to blend SAP standards with smart customizations</li>
              </ul>
              <p className="text-muted mt-4">
                AeonX's strategic approach helped Raymond achieve transformation at scale with speed and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="text-center mb-5" ref={addToRefs}>
            <h2 style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>AeonX Solution</h2>
            <p className="text-muted">AeonX delivered a future-ready, intelligent enterprise backbone through:</p>
          </div>

          <div className="row g-4">
            {[
              { 
                step: "01", 
                title: "Unified Core Platform", 
                desc: "Consolidation of 3 business verticals into a single SAP S/4HANA RISE platform. Clean-core aligned processes built through SAP Activate workshops" 
              },
              { 
                step: "02", 
                title: "Harmonized Master Data", 
                desc: "Cleansed, standardized & enriched data from multiple systems. Single unified repository enabling consistent analytics" 
              },
              { 
                step: "03", 
                title: "Smart Automation & Enhancements", 
                desc: "Automated invoicing using pegging elements. System-driven 'Bill-to / Ship-to' mapping. Automated MRP across international warehouses. Optimized UOM logic & batch classification" 
              },
              { 
                step: "04", 
                title: "Intelligent User Experience", 
                desc: "Adoption of SAP Fiori, Joule & Business AI. Gamified training and change management. Guided, predictive workflows" 
              },
              { 
                step: "05", 
                title: "Embedded Analytics & Reporting", 
                desc: "Real-time dashboards for sales, inventory, plant operations. Consolidated reporting structure for strategic reviews" 
              },
            ].map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i} ref={addToRefs}>
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

      {/* ================= OUTCOME ================= */}
      <section className="py-5 text-white case-study-sol-del " >
        <div className="container py-5">
          <h2 className="mb-5 text-center" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Outcome of Project
          </h2>
          <p className="text-center text-white-50 mb-5" ref={addToRefs}>The transformation delivered clear and measurable impact:</p>
          <div className="row g-4">
            {[
              { 
                title: "70% reduction in transaction turnaround time (TAT)", 
                desc: "" 
              },
              { 
                title: "30% reduction in reporting effort", 
                desc: "" 
              },
              { 
                title: "25% improvement in user efficiency", 
                desc: "" 
              },
              { 
                title: "100% data consistency through harmonized master data", 
                desc: "" 
              },
              { 
                title: "Automated invoicing with zero errors", 
                desc: "" 
              },
              { 
                title: "Cross-vertical consolidated reporting enabling faster business reviews", 
                desc: "" 
              },
              { 
                title: "Real-time visibility into orders, stock, performance & invoices", 
                desc: "" 
              },
              { 
                title: "Scalable architecture for future multi-country rollouts", 
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
          <p className="text-center text-white mt-5 lead" ref={addToRefs}>Raymond now operates on one intelligent platform, fast, accurate, and insight-driven.</p>
        </div>
      </section>

      {/* ================= TCO ================= */}
      <section className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 mx-auto" ref={addToRefs}>
              <h2 className="mb-4 text-center" style={{ fontFamily: "Gilroy-Bold", fontSize: "2.5rem" }}>
                TCO
              </h2>
              <p className="text-muted mb-4">
                Adopting a full serverless, standardized clean-core model significantly reduced:
              </p>
              <ul className="text-muted">
                <li className="mb-2">Infrastructure management costs</li>
                <li className="mb-2">Manual effort & rework</li>
                <li className="mb-2">Dependency on high customization</li>
                <li className="mb-2">Training and onboarding overhead</li>
              </ul>
              <p className="text-muted mt-4">
                A unified S/4HANA RISE platform greatly optimized long-term total cost of ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-5 bg-light">
          <div className="container py-5 text-center">
            <h2 className="mb-5 section-heading" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold" }}>Technology Stack</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3" ref={addToRefs}>
              {[
                "SAP S/4HANA RISE", 
              "SAP Fiori + Joule + Business AI", 
              "Embedded Analytics", 
              "Automated MRP & pegging logic", 
              "Unified Master Data Repository",
              "Clean-core aligned processes",
              "Integration with export warehouses & planning board"
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
      <section className="py-5 position-relative overflow-hidden case-study-nums" >
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <h2 className="text-center text-white mb-5" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold", fontSize: "3rem" }}>
            Business Impact
          </h2>
          <div className="row text-center g-4">
            {[
              { val: "40%", label: "Reduction in TAT" },
              { val: "45%", label: "Reduction in Reporting Effort" },
              { val: "20%", label: "Improvement in User Efficiency" },
              { val: "95%", label: "Data Consistency" },
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
            Ready to unify your enterprise on one intelligent digital core?
          </h2>
          <p className="lead text-muted mb-4">Let's build your SAP transformation faster, cleaner, and smarter.</p>
          <Link to="/contact">
            <button className="slide-button-light">
              Speak to Our SAP Experts →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyTwo;