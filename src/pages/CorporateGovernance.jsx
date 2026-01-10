import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";
import DownloadList from "../components/DownloadList/DownloadList";
import { ArrowBigDownDash, LayoutGrid } from "lucide-react";


const CorporateGovernance = () => {
  const [activeTab, setActiveTab] = useState("complianceReport");
  const [activePeriod, setActivePeriod] = useState("yearly");
  const [activeYear, setActiveYear] = useState("All");

  const tabs = [
    { id: "complianceReport", label: "Compliance Report on Corporate Governance" },



  ];

  const years = ["All", "2025", "2024", "2023"];

  const pdfData = {
    complianceReport: {
      yearly: [
        { name: "Company General Information and Compliance Disclosures", file: "/investors/corporate-governance/Yearly/Company General Information and Compliance Disclosures.pdf", year: "2025" },
        { name: "Corporate Governance Half Yearly Compliance September 2024", file: "/investors/corporate-governance/Yearly/Corporate Governance Half Yearly Compliance September 2024.pdf", year: "2024" },
        { name: "Corporate Governance Report March 2024", file: "/investors/corporate-governance/Yearly/Corporate Governance Report March 2024.pdf", year: "2024" },
        { name: "Corporate Governance Report September 2024", file: "/investors/corporate-governance/Yearly/Corporate Governance Report September 2024.pdf", year: "2024" },
        { name: "Integrated Governance & Compliance Report – FY 2024–25", file: "/investors/corporate-governance/Yearly/Integrated Governance & Compliance Report – FY 2024–25.pdf", year: "2024" },

      ],
      quarterly: [
        { name: "Compliance Report December 2024", file: "/investors/corporate-governance/Quarterly/Compliance Report December 2024.pdf", year: "2024" },
        { name: "Corporate Governance Disclosure Q3", file: "/investors/corporate-governance/Quarterly/Corporate Governance Disclosure Q3.pdf", year: "2024" },
        { name: "Corporate Governance Report – Q1 FY 2024–25", file: "/investors/corporate-governance/Quarterly/Corporate Governance Report – Q1 FY 2024–25.pdf", year: "2024" },
        { name: "Corporate Governance Report – Q3 FY 2024–25", file: "/investors/corporate-governance/Quarterly/Corporate Governance Report – Q3 FY 2024–25.pdf", year: "2024" },
        { name: "Corporate Governance Report June 2024", file: "/investors/corporate-governance/Quarterly/Corporate Governance Report June 2024.pdf", year: "2024" },
      ]
    },


  };

  const filteredData = pdfData[activeTab][activePeriod]?.filter(item =>
    activeYear === "All" || item.year === activeYear
  ) || [];

  return (


    <>
      <Helmet>
        <title>Shareholder Information - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry." />
        <meta name="keywords" content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>



      <section className="investor-container mb-5" style={{ marginTop: "5rem" }}>
        {/* <h1 className="ir-title">Investor Relations</h1>
        <p className="ir-sub">
          Transparent Communication For Our Stakeholders & Shareholders
        </p> */}

        <Header
          highlight="Corporate Governance"
          headline="Transparent Communication For Our Stakeholders & Shareholders"
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

        {/* Year Filter Tabs */}
        <div className="period-tabs mt-3">
          {years.map((year) => (
            <button
              key={year}
              className={`period-tab ${activeYear === year ? "active" : ""}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
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
          <div className="flex-grow-1" style={{ flex: 1 }}>
            {filteredData.length > 0 ? (
              <DownloadList
                title="Financial"
                subtitle="Documents"
                categories={filteredData.map((item, index) => ({
                  id: index,
                  title: item.name,
                  // subtitle: 'PDF Document',
                  onClick: () => window.open(item.file, '_blank'),
                  icon: <ArrowBigDownDash className="w-8 h-8" />,
                  featured: false
                }))}
                headerIcon={<LayoutGrid className="w-8 h-8" />}
                className="bg-white rounded-4 shadow-sm"
              />
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100 p-5 bg-white rounded-4 shadow-sm">
                <p className="text-muted fs-5 m-0">No documents available for this selection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateGovernance;
