import React, { useState } from 'react';
import './AeonxFlagshipProducts.css';

import GlassButton from '../components/GlassButton/GlassButton';
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const  AeonxFlagshipProducts = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState([]);

    const caseStudies = [
        {
            id: 1,
            title: 'Next-Gen Expense Management for Modern Teams',
            description: 'Smart travel and expense platform for managing approvals, trips, and reimbursements. Mobile-ready and SAP integrated.',
            image: '/images/xpense-cover.png',
            video: null,
            tags: ['Spend Control', 'Workflow Automation', 'Compliance AI', 'Real-Time Insights'],
            industry: 'Xpense',
            url: 'https://xpense.aeonx.digital/',
            
        },
        {
            id: 2,
            title: 'Modernizing Supplier Operations with AI-Powered Procurement',
            description: 'Cloud-native procure-to-pay platform that automates onboarding, sourcing, and invoicing. Fully integrated with AWS and SAP.',
            image: '/images/supplierX-logo.webp',
            video: null,
            tags: ['Supplier Management', 'Procurement Automation', 'Risk Intelligence', 'Contract Governance'],
            industry: 'SupplierX',
            url: 'https://supplierx.aeonx.digital/',
            
        },
        {
            id: 3,
            title: 'Elevating Logistics Efficiency with Intelligent Supply Chain Automation',
            description: 'Cloud-based logistics platform to optimize warehouse and supply chain operations with real-time tracking, order management, and end-to-end visibility.',
            image: '/images/logystix-cover.png',
            video: null,
            tags: ['Route Intelligence', 'Ops Automation', 'Real-Time Tracking', 'Predictive Planning'],
            industry: 'LogystiX',
            url: 'https://logystix.cloud/',
            
        },
        {
            id: 4,
            title: 'Accelerating Smart Manufacturing with AI-Powered Quality & Performance Intelligence',
            description: 'ManufeX delivers real-time visibility into manufacturing operations by using AI to identify defects and performance issues.',
            image: '/images/Manufex-cover.webp',
            video: null,
            tags: ['Real-Time Visibility', 'Quality Detection', 'Performance Insights', 'Predictive Analytics'],
            industry: 'ManufeX',
            url: 'https://manufex.cloud/',
            
        },

        {
            id: 5,
            title: 'Powering Enterprise Transformation with a Unified AI Intelligence Layer',
            description: 'AI-driven platform turning data into insights for smarter decisions and automated enterprise workflows.',
            image: '/images/Aeonxiq-cover.webp',
            video: null,
            tags: ['Agentic AI', 'Data Unification', 'Predictive Insights', 'Automation Framework'],
            industry: 'AeonXIQ',
            url: 'https://aeonxiq.ai/',
            
        },
        {
            id: 6,
            title: 'Streamlining Workforce Operations with a Unified Self-Service Employee Hub',
            description: 'Self-service workforce portal for managing timesheets, leave, and CRM actions. Streamlines internal operations.',
            image: '/images/People-connect-cover.webp',
            video: null,
            tags: ['Self-Service Portal', 'Timesheet Management', 'Leave Automation', 'CRM Workflows'],
            industry: 'PeopleConnect',
            url: 'https://dev.aeonxus.digital/',
            
        },
        
        
    ];

    const services = [
        'Artificial Intelligence', 'Mobile App Development', 'Cloud & DevOps Development',
        'Internet of Things', 'Digital Transformation', 'Custom Software', 'Ongoing Support',
        'Staff Augmentation', 'React Native App Development', 'Flutter Development',
        'UX/UI Development', 'Web Development', 'iOS App Development', 'Android App Development',
        'B2B App Development', 'SaaS Development'
    ];

    const industries = [
        'Healthcare', 'Real Estate', 'Fintech', 'Social Media', 'Insurance', 'Education',
        'E-Commerce', 'Sports', 'Travel', 'Restaurant', 'Construction', 'Fitness', 'IoT'
    ];

    const toggleService = (service) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const toggleIndustry = (industry) => {
        setSelectedIndustries(prev =>
            prev.includes(industry) ? prev.filter(i => i !== industry) : [...prev, industry]
        );
    };

    const clearFilters = () => {
        setSelectedServices([]);
        setSelectedIndustries([]);
    };

    const filteredCaseStudies = caseStudies.filter(study => {
        if (selectedServices.length === 0 && selectedIndustries.length === 0) return true;

        const matchesService = selectedServices.length === 0 ||
            study.services.some(s => selectedServices.includes(s));
        const matchesIndustry = selectedIndustries.length === 0 ||
            selectedIndustries.includes(study.industry);

        return matchesService && matchesIndustry;
    });

    return (
        <>
        <section className="life-hero aeonx-accelerators-hero" style={{ height: "100vh" }} >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="life-hero-content text-center d-flex flex-column justify-content-center  h-100">
                  {/* <p className="eyebrow">AEONX FLAGSHIP PRODUCTS</p> */}
                  <h1 className="mb-2">
                    Empower Your Enterprise with AeonX’s Next-Generation Digital Solutions
                  </h1>
                  <p>AeonX’s Flagship Products are designed to help organizations accelerate innovation, optimize operations, and unlock the full potential of their digital ecosystem. Built with precision, performance, and scalability in mind, our solutions empower businesses to streamline workflows, enhance decision-making, and deliver exceptional value across every layer of their enterprise.</p>

                  <div className="event-hero-buttons d-flex justify-content-center">
                    <GlassButton
                      title="Explore Flagship Products"
                      icon={() => <IoIosArrowDropdownCircle size={30} />}
                      onClick={() => {
                        window.scrollTo({
                            top: document.getElementById("aeonx-all-products").offsetTop,
                            behavior: "smooth"
                        });
                    }}
                    />

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        
            <div className="case-studies-wrapper" id='aeonx-all-products'>


                <div className="container">


                    
                    <div className="case-studies-grid">
                       
                        {filteredCaseStudies.length > 0 ? (
                            filteredCaseStudies.map(study => (
                                <div key={study.id} className="case-study-card" >
                                    <div className='product-img-container'>
                                        <img
                                        src={study.image}
                                        alt={study.title}
                                        className="case-study-image"
                                    />

                                    <div className="button-overlay h-100 w-100 justify-content-center align-items-center">
                                        <GlassButton
                                          title="Explore"
                                          icon={() => <FaCircleArrowRight size={25} />}
                                          url={study.url}
                                          target = '_blank'
                                          
                                        />
                                    </div>
                                    </div>

                                    
                                    <div className="case-study-content">
                                        <div className="case-study-industry">{study.industry}</div>
                                        {/* <div className="case-study-tags">
                                            {study.tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div> */}
                                        <h3 className="aeonx-case-study-title">{study.title}</h3>
                                        <p className="aeonx-case-study-description">{study.description}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <p>No case studies found matching your filters!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AeonxFlagshipProducts;