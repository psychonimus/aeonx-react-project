import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";
import DownloadList from "../components/DownloadList/DownloadList";
import { ArrowBigDownDash, LayoutGrid } from "lucide-react";


const CodeAndPolicy = () => {
  const [activeTab, setActiveTab] = useState("codeOfConduct");
  const [activePeriod, setActivePeriod] = useState("yearly");
  const [activeYear, setActiveYear] = useState("All");

  const tabs = [
    { id: "codeOfConduct", label: "Code of Conduct" },
    { id: "policies", label: "Policies" },



  ];

  const years = ["All", "2025", "2024", "2023"];

  const pdfData = {
    codeOfConduct: {
      yearly: [
        { name: "Addendum to Code of Business Conduct and Ethics", file: "/investors/code-and-policy/Code-of-conduct/Addendum to Code of Business Conduct and Ethics.pdf", year: "All" },
        { name: "Code of Business Conduct and Ethics", file: "/investors/code-and-policy/Code-of-conduct/Code of Business Conduct and Ethics.pdf", year: "All" },
      ],
      quarterly: [

      ]
    },
    policies: {
      yearly: [
        { name: "Code of Practices and Procedures for Fair Disclosures of Unpublished Price Sensitive Information", file: "/investors/code-and-policy/policies/Code of Practices and Procedures for Fair Disclosures of Unpublished Price Sensitive Information.pdf", year: "All" },
        { name: "Corporate-Social-Responsibilty-Policy-ADTL", file: "/investors/code-and-policy/policies/Corporate-Social-Responsibilty-Policy-ADTL.pdf", year: "All" },
        { name: "Familiarisation Programme for Independent Directors", file: "/investors/code-and-policy/policies/Familiarisation Programme for Independent Directors.pdf", year: "All" },
        { name: "Nomination and Remuneration Policy", file: "/investors/code-and-policy/policies/Nomination and Remuneration Policy.pdf", year: "All" },
        { name: "Policy for Determining Material Subsidiaries", file: "/investors/code-and-policy/policies/Policy for Determining Material Subsidiaries.pdf", year: "All" },
        { name: "Policy on Determination of Material Events or Information", file: "/investors/code-and-policy/policies/Policy on Determination of Material Events or Information.pdf", year: "All" },
        { name: "Policy on Related Party Transactions", file: "/investors/code-and-policy/policies/Policy on Related Party Transactions.pdf", year: "All" },
        { name: "Vigil Mechanism  Whistle Blower Policy", file: "/investors/code-and-policy/policies/Vigil Mechanism  Whistle Blower Policy.pdf", year: "All" },

      ],
      quarterly: [

      ]
    },


  };

  const filteredData = pdfData[activeTab][activePeriod]?.filter(item =>
    activeYear === "All" || item.year === activeYear
  ) || [];

  return (


    <>
      <Helmet>
        <title>Code and Policy - Aeonx Digital</title>
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
          highlight="Code and Policy"
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

export default CodeAndPolicy;
