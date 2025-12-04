import React, { useState } from "react";
import {Helmet} from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";


const InvestorRelations = () => {
  const [activeTab, setActiveTab] = useState("postal");
  const [activePeriod, setActivePeriod] = useState("yearly");

  const tabs = [
    { id: "postal", label: "Postal Ballot & Forms" },
    { id: "shareholding", label: "Shareholding Pattern" },
    { id: "dividend", label: "Unclaimed / Unpaid Dividend" },
    { id: "transfer", label: "Shares Transferred to IEPF" },
  ];

  const pdfData = {
    postal: {
      yearly: [
        { name: "Postal Ballot Notice 2025", file: "/pdfs/postal-notice-2025.pdf" },
        { name: "Scrutinizer Report", file: "/pdfs/scrutinizer.pdf" },
      ],
      quarterly: [
        { name: "Annexure V-CS Certificate", file: "/pdfs/annexure-v.pdf" },
        { name: "Postal Ballot – Form", file: "/pdfs/ballot-form.pdf" },
      ]
    },
    shareholding: {
      yearly: [
        { name: "Shareholding Summary 2024", file: "/pdfs/shareholding-2024.pdf" },
      ],
      quarterly: [
        { name: "Quarterly Holdings Report", file: "/pdfs/quarterly-holding.pdf" },
      ]
    },
    dividend: {
      yearly: [
        { name: "Unclaimed Dividend 2023", file: "/pdfs/dividend-2023.pdf" },
      ],
      quarterly: [
        { name: "Unpaid Dividend Summary", file: "/pdfs/unpaid-summary.pdf" },
      ]
    },
    transfer: {
      yearly: [
        { name: "IEPF Transfer List 2023", file: "/pdfs/iepf-transfer-2023.pdf" },
      ],
      quarterly: [
        { name: "Claim Form – IEPF5", file: "/pdfs/iepf5.pdf" },
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
      <section className="life-hero investor-hero" style={{ height: "100vh" }} >
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


      <section className="investor-container">
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
                <a href={item.file} download key={i} className="ir-link">
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
