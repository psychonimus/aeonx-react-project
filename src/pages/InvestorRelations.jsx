import React, { useState } from "react";
import {Helmet} from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";


const InvestorRelations = () => {
  const [activeTab, setActiveTab] = useState("auunalReport");
  const [activePeriod, setActivePeriod] = useState("yearly");

  const tabs = [
    { id: "auunalReport", label: "Auunal Report" },
    { id: "financialInformation", label: "Financial Information" },
    
  ];

  const pdfData = {
    auunalReport: {
      yearly: [
        { name: "AEONX-ANNUAL-REPORT-2023-24-final_compressed", file: "/investors/financial-highlights/annual-report/AEONX-ANNUAL-REPORT-2023-24-final_compressed.pdf" },
        { name: "Annual-Report-2024-2025", file: "/investors/financial-highlights/annual-report/Annual-Report-2024-2025.pdf" },
      ],
      quarterly: [
        
      ]
    },
    financialInformation: {
      yearly: [
        { name: "BSE-Financial-Results-30.09.2024_compressed", file: "/investors/financial-highlights/financial-information/BSE-Financial-Results-30.09.2024_compressed.pdf" },
        { name: "BSE-Financial-Results-31.12.2024_1_11zon", file: "/investors/financial-highlights/financial-information/BSE-Financial-Results-31.12.2024_1_11zon.pdf" },
        { name: "BSE-Financial-Results-31.12.2024_11zon", file: "/investors/financial-highlights/financial-information/BSE-Financial-Results-31.12.2024_11zon.pdf" },
        { name: "BSE-Newspaper-Publication_compressed_compressed_compressed_11zon", file: "/investors/financial-highlights/financial-information/BSE-Newspaper-Publication_compressed_compressed_compressed_11zon.pdf" },
        { name: "BSE-Newspaper-Publication-31.12.2024_11zon", file: "/investors/financial-highlights/financial-information/BSE-Newspaper-Publication-31.12.2024_11zon.pdf" },
        { name: "BSE-Results-31.03.2025_compressed", file: "/investors/financial-highlights/financial-information/BSE-Results-31.03.2025_compressed.pdf" },
        { name: "BSE-UFR-30.06.2025-1", file: "/investors/financial-highlights/financial-information/BSE-UFR-30.06.2025-1.pdf" },
      ],
      quarterly: [
        
      ]
    },
    
  };

  return (


    <>
      <Helmet>
        <title>Investor Relations - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry." />
        <meta name="keywords" content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="life-hero investor-hero"  >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="life-hero-content text-center d-flex flex-column justify-content-center  h-100">
                <p className="eyebrow">Investor Section</p>
                <h1 className="mb-2">
                  Investing in the Future of Digital Transformation
                </h1>
                <p className="mb-4">We are shaping the next era of cloud-powered enterprises, backed by a strong foundation of technology expertise, leadership, and measurable outcomes. Our investor relations framework reflects our commitment to growth, accountability, and value creation across global markets.</p>

                <div className="event-hero-buttons d-flex justify-content-center">
                  <GlassButton
                    title="Investor Contact"
                    icon={() => <IoIosArrowDropdownCircle size={30} />}
                  />

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="investor-container mb-5">
        {/* <h1 className="ir-title">Investor Relations</h1>
        <p className="ir-sub">
          Transparent Communication For Our Stakeholders & Shareholders
        </p> */}

        <Header
          headline="Investor Relations"
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

export default InvestorRelations;
