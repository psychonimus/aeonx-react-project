import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GlassButton from "../components/GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Header from "../components/Header/Header";
import DownloadList from "../components/DownloadList/DownloadList";
import { ArrowBigDownDash, LayoutGrid } from "lucide-react";


const OtherDocuments = () => {
  const [activeTab, setActiveTab] = useState("otherDocuments");
  const [activePeriod, setActivePeriod] = useState("yearly");
  const [activeYear, setActiveYear] = useState("All");

  const tabs = [
    { id: "otherDocuments", label: "Other Documents" },



  ];

  const years = ["All", "2025", "2024", "2023"];

  const pdfData = {
    otherDocuments: {
      yearly: [
        { name: "Aeonx-Financial-FY-2023-24-1", file: "/investors/other-documents/other-documents/Aeonx-Financial-FY-2023-24-1.pdf", year: "2024" },
        { name: "BSE-Intimation-Hina-Shah-Completion-of-2nd-Term", file: "/investors/other-documents/other-documents/BSE-Intimation-Hina-Shah-Completion-of-2nd-Term.pdf", year: "2024" },
        { name: "BSE-Intimation-Manoj-Ganatra-Completion-of-2nd-Term", file: "/investors/other-documents/other-documents/BSE-Intimation-Manoj-Ganatra-Completion-of-2nd-Term.pdf", year: "2024" },
        { name: "BSE-SEBI-Advisory-Letter-Change-of-Name", file: "/investors/other-documents/other-documents/BSE-SEBI-Advisory-Letter-Change-of-Name.pdf", year: "2024" },
        { name: "Form_MGT_7_ADTL_2024_11zon", file: "/investors/other-documents/other-documents/Form_MGT_7_ADTL_2024_11zon.pdf", year: "2024" },


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
        <title>Other Documents - Aeonx Digital</title>
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
          highlight="Other Documents"
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

export default OtherDocuments;
