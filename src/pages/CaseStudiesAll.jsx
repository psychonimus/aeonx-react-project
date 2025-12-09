import React, { useState } from 'react';
import Header from '../components/Header/Header';
import CsContent from '../components/CaseStudiesSection/CsContent';
import { GoGoal } from "react-icons/go";
import { Link } from 'react-router-dom';

// Import images (reusing existing ones for now as placeholders)
import cs1 from "/images/sap-case-studies.png";
import cs2 from "/images/aws-case-studies.png";
import cs3 from "/images/cs-3.webp";

const CaseStudiesAll = () => {
    const [activeTab, setActiveTab] = useState('SAP');

    const tabs = ['SAP', 'AWS', 'Aeonx Solutions'];

    // Mock Data for each category
    const caseStudiesData = {
        'SAP': [
            {
                id: 1,
                headline: "ITD Cementation",
                date: "Apr 14, 2023 | Success Stories - SAP",
                desc: "Executive Summary: In recent years, ITD Cementation India Private Limited has received several awards for their excellent work,",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 2,
                headline: "SAP AMS support for mining and exploration aimed at improving safety, compliance, and efficiency.",
                date: "Sep 6, 2022 | SAP, Success Stories - SAP",
                desc: "Through our 7 years of expertise, we ensure businesses continue to outperform while technology changes",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 3,
                headline: "The proliferation of brands with SAP AMS CPG.",
                date: "Sep 6, 2022 | SAP, Success Stories - SAP",
                desc: "The recent partnership we had with a client running one of Gujarat's largest automation plants at Method",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 4,
                headline: "SAP AMS for using multiple data sources",
                date: "Sep 6, 2022 | SAP, Success Stories - SAP",
                desc: "By streamlining the company operations, we help our clients enhance their business efficiency.",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 5,
                headline: "SAP AMS to streamline and enhance Real State management processes.",
                date: "Sep 1, 2022 | SAP, Success Stories - SAP",
                desc: "We provide our expertise in order to help our clients' businesses expand.",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 6,
                headline: "SAP AMS fostering advancement through developing technology.",
                date: "Aug 30, 2022 | SAP, Success Stories - SAP",
                desc: "Staying competitive in the market requires consistently adapting to changes and fitting into the environment.",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 7,
                headline: "SAP AMS to establish strategic and targeted value.",
                date: "Aug 30, 2022 | SAP, Success Stories - SAP",
                desc: "By incorporating technology into what they do, we specialize in helping our clients.",
                img: cs1,
                link: "/case-study"
            },
            {
                id: 8,
                headline: "Case Study for Integration of TrackAbout with SAP ERP",
                date: "Jul 19, 2022 | SAP, Success Stories - SAP",
                desc: "Taiyo Nippon Sanso India (TNSI) has slashed operating expenses and service delivery times by going all-in on SAP ERP with the help of Aeonx",
                img: cs1,
                link: "/case-study"
            },

        ],
        'AWS': [
            {
                id: 1,
                headline: "Hosting SAP workloads on AWS",
                date: "Mar 1, 2023 | Success Stories - AWS",
                desc: "Delux Bearings is India’s largest manufacturer of Clutch Release Bearings",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 2,
                headline: "Ashok Alco Chem Case Study",
                date: "Jan 3, 2023 | Success Stories - AWS",
                desc: "Executive Summary - Ashok Alco - chem Limited (AACL) for decades has been focusing with single minded",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 3,
                headline: "AWS Cloud Solutions CKBH Case Study: Ready to Migrate to the Cloud? You’ll be surprised at how easy it is",
                date: "Jan 3, 2023 | Success Stories - AWS",
                desc: "The Executive Summary - Leading healthcare group in India, the CK Birla Group of Hospitals includes",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 4,
                headline: "SAP on AWS: A Comprehensive Guide for Konark Group",
                date: "Jan 3, 2023 | Success Stories - AWS",
                desc: "With its first manufacturing unit established in 1972, Konark Group have multiple business",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 5,
                headline: "Reaping the benefits of AWS",
                date: "Sep 30, 2022 | Success Stories - AWS",
                desc: "With offices in Dubai, Oman, Abu Dhabi, and India, as well as stocking facilities in Jebel Ali,",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 6,
                headline: "BVG India Limited deploys AWS for Disaster Recovery",
                date: "Sep 15, 2022 | aws, Success Stories - AWS",
                desc: "BVG India Limited, founded in 1997 by Mr. Hanmantrao Gaikwad, is a responsible and forward-thinking",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 7,
                headline: "Migrate-to-Modernize: A Case Study      ",
                date: "Jul 7, 2022 | aws, Success Stories - AWS",
                desc: "Innovations were brewing at one of the largest automatic plants in India. Gopal Namkeen's ambitions were",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 8,
                headline: "How Gopal Namkeen improved the dealer experience by modernizing the order processing system.",
                date: "Jun 13, 2022 | aws, SAP, Success Stories - AWS",
                desc: "With the laying of the foundation stone, Gopal Namkeen was established in 1994.",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 9,
                headline: "Disaster Recovery for Bhilosa Industry Using AWS.",
                date: "Mar 11, 2022 | aws, SAP, Success Stories - AWS",
                desc: "Bhilosa Industries, headquartered in Mumbai and founded in 1989, has been in the textile business for nearly 100 years",
                img: cs2,
                bgColor: "#C9291F",
                link: "/case-study"
            }
        ],
        'Aeonx Solutions': [
            {
                id: 1,
                headline: "Custom ERP Solution",
                desc: "Tailor-made ERP for niche manufacturing needs.",
                img: cs3,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 2,
                headline: "Mobile App Development",
                desc: "Engaging mobile experiences for customers.",
                img: cs3,
                bgColor: "#C9291F",
                link: "/case-study"
            },
            {
                id: 3,
                headline: "AI-Powered Chatbot",
                desc: "Automating customer support with conversational AI.",
                img: cs3,
                bgColor: "#C9291F",
                link: "/case-study"
            }
        ]
    };

    return (
        <section className="case-studies-all page-section pt-5 pb-5">
            <div className="container mt-5">
                <Header
                    subtext="Our Work"
                    headline="Case Studies"
                    highlight="Success Stories"
                />

                {/* Tabs */}
                <div className="d-flex justify-content-center gap-4 mb-5 mt-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline-primary'}`}
                            style={{
                                borderRadius: '30px',
                                padding: '10px 30px',
                                fontWeight: '600',
                                backgroundColor: activeTab === tab ? '#041C58' : 'transparent',
                                color: activeTab === tab ? '#fff' : '#041C58',
                                border: '2px solid #1c77ffff'
                            }}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {caseStudiesData[activeTab]?.map((item) => (
                        <div className="col-md-4" key={item.id}>
                            <Link to={item.link} className="text-decoration-none text-dark">
                                <div className="casestudy-card h-100">
                                    <div className="cs-image-container mb-3 overflow-hidden rounded-4">
                                        <img
                                            src={item.img}
                                            alt={item.headline}
                                            className="w-100 h-100 object-fit-cover"
                                            style={{ minHeight: '250px' }}
                                        />
                                    </div>

                                    <CsContent
                                        bgColor={item.bgColor}
                                        icon={() => <GoGoal color="#fff" size={28} />}
                                        headline={item.headline}
                                        date={item.date}
                                        desc={item.desc}
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesAll;