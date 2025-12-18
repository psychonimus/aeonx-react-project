import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../Header/Header";

const timelineData = [
  {
    year: "2020",
    title: "INCEPTION",
    desc: "Launch in Mumbai & Bhuj with founding team"
  },
  {
    year: "2021",
    title: "ALLIANCES",
    desc: "SAP & AWS partnerships, client base expansion"
  },
  {
    year: "2022",
    title: "EXPANSION",
    desc: "Dubai presence, CMMI Level 5 & ISO certifications"
  },
  {
    year: "2023",
    title: "SCALE",
    desc: "175-seat infrastructure, workforce growth"
  },
  {
    year: "2024",
    title: "INNOVATION",
    desc: "AI / ML / IIoT deployments for key clients"
  },
  {
    year: "2025",
    title: "ACCELERATION",
    desc: "Ahmedabad delivery center, 250+ global workforce"
  }
  
];

const JourneySlider = () => {
  const [active, setActive] = useState(0);

  const goNext = () => {
    if (active < timelineData.length - 1) setActive(active + 1);
  };

  const goPrev = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <section className="journey-section" id="journey">
      {/* <div className="journey-header">
        <h2>PAST, PRESENT & FUTURE</h2>
        <p>With 17+ years in the business, we have used compelling data insights and creativity to deliver experiences that drive commerce for global brands.</p>
      </div> */}
      <Header
        // subtext="Our Journey"
        highlight="Our Journey"
        headline="Shaped by the Past, Driven in the Present, Built for the Future"
        desc="Founded in 2020, AeonX Digital began as a specialized SAP consulting firm and rapidly expanded into providing comprehensive ERP consulting, cloud transformation, IT strategy, and system integration services. With strong expertise in SAP managed services, infrastructure, and security support, we help businesses enhance digital engagement across procurement, marketing, and tendering. Backed by the 60-year legacy of a global multinational group, AeonX continues to scale across cutting-edge technology domains, committed to innovation, sustainability, and long-term client success."
      />

      {/* Timeline */}
      <div className="timeline-wrapper mt-5">
        <div className="journey-timeline-line"></div>

        <div className="timeline-years">
          {timelineData.map((item, i) => (
            <div
              key={i}
              className={`timeline-year ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {item.year}
              <span className="dot"></span>
            </div>
          ))}
        </div>

        <div className="pointer mt-5"></div>
      </div>

      {/* Content */}
      <div className="journey-content">
        <button className="arrow-btn left" onClick={goPrev} disabled={active === 0}>
          <FaChevronLeft />
        </button>

        <div className="text-content">
          <h3>{timelineData[active].title}</h3>
          <p>{timelineData[active].desc}</p>
        </div>

        <button className="arrow-btn right" onClick={goNext} disabled={active === timelineData.length - 1}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default JourneySlider;
