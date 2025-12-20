import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import CsContent from '../components/CaseStudiesSection/CsContent';
import { GoGoal } from "react-icons/go";
import { Link, useSearchParams } from 'react-router-dom';

// Import images (reusing existing ones for now as placeholders)
import cs1 from "/images/Modernizing-ITD-Cementation’s-SAP.webp";
import cs2 from "/images/Transforming-Ashapura.webp";
import cs3 from "/images/Unifying-Raymond.webp";
import cs4 from "/images/Modernizing-Delux-Bearings.webp";
import cs5 from "/images/Digitizing-Customer.webp";
import cs6 from "/images/Modernizing-CK-Birla-Hospitals.webp";
import cs7 from "/images/Streamlining-raymonds.webp";
import cs8 from "/images/xpense-case-study.webp";
import cs9 from "/images/Optimizing-Ashapura.webp";


const CaseStudiesAll = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState('SAP');

    useEffect(() => {
        const category = searchParams.get('category');
        if (category === 'AWS') {
            setActiveTab('AWS');
        } else if (category === 'Aeonx') {
            setActiveTab('Aeonx Solutions');
        } else if (category === 'SAP') {
            setActiveTab('SAP');
        }
    }, [searchParams]);

    const tabs = ['SAP', 'AWS', 'Aeonx Solutions'];

    // Mock Data for each category
    const caseStudiesData = {
        'SAP': [
            {
                id: 1,
                headline: "Modernizing ITD Cementation’s SAP Landscape with RISE with SAP",
                date: "Apr 14, 2023 | Success Stories - SAP",
                desc: "In recent years, ITD Cementation India Private Limited has received several awards for their excellent work, including the “Best Infrastructure Company” award from CNBC TV18 and the “Outstanding Concrete Structure Award” from the Indian Concrete Institute.",
                img: cs1,
                link: "/case-study-one"
            },
            {
                id: 2,
                headline: "Raymond Engineering SBU: Unifying Operations with SAP S/4HANA RISE for a Smarter, Scalable Future",
                date: "Sep 6, 2022 | SAP, Success Stories - SAP",
                desc: "Raymond Limited (Engineering SBU) the precision engineering arm of the Raymond Group,  unified three diverse verticals (Automobile, Aerospace, Tools & Hardware) into one intelligent digital core.",
                img: cs3,
                link: "/case-study-two"
            },
            {
                id: 3,
                headline: "Transforming Ashapura’s Mineral Operations with Intelligent Automation",
                date: "Sep 6, 2022 | SAP, Success Stories - SAP",
                desc: "With a history spanning more than 60 years, Ashapura is a top provider of multi mineral solutions with a global presence, operating across multiple Indian states and seven other nations.",
                img: cs2,
                link: "/case-study-three"
            },


        ],
        'AWS': [
            {
                id: 1,
                headline: "Modernizing Delux Bearings’ Operations with AWS Cloud",
                date: "Mar 1, 2023 | Success Stories - AWS",
                desc: "Delux Bearings is India’s largest manufacturer of Clutch Release Bearings, with the widest range of bearing and precision components, a PAN India presence",
                img: cs4,
                bgColor: "#C9291F",
                link: "/case-study-four"
            },
            {
                id: 2,
                headline: "Digitizing Customer Feedback for Ashok Alco-Chem with AWS",
                date: "Jan 3, 2023 | Success Stories - AWS",
                desc: "Ashok Alco-Chem Limited (AACL), a long-established leader known for product quality and continuous improvement, wanted to strengthen",
                img: cs5,
                bgColor: "#C9291F",
                link: "/case-study-five"
            },
            {
                id: 3,
                headline: "Modernizing CK Birla Hospitals Operations on AWS Cloud",
                date: "Jan 3, 2023 | Success Stories - AWS",
                desc: "The CK Birla Group of Hospitals — including BMBHRC, CMRI (Kolkata), and RBH (Jaipur) — is a leading healthcare network in India with 800+ beds",
                img: cs6,
                bgColor: "#C9291F",
                link: "/case-study-six"
            },

        ],
        'Aeonx Solutions': [
            {
                id: 1,
                headline: "Streamlining Raymond Limited’s Operations with AeonXIQ Executive Summary",
                desc: "Raymond Limited, a 100-year legacy brand and one of India’s most respected textile and lifestyle conglomerates, operates across textiles, apparel, engineering, real estate, and FMCG. With a diverse workforce and large-scale operational processes.",
                img: cs7,
                bgColor: "#C9291F",
                link: "/case-study-seven"
            },
            {
                id: 2,
                headline: "Optimizing Ashapura Minechem’s Logistics with Logystix",
                desc: "Ashapura Minechem Ltd, a 60+ year global leader in multi-mineral solutions operating across 70+ countries, faced major inefficiencies in freight, routing, and logistics planning due to fragmented, manual processes.",
                img: cs9,
                bgColor: "#C9291F",
                link: "/case-study-eight"
            },
            {
                id: 3,
                headline: "Streamlining Raymond’s Expense Management with AeonX Xpense",
                desc: "Raymond Limited, a global textile and fashion leader, faced major inefficiencies in its manual expense reimbursement process—resulting in delays, fraud risks, compliance gaps, and high operational overhead.",
                img: cs8,
                bgColor: "#C9291F",
                link: "/case-study-nine"
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
                <div className="case-study-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? 'active' : ''}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {caseStudiesData[activeTab]?.map((item) => (
                        <div className="col-lg-4" key={item.id}>
                            <Link to={item.link} className="text-decoration-none text-dark">
                                <div className="casestudy-card h-100">
                                    <div className="cs-image-container mb-3 overflow-hidden rounded-4">
                                        <img
                                            src={item.img}
                                            alt={item.headline}
                                            className="w-100 h-100"
                                            style={{ minHeight: '250px', objectPosition: 'left' }}
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