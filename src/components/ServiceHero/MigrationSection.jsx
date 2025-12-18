import React, { useState } from "react";
import "./MigrationSection.css";
import Implementation from "/images/implementation-service.png";
import CloudMigration from "/images/migration-services.png";
import Integration from "/images/integration-services.jpg";
import Innovation from "/images/innovation-services.png";
import Staffing from "/images/staffing-services.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { inView } from "framer-motion";

const MigrationSection = () => {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const sectionStyle = {
    backgroundColor: "",
    marginBottom: "1rem",
  };

  const sectionStyleAlt = {
    backgroundColor: "",
    padding: "0rem 0",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 15px",
  };

  const imgContainerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // minHeight: "200px",
    // padding: "10px",
    marginBottom: "1rem",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    maxHeight: "200px",
  };

  const h2Style = {
    background: "linear-gradient(90deg, #f97316 0%, #facc15 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    fontWeight: "700",
    marginBottom: "0.5rem",
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
  };

  const pStyle = {
    color: "#495057",
    lineHeight: "1.7",
    marginBottom: "1rem",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
  };

  const h5Style = {
    color: "#212529",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    fontWeight: "700",
    fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
  };

  const getMetricBoxStyle = (id, bgColor) => ({
    backgroundColor: bgColor,
    transition: "all 0.3s ease",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    transform: hoveredMetric === id ? "translateY(-5px)" : "translateY(0)",
    boxShadow:
      hoveredMetric === id
        ? "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
        : "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
  });

  const metricH2Style = {
    fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
    fontWeight: "600",
    fontFamily: "Gilroy-Bold",
    background: "linear-gradient(90deg, #f97316 0%, #facc15 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const metricPStyle = {
    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
    lineHeight: "1.4",
    color: "gray",
    fontWeight: "600",
    marginBottom: "0",
  };

  const contentColumnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  };

  return (
    <div className="container py-5" id="migration">

      <section style={sectionStyleAlt} id="implementation">
        <div style={containerStyle}>
          <div className="row d-flex flex-column-reverse flex-lg-row g-1 align-items-start mb-5">
            <div
              className="col-12 col-lg-6 order-2 order-md-1"
              style={contentColumnStyle}
            >
              <div>
                <h2 style={h2Style}>SAP Implementation Services</h2>
                <p style={pStyle}>
                  Business models are evolving faster than ever, and the real differentiator today is how quickly your systems can adapt. At AeonX Digital, we enable this shift by implementing SAP S/4HANA and SAP Rise as the digital backbone of your operations—making enterprises data-driven, future-ready, and operationally agile.
                </p>
                
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-md-2">
              <div className="mig-img" style={imgContainerStyle}>
                <img
                  src={Implementation}
                  alt="Integration Services"
                  style={imgStyle}
                />
              </div>
              {/* <h5 style={h5Style}>Key Metrics</h5> */}
              <div className="row g-1">
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("i1", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("i1")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={99} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      of projects delivered within agreed timelines
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("i2", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("i2")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={40} duration={2.5} /> : "0"}+</h2>
                    <p style={metricPStyle}>
                      Go-lives delivered earlier than planned
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("i3", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("i3")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={30} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      Reduction in overall implementation time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div className="row g-1 d-flex flex-column-reverse flex-lg-row align-items-start mb-5">
            <div className="col-12 col-lg-6 order-1 order-md-1">
              <div className="mig-img" style={imgContainerStyle}>
                <img
                  src={CloudMigration}
                  alt="Cloud Migration"
                  style={imgStyle}
                />
              </div>
              {/* <h5 style={h5Style}>Key Metrics</h5> */}
              <div className="row g-1">
                <div className="col-12 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("m1", "#ffffff")}
                    onMouseEnter={() => setHoveredMetric("m1")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={30} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      Decrease in infra & maintenance costs
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("m2", "#ffffff")}
                    onMouseEnter={() => setHoveredMetric("m2")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={10} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      Improvement in system performance
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("m3", "#ffffff")}
                    onMouseEnter={() => setHoveredMetric("m3")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={50} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      Automation achieved during migration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 order-2 order-md-2"
              style={contentColumnStyle}
            >
              <div>
                <h2 style={h2Style}>Migration Services</h2>
                <p style={pStyle}>
                  Migrating to the cloud should unlock potential, not just move
                  systems. We at AeonX deliver high-precision SAP migration
                  using real-world expertise across SAP ECC to S/4HANA
                  transitions, RISE with SAP adoption, and AWS-driven cloud
                  modernization.
                </p>
                <p style={pStyle}>
                  Instead of a standard "lift and shift" approach, we apply
                  proven migration frameworks that reduce risk, optimize
                  performance, and accelerate ROI. With AWS, the most adaptable
                  and enterprise-ready cloud platform, and our proprietary SAP
                  automation accelerators, your teams stay focused on
                  innovation, not manual workloads.
                </p>
                <p style={pStyle}>
                  Whether your goal is cost reduction, performance enhancement,
                  system consolidation, or full digital transformation, AeonX
                  ensures your SAP migration becomes a strategic upgrade, not a
                  technical exercise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section style={sectionStyleAlt} id="integration">
        <div style={containerStyle}>
          <div className="row d-flex flex-column-reverse flex-lg-row g-1 align-items-start mb-5">
            <div
              className="col-12 col-lg-6 order-2 order-md-1"
              style={contentColumnStyle}
            >
              <div>
                <h2 style={h2Style}>Integration Services</h2>
                <p style={pStyle}>
                  Seamless integration is the foundation of operational
                  intelligence. At AeonX Digital, we connect SAP with your wider
                  technology landscape to ensure data flows smoothly across
                  applications, teams, and processes. Whether integrating SAP
                  S/4HANA with legacy systems, cloud platforms, third-party
                  solutions, analytics tools, or custom applications, we help
                  build connected enterprises that make decisions faster and
                  operate smarter.
                </p>
                <p style={pStyle}>
                  Our experts specialize in API-based integration, SAP BTP, CPI
                  (Cloud Platform Integration), middleware orchestration, and
                  real-time data exchange, ensuring interoperability without
                  disrupting existing operations. From multi-system
                  consolidation to hybrid integration architectures, we deliver
                  fortified connections that drive agility, scalability, and
                  business continuity.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-md-2">
              <div className="mig-img" style={imgContainerStyle}>
                <img
                  src={Integration}
                  alt="Integration Services"
                  style={imgStyle}
                />
              </div>
              {/* <h5 style={h5Style}>Key Metrics</h5> */}
              <div className="row g-1">
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("i1", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("i1")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>90%</h2>
                    <p style={metricPStyle}>
                      Real-time data sync across 5 business-critical platforms
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("i2", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("i2")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>10%</h2>
                    <p style={metricPStyle}>
                      Manual Data handling Eliminated by
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("i3", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("i3")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>100%</h2>
                    <p style={metricPStyle}>
                      Faster rollouts than standard timelines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Services */}
      <section style={sectionStyle} id="innovation">
        <div style={containerStyle}>
          <div className="row g-1 d-flex flex-column-reverse flex-lg-row align-items-start mb-5">
            <div className="col-12 col-lg-6 order-1 order-md-1">
              <div className="mig-img" style={imgContainerStyle}>
                <img
                  src={Innovation}
                  alt="Innovation Services"
                  style={imgStyle}
                />
              </div>
              {/* <h5 style={h5Style}>Key Metrics</h5> */}
              <div className="row g-1">
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("in1", "#ffffff")}
                    onMouseEnter={() => setHoveredMetric("in1")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={30} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      functional adoption within 6 months of rollout
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("in2", "#ffffff")}
                    onMouseEnter={() => setHoveredMetric("in2")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={6} duration={2.5} /> : "0"}</h2>
                    <p style={metricPStyle}>
                      reusable frameworks deployed across operations and supply
                      chain
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("in3", "#ffffff")}
                    onMouseEnter={() => setHoveredMetric("in3")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={85} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      Improved data-led decision accuracy using real-time
                      analytics integration
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 order-2 order-md-2"
              style={contentColumnStyle}
            >
              <div>
                <h2 style={h2Style}>Innovation Services</h2>
                <p style={pStyle}>
                  We collaborate with enterprises to design custom-built digital
                  solutions that solve real operational challenges and open new
                  growth channels.
                </p>
                <p style={pStyle}>
                  Our teams continuously track emerging tech trends across AI,
                  automation, SAP BTP, data engineering, and industry-specific
                  platforms, crafting solutions that are scalable, efficient,
                  and future-ready. We believe in co-innovation, where ideas
                  move from prototype to production rapidly, delivering
                  measurable business impact.
                </p>
                <p style={pStyle}>
                  Each solution is engineered around specific challenges in
                  operations, compliance, manufacturing, logistics, procurement,
                  dealer networks, and travel management, helping enterprises
                  transform digitally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="staffing-services" style={sectionStyleAlt} id="staffing">
        <div style={containerStyle}>
          <div className="row g-1 d-flex flex-column-reverse flex-lg-row align-items-start mb-5">
            <div
              className="col-12 col-lg-6 order-2 order-md-1"
              style={contentColumnStyle}
            >
              <div>
                <h2 style={h2Style}>Staffing Services</h2>
                <p style={pStyle}>
                  We help businesses meet staffing requirements through
                  specialized SAP staffing services, giving you access to
                  certified consultants with strong domain knowledge, technical
                  depth and hands-on implementation experience. Our flexible
                  staffing models support both short-term project needs and
                  long-term strategic initiatives, helping you reduce risk,
                  accelerate delivery, and maximize ROI on SAP investments.
                </p>
                <p style={pStyle}>
                  Our consultants blend industry expertise with best-practice
                  methodologies and the latest SAP technologies, helping you
                  manage demanding workloads, deliver critical projects, and
                  scale effectively without compromising quality.
                </p>
              </div>
            </div>
            <div className="col-12  col-lg-6 order-1 order-md-2">
              <div>
                <div className="mig-img" style={imgContainerStyle}>
                  <img
                    src={Staffing}
                    alt="Staffing Services"
                    style={imgStyle}
                  />
                </div>
                {/* <h5 style={h5Style}>Key Metrics</h5> */}
              </div>

              <div className="row g-1">
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("s1", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("s1")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={30} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      reduction in time to deploy talent
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("s2", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("s2")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={6} duration={2.5} /> : "0"}</h2>
                    <p style={metricPStyle}>
                      Reduction in overheads, training expense and retention
                      cost
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <div
                    className="text-center border rounded-3 p-3 h-100"
                    style={getMetricBoxStyle("s3", "#f8f9fa")}
                    onMouseEnter={() => setHoveredMetric("s3")}
                    onMouseLeave={() => setHoveredMetric(null)}
                  >
                    <h2 style={metricH2Style}>{inView ? <CountUp end={90} duration={2.5} /> : "0"}%</h2>
                    <p style={metricPStyle}>
                      alignment to technical & domain requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MigrationSection;
