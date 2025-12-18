import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import ITDCaseStudy from "/images/Modernizing-ITD-Cementation’s-SAP.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <>
      <Helmet>
        <title>ITD Cementation Case Study - Modernizing SAP with RISE | AeonX Digital</title>
        <meta name="description" content="Discover how AeonX helped ITD Cementation migrate from SAP S/4HANA 1709 to RISE with SAP, achieving enhanced system reliability and cloud scalability." />
        <meta name="keywords" content="ITD Cementation, RISE with SAP, SAP migration, AWS Cloud, SAP S/4HANA, digital transformation, case study, AeonX" />
      </Helmet>

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
                  className="display-3 fw-bold mb-4 case-study-title"
                  style={{ fontFamily: "Gilroy-Bold", lineHeight: "1.1" }}
                >
                  Modernizing ITD Cementation's SAP Landscape with <span style={{ color: "#f97316" }}>RISE with SAP</span>
                </h1>
                <p className="lead mb-5 case-study-lead" style={{ opacity: 0.9, fontWeight: 300 }}>
                  In recent years, ITD Cementation India Private Limited has received several awards for their excellent work, including the "Best Infrastructure Company" award from CNBC TV18 and the "Outstanding Concrete Structure Award" from the Indian Concrete Institute.
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
                  src={ITDCaseStudy}
                  alt="ITD Cementation Case Study"
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
                  <h2 className="mb-4 section-heading" style={{ fontFamily: "Gilroy-Bold" }}>
                    Executive Summary
                  </h2>
                </div>
                <p className="lead text-muted text-center case-study-text">
                  Overall, ITD Cementation India Private Limited is a reputable and reliable construction company that is well-equipped to handle a wide range of construction projects with a commitment to safety, sustainability, and innovation.
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
                <h2 className="mb-4 section-heading" style={{ fontFamily: "Gilroy-Bold" }}>Overview</h2>
                <p className="text-muted case-study-text">
                  ITD Cementation Ltd. aimed to migrate their SAP S/4HANA 1709 system to RISE with SAP while ensuring system readiness, safeguarding backups in the landing zone, and maintaining seamless connectivity with non SAP workloads. The company also needed to migrate additional systems to AWS Cloud, requiring meticulous planning to prevent operational disruption.
                </p>
                <p className="text-muted case-study-text">
                  During the Lift and Shift migration, the team anticipated encountering bugs and issues that required prompt resolution. Post-migration, extensive testing was essential to ensure system stability. AeonX supported ITD Cementation Ltd. throughout the process, performing unit testing, assisting with integration testing and UAT, and ensuring a successful transition.
                </p>
              </div>
              <div className="col-lg-6" ref={addToRefs}>
                <div
                  className="p-5 h-100 rounded-4 text-white case-study-challenge"
                  style={{

                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="mb-4 challenge-heading" style={{ fontFamily: "Gilroy-Bold", color: "#f97316" }}>The Challenge</h3>
                  <ul className="list-unstyled">
                    {[
                      "Ensuring source system readiness for migration",
                      "Safe storage and transfer of system backups",
                      "Migrating additional systems to AWS Cloud",
                      "Maintaining critical connectivity between SAP and non SAP workloads",
                      "Managing bugs and issues during Lift and Shift",
                      "Conducting thorough post-migration testing",
                      "Preventing business disruption during the transition",
                    ].map((item, i) => (
                      <li key={i} className="mb-3 d-flex align-items-start">
                        <FaCheckCircle className="me-3 mt-1" style={{ color: "#f97316", minWidth: "20px" }} />
                        <span className="challenge-text" style={{ fontSize: "1.1rem" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY AEONX ================= */}
        <section className="py-5" style={{ background: "#f8f9fa" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-10 mx-auto" ref={addToRefs}>
                <h2 className="mb-4 text-center section-heading" style={{ fontFamily: "Gilroy-Bold" }}>
                  Why ITD Cementation Chose AeonX
                </h2>
                <p className="text-muted mb-4 case-study-text">
                  ITD Cementation Ltd. chose AeonX for their unique approach to RISE with SAP migration. AeonX leverages highly automated RISE with SAP Labs, enabling customers to quickly experience their SAP ERP datasets on the latest live version of RISE with SAP on Cloud, identifying remediation and complexity upfront.
                </p>
                <p className="text-muted case-study-text">
                  Additionally, AeonX follows an established 6R migration strategy (Rehost, Replatform, Repurchase, Refactor, Retire and Retain) to create a holistic Cloud journey that maximizes the commercial benefits of RISE with SAP. Their capability to deliver tailored, high-quality solutions made AeonX the preferred migration partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="text-center mb-5" ref={addToRefs}>
              <h2 className="section-heading" style={{ fontFamily: "Gilroy-Bold" }}>Our Approach</h2>
              <p className="text-muted case-study-subheading">A strategic roadmap to digital transformation</p>
            </div>

            <div className="row g-4">
              {[
                {
                  step: "01",
                  title: "Discovery & Audit",
                  desc: "Validated the target system and architecture on RISE with SAP, assessed source system, and ensured readiness for migration."
                },
                {
                  step: "02",
                  title: "Process Re-engineering",
                  desc: "Adjusted interface and peripheral system connectivity and mapped the solution using the 6R migration strategy."
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Transferred and restored backups from on-premise to RISE with SAP, migrated SAP and non SAP workloads, and deployed SAP workloads in a hybrid model."
                },
                {
                  step: "04",
                  title: "Optimization",
                  desc: "Performed thorough testing and validation including unit testing, integration testing, and UAT to ensure smooth functionality."
                },
              ].map((item, i) => (
                <div className="col-md-6 col-lg-3" key={i} ref={addToRefs}>
                  <div
                    className="p-4 h-100 border rounded-4 position-relative overflow-hidden approach-card-hover"
                    style={{ transition: "all 0.3s ease", background: "#fff" }}
                  >
                    <span
                      className="step-number"
                      style={{
                        fontWeight: "bold",
                        color: "rgba(249, 115, 22, 0.1)",
                        position: "absolute",
                        top: "-10px",
                        right: "10px",
                      }}
                    >
                      {item.step}
                    </span>
                    <h4 className="mt-3 mb-3 approach-title" style={{ fontFamily: "Gilroy-Bold" }}>{item.title}</h4>
                    <p className="text-muted small approach-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS DELIVERED ================= */}
        <section className="py-5 text-white case-study-sol-del">
          <div className="container py-5">
            <h2 className="mb-5 text-center section-heading" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold" }}>
              Solutions Delivered
            </h2>
            <div className="row g-4">
              {[
                {
                  title: "Migration from SAP S/4HANA 1709 to RISE with SAP",
                  desc: ""
                },
                {
                  title: "Backup validation and restoration on RISE with SAP",
                  desc: ""
                },
                {
                  title: "Hybrid deployment model (S/4HANA in RISE, EP on one platform, BW and DMS on AWS)",
                  desc: ""
                },
                {
                  title: "Interface and peripheral connectivity adjustments",
                  desc: ""
                },
                {
                  title: "Comprehensive testing and validation",
                  desc: ""
                },
                {
                  title: "Completion within project timeline of 2.5 months",
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
                      }}
                    >
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h4 className="sol-title" style={{ fontFamily: "Gilroy-Bold" }}>{sol.title}</h4>
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
                "SAP S/4HANA",
                "RISE with SAP",
                "AWS Cloud",
                "6R Migration Framework",
                "Automation Tools"
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
            <h2 className="text-center text-white mb-5 section-heading" ref={addToRefs} style={{ fontFamily: "Gilroy-Bold" }}>
              Business Impact
            </h2>
            <div className="row text-center g-4">
              {[
                { val: "X", label: "Improvement in System Reliability" },
                { val: "X", label: "Reduction in Migration Downtime" },
                { val: "X", label: "Faster Access to Latest SAP Capabilities" },
                { val: "X", label: "Enhanced Cloud Scalability & Performance" },
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
            <h2 className="mb-3 section-heading" style={{ fontFamily: "Gilroy-Bold" }}>
              Want similar results?
            </h2>
            <p className="lead text-muted mb-4">Let's transform your business with smart digital solutions.</p>
            <Link to="/contact">
              <button className="slide-button-light">
                Talk to an Expert
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyOne;