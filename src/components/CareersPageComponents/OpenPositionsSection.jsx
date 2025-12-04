import React from "react";
import Header from "../Header/Header";
import { FaArrowRight, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Mumbai, India",
    type: "Full-time",
    department: "Engineering",
    url: "/careers/job-desc-one",
  },
  {
    title: "React UI/UX Designer",
    location: "Remote",
    type: "Contract",
    department: "Design",
  },
  {
    title: "Cloud Solutions Architect",
    location: "Bangalore, India",
    type: "Full-time",
    department: "Cloud & DevOps",
  },
  {
    title: "SAP Functional Consultant",
    location: "Gurugram, India",
    type: "Full-time",
    department: "Enterprise Solutions",
  },
  {
    title: "SAP Functional Consultant",
    location: "Gurugram, India",
    type: "Full-time",
    department: "Enterprise Solutions",
  },
  {
    title: "SAP Functional Consultant",
    location: "Gurugram, India",
    type: "Full-time",
    department: "Enterprise Solutions",
  },
];

const OpenPositionsSection = () => {
  return (
    <>
      <section className="open-positions pb-5">
        <Header
          subtext="Work With Us"
          headline="Dream Big. Work Bold. Join Us"
          highlight="Open Positions"
        />

        <div className="d-flex justify-content-center ">
          <div style={{ width: "30%", height: "4px", backgroundColor: "#f97316", borderRadius: "2px" }}></div>
        </div>



        <div className="container mt-5">
          <div className="row g-4">
            {jobs.map((job, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="job-card">
                  <h3 className="job-title">{job.title}</h3>

                  <div className="job-meta mt-3">
                    <p><FaMapMarkerAlt /> {job.location}</p>
                    <p><FaClock /> {job.type}</p>
                    <p>📁 {job.department}</p>
                  </div>

                  <Link to={job.url}>
                    <button className="apply-btn">
                      Apply Now <FaArrowRight />
                    </button>
                  </Link>
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
                href="mailto:hr@aeonx.digital"
                style={{ color: "#f97316", textDecoration: "underline" }}
              >
                hr@aeonx.digital
              </a>
              .
            </span>
            &nbsp;We'll reach out if there's a match!
          </p>
        </div>
      </section>
    </>
  );
};

export default OpenPositionsSection;
