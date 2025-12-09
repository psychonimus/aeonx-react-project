import React, { useState } from "react";
import {Helmet} from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";


const CorporateGovernance = () => {
  const [activeTab, setActiveTab] = useState("complianceReport");
  const [activePeriod, setActivePeriod] = useState("yearly");

  const tabs = [
    { id: "complianceReport", label: "Compliance Report on Corporate Governance" },
    
    
    
  ];

  const pdfData = {
    complianceReport: {
      yearly: [
        { name: "ADTL-Integrated-Governance-31.03.2025", file: "/investors/corporate-governance/compliance-report-on-corporate-governance/ADTL-Integrated-Governance-31.03.2025.pdf" },
        { name: "Corporate-Governance-31.03.2024", file: "/investors/corporate-governance/compliance-report-on-corporate-governance/Corporate-Governance-31.03.2024.pdf" },
        { name: "Corporate-Governance-30062024", file: "/investors/corporate-governance/compliance-report-on-corporate-governance/Corporate-Governance-30062024.pdf" },
        { name: "Corporate-Governance-30092024", file: "/investors/corporate-governance/compliance-report-on-corporate-governance/Corporate-Governance-30092024.pdf" },
        { name: "Corporate-Governance-December-2024", file: "/investors/corporate-governance/compliance-report-on-corporate-governance/Corporate-Governance-December-2024.pdf" },
        
      ],
      quarterly: [
        
      ]
    },
    
    
  };

  return (


    <>
      <Helmet>
        <title>Shareholder Information - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry." />
        <meta name="keywords" content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>

      

      <section className="investor-container mb-5" style={{marginTop:"5rem"}}>
        {/* <h1 className="ir-title">Investor Relations</h1>
        <p className="ir-sub">
          Transparent Communication For Our Stakeholders & Shareholders
        </p> */}

        <Header
          headline="Corporate Governance"
          desc="Transparent Communication For Our Stakeholders & Shareholders"
        />

        {/* Period Filter Tabs */}
        <div className="period-tabs">
          <button
            className={`period-tab ${activePeriod === "yearly" ? "active" : ""}`}
            onClick={() => setActivePeriod("yearly")}
          >
            Yearly
          </button>
          <button
            className={`period-tab ${activePeriod === "quarterly" ? "active" : ""}`}
            onClick={() => setActivePeriod("quarterly")}
          >
            Quarterly
          </button>
        </div>

        <div className="ir-wrapper">
          {/* Left Side Tabs */}
          <div className="ir-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "ir-tab active" : "ir-tab"}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Side PDF List */}
          <div className="ir-content">
            {pdfData[activeTab][activePeriod]?.length > 0 ? (
              pdfData[activeTab][activePeriod].map((item, i) => (
                <a target="_blank" href={item.file} key={i} className="ir-link">
                  <span>{item.name}</span>
                  <button className="ir-download-btn">Download ⬇</button>
                </a>
              ))
            ) : (
              <p className="text-center text-muted mt-3">No documents available for this period.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateGovernance;
