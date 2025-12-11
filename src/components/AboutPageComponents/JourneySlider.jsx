import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../Header/Header";

const timelineData = [
  {
    year: "2007 - 09",
    title: "INCEPTION",
    desc: "Started in 2020 as a focused SAP consulting firm, backed by a leadership team with deep industry experience."
  },
  {
    year: "2009 - 15",
    title: "EXPANSION",
    desc: "Quickly grew into a full-service provider offering ERP consulting, IT strategy, cloud, and system integration solutions."
  },
  {
    year: "2016 - 18",
    title: "TRANSFORMATION",
    desc: "Enabled enterprises to optimize operations, reduce costs, and elevate efficiency through strategic digital transformation."
  },
  {
    year: "2018 - 20",
    title: "GROWTH",
    desc: "Delivered SAP managed services, infrastructure, and security support—driving enhanced digital presence in procurement, marketing, and tendering."
  },
  {
    year: "2018 - 20",
    title: "CONSISTENCY",
    desc: " Built long-term client relationships by delivering reliable, high-quality solutions aligned with global standards."
  },
  {
    year: "2020 - Present",
    title: "INNOVATION",
    desc: " Leveraged modern technology and a 60-year multinational legacy to expand into cutting-edge domains and future-focused services."
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
        subtext="Our Journey"
        headline="PAST, PRESENT & FUTURE"
        highlight="ALL TOGETHER"
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
