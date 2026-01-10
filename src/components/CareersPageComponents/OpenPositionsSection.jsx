import React from "react";
import Header from "../Header/Header";
import { FaArrowRight, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { IoBagRemoveSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";

const jobs = [
  {
    title: "Associate Consultant - SAP Basis",
    location: "Surat, India",
    type: "Full-time",
    experience: "3-4 Years",
    openings: "1",
    url: "/careers/job-desc-one",
  },
  {
    title: "Associate Consultant - SAP MM",
    location: "Ahmedabad/Bhuj/Dehradun/Mumbai",
    type: "Full-time",
    experience: "2-4 Years",
    openings: "2",
    url: "/careers/job-desc-two",
  },
  {
    title: "Associate Consultant - SAP ABAP",
    location: "Assam, India",
    type: "Full-time",
    experience: "4-5 Years",
    openings: "1",
    url: "/careers/job-desc-three",
  },
  {
    title: "Associate Consultant - SAP PS",
    location: "Mumbai/Dehradun/Ahmedabad/Noida",
    type: "Full-time",
    experience: "2-3 Years",
    openings: "1",
    url: "/careers/job-desc-four",
  },
  {
    title: "Flutter Developer",
    location: "Ahmedabad/Bhuj/Noida/Dehradun",
    type: "Full-time",
    experience: "2-3 Years",
    openings: "2",
    url: "/careers/job-desc-five",
  },
  {
    title: "Full Stack Developer",
    location: "Ahmedabad/Bhuj/Dehradun",
    type: "Full-time",
    experience: "2-3 Years",
    openings: "4",
    url: "/careers/job-desc-six",
  },
];

const OpenPositionsSection = () => {
  return (
    <>
      <section className="open-positions pb-5" id="open-positions">
        <Header
          // subtext="Work With Us"
          headline="Dream Big. Work Bold. Join Us"
          highlight="Open Positions"
        />

        <div className="d-flex justify-content-center ">
          <div style={{ width: "30%", height: "4px", backgroundColor: "#f97316", borderRadius: "2px" }}></div>
        </div>



        <div className="container mt-5">
          <div className="row g-4">
            {jobs.map((job, idx) => (
              <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="job-card d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="job-title">{job.title}</h3>

                    <div className="job-meta mt-3">
                      <p><FaMapMarkerAlt /> {job.location}</p>
                      <p><FaClock /> {job.type}</p>
                      <p><IoBagRemoveSharp /> {job.experience}</p>
                      <p><RiTeamFill />No of Openings: {job.openings}</p>
                    </div>
                  </div>

                  <div>
                    <Link to={job.url} className="text-decoration-none">
                      <button className="apply-btn">
                        Apply Now <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <p style={{ fontSize: "1.15rem", color: "#444" }}>
            Can't find a position that fits you?&nbsp;
            <span style={{ fontWeight: 600, color: "#f97316" }}>
              Drop your resume at{" "}
              <a
                href="mailto:careers@aeonx.digital "
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                careers@aeonx.digital
              </a>

            </span>
            &nbsp;We'll reach out if there's a match!
          </p>
        </div>
      </section>
    </>
  );
};

export default OpenPositionsSection;
