import React, { useState } from "react";
import {Helmet} from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";


const OtherDocuments = () => {
  const [activeTab, setActiveTab] = useState("otherDocuments");
  const [activePeriod, setActivePeriod] = useState("yearly");

  const tabs = [
    { id: "otherDocuments", label: "Other Documents" },
    
    
    
  ];

  const pdfData = {
    otherDocuments: {
      yearly: [
        { name: "Aeonx-Financial-FY-2023-24-1", file: "/investors/other-documents/other-documents/Aeonx-Financial-FY-2023-24-1.pdf" },
        { name: "BSE-Intimation-Hina-Shah-Completion-of-2nd-Term", file: "/investors/other-documents/other-documents/BSE-Intimation-Hina-Shah-Completion-of-2nd-Term.pdf" },
        { name: "BSE-Intimation-Manoj-Ganatra-Completion-of-2nd-Term", file: "/investors/other-documents/other-documents/BSE-Intimation-Manoj-Ganatra-Completion-of-2nd-Term.pdf" },
        { name: "BSE-SEBI-Advisory-Letter-Change-of-Name", file: "/investors/other-documents/other-documents/BSE-SEBI-Advisory-Letter-Change-of-Name.pdf" },
        { name: "Form_MGT_7_ADTL_2024_11zon", file: "/investors/other-documents/other-documents/Form_MGT_7_ADTL_2024_11zon.pdf" },
        
        
      ],
      quarterly: [
        
      ]
    },
    
    
  };

  return (


    <>
      <Helmet>
        <title>Other Documents - Aeonx Digital</title>
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
          headline="Other Documents"
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

export default OtherDocuments;
