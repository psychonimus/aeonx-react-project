import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";
import DownloadList from "../components/DownloadList/DownloadList";
import { ArrowBigDownDash, LayoutGrid } from "lucide-react";


const ShareholderInformation = () => {
  const [activeTab, setActiveTab] = useState("postal");
  const [activePeriod, setActivePeriod] = useState("yearly");
  const [activeYear, setActiveYear] = useState("All");

  const tabs = [
    { id: "postal", label: "Postal Ballot - Notice & Form" },
    { id: "shareholding", label: "Shareholding Pattern" },
    { id: "unclaimed", label: "Unclaimed and Unpaid Dividend Amount" },
    { id: "iepf", label: "Shares Transferred to IEPF" }


  ];

  const years = ["All", "2025", "2024", "2023"];

  const pdfData = {
    postal: {
      yearly: [
        { name: "POSTAL-BALLOT-NOTICE-2025-ADTL", file: "/investors/shareholder-information/postal-ballot-notice-and-form/POSTAL-BALLOT-NOTICE-2025-ADTL.pdf", year: "2025" },
        { name: "POSTAL-BALLOT-NOTICE", file: "/investors/shareholder-information/postal-ballot-notice-and-form/POSTAL-BALLOT-NOTICE.pdf", year: "2024" },
        { name: "Annexure-V-CS-Certificate", file: "/investors/shareholder-information/postal-ballot-notice-and-form/Annexure-V-CS-Certificate.pdf", year: "2024" },
        
      ],
      quarterly: [

      ]
    },
    shareholding: {
      yearly: [
        

      ],
      quarterly: [
        { name: "Shareholding-Pattern-30.06.2024-ADTL", file: "/investors/shareholder-information/shareholding-pattern/quarterly/Shareholding-Pattern-30.06.2024-ADTL.pdf", year: "2024" },
        { name: "Shareholding-Pattern-30.09.2024", file: "/investors/shareholder-information/shareholding-pattern/quarterly/Shareholding-Pattern-30.09.2024.pdf", year: "2024" },
        { name: "Shareholding-Pattern-31.03.2024", file: "/investors/shareholder-information/shareholding-pattern/quarterly/Shareholding-Pattern-31.03.2024.pdf", year: "2024" },
        { name: "Shareholding-Pattern-31.03.2025", file: "/investors/shareholder-information/shareholding-pattern/quarterly/Shareholding-Pattern-31.03.2025.pdf", year: "2025" },
        { name: "Shareholding-Pattern-31.12.2024-ADTL", file: "/investors/shareholder-information/shareholding-pattern/quarterly/Shareholding-Pattern-31.12.2024-ADTL.pdf", year: "2024" },
        { name: "SHP-March-2025", file: "/investors/shareholder-information/shareholding-pattern/quarterly/SHP-March-2025.pdf", year: "2025" },
        { name: "SHP-December-2024", file: "/investors/shareholder-information/shareholding-pattern/quarterly/SHP-December-2024.pdf", year: "2024" },
        { name: "SHP-September-2024", file: "/investors/shareholder-information/shareholding-pattern/quarterly/SHP-September-2024.pdf", year: "2024" },
        { name: "SHP-June-2024", file: "/investors/shareholder-information/shareholding-pattern/quarterly/SHP-June-2024.pdf", year: "2024" },
      ]
    },
    unclaimed: {
      yearly: [

      ],
      quarterly: [

      ]
    },

    iepf: {
      yearly: [
        { name: "Share-Transfer-to-IEPF-2023-2024", file: "/investors/shareholder-information/shares-transferred-to-IEPF/Share-Transfer-to-IEPF-2023-2024.pdf", year: "2023" },

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
          highlight="Shareholder Information"
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
                  onClick: () => window.open(item.file, '_self'),
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

export default ShareholderInformation;
