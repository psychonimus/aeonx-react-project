import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Factory, Pickaxe, Truck, Biohazard, PillBottle, Hospital, Fuel, PhoneOutgoing, BookUser } from 'lucide-react';
import './IndustryRotator.css';

const IndustryRotator = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timerRef = useRef(null);
    const containerRef = useRef(null);

    const iconComponents = {
        'factory': Factory,
        'pickaxe': Pickaxe,
        'truck': Truck,
        'biohazard': Biohazard,
        'pill-bottle': PillBottle,
        'hospital': Hospital,
        'fuel': Fuel,
        'phone-outgoing': PhoneOutgoing,
        'book-user': BookUser
    };

    const slides = [
        {
            key: '1',
            bullet: 'Manufacturing',
            accent: 'emerald',
            icon: 'factory',
            tailText: 'Manufacturing',
            bgImage: '/images/manufacturing-bg.webp',
            body: 'AeonX delivers end-to-end SAP solutions tailored for the manufacturing industry, enabling organizations to modernize operations, enhance visibility, and scale with confidence. Our SAP-driven approach helps manufacturers adopt a connected, data-led, and digitally intelligent production ecosystem.',
            ListTitle: 'Our SAP solutions for Manufacturing help you:',
            ListItems: [
                'Streamline resource planning and optimize material usage.',
                'Enhance production management with real-time insights and automation.',
                'Improve asset utilization for greater operational reliability.',
                'Build a high-performing, integrated supply chain with faster response times.',
                'Strengthen product lifecycle management for continuous innovation.',
                'Optimize delivery and fulfillment processes for consistent output quality.'
            ],
            badges: [
                { text: 'noa', color: 'emerald', target: 'briefs' },
                { text: 'leo', color: 'violet', target: 'checklists' }
            ]
        },
        {
            key: '2',
            bullet: 'Mining & Minerals',
            accent: 'amber',
            icon: 'pickaxe',
            tailText: 'Mining & Minerals',
            bgImage: '/images/mining-bg.webp',
            body: 'The mining and minerals sector operates in a highly technical and operationally demanding environment. AeonX helps mining enterprises streamline processes, improve visibility, and enhance productivity through robust SAP-driven solutions. With a unified digital landscape, organizations can achieve greater transparency, safer operations, and smarter decision-making across the entire mining value chain.',
            ListTitle: 'Our SAP solutions for Mining & Minerals enables you to:',
            ListItems: [
                'Centralize data into a single, real-time source of truth.',
                'Optimize production workflows for higher efficiency and reduced downtime.',
                'Strengthen supply chain and distribution management with integrated planning tools.',
                'Improve forecasting accuracy for demand, supply, and inventory management.',
                'Enhance operational risk and compliance across mining sites.',
                'Streamline logistics, transportation, and warehouse operations for end-to-end control.',
                'Support financial processes including accounting, pricing, and cost optimization.'
            ],
            badges: [
                { text: 'ivan', color: 'amber', target: 'threads' },
                { text: 'sara', color: 'sky', target: 'Mention' }
            ]
        },
        {
            key: '3',
            bullet: 'Logistics',
            accent: 'violet',
            icon: 'truck',
            tailText: 'Logistics',
            bgImage: '/images/logistics-bg.webp',
            body: 'AeonX helps logistics businesses strengthen operational efficiency and enhance productivity through intelligent SAP solutions designed to deliver end-to-end visibility and control. By leveraging SAP ERP, we enable logistics organizations to modernize their processes, reduce operational costs, and elevate customer satisfaction, all while ensuring faster, more accurate decision-making powered by real-time insights. Our solutions support digital growth with innovative business models, seamless tracking tools, and robust process optimization.',
            ListTitle: 'Our SAP solutions for Logistics help you:',
            ListItems: [
                'Improve cost efficiency and customer satisfaction, driving long-term revenue growth',
                'Leverage advanced logistics tracking tools for faster operations and transaction accuracy.',
                'Reduce errors and improve process reliability across the logistics value chain.',
                'Gain complete visibility and control with an easy-to-use interface and centralized management.',
                'Access real-time data insights for smarter, proactive decision-making..',
                'Adopt flexible, scalable digital processes that evolve with your business needs'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
        {
            key: '4',
            bullet: 'Chemical',
            accent: 'sky',
            icon: 'biohazard',
            tailText: 'Chemical',
            bgImage: '/images/chemical.webp',
            body: 'We help companies in the chemical sector modernize processes, strengthen product traceability, and maintain consistent quality across their operations. With SAP, chemical companies can stay agile, reduce risks, and adapt quickly to evolving market demands. Our solutions support end-to-end chemical operations, from product development and safety documentation to logistics, inventory management, and customer fulfillment. By providing real-time visibility and predictive intelligence, we help businesses enhance decision-making, ensure regulatory compliance, and improve overall operational efficiency.',
            ListTitle: 'Our SAP solutions for Chemicals help you:',
            ListItems: [
                'Maintain up-to-date product specifications and safety documents to ensure compliance and operational safety.',
                'Access real-time insights into sales orders, deliveries, and stock levels for improved planning and fulfillment.',
                'Predict risks and opportunities with advanced analytics, enabling smarter and faster business decisions.',
                'Streamline processes across production, quality, and supply chain for enhanced reliability and performance.',
                'Improve service quality and customer experience with accurate, accessible, and transparent data.'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
        {
            key: '5',
            bullet: 'Pharmaceuticals',
            accent: 'emerald',
            icon: 'pill-bottle',
            tailText: 'Pharmaceuticals',
            bgImage: '/images/pharmaceuticals-bg.webp',
            body: 'AeonX empowers pharma companies to stay ahead of transformation with SAP solutions that enhance product quality, optimize operations, and support end-to-end compliance. By enabling digital agility, we help organizations adapt quickly, maintain market leadership, and accelerate time-to-market.',
            ListTitle: 'Our SAP solutions for Pharmaceuticals help you:',
            ListItems: [
                'Boost operational efficiency and profitability using proven digital tools and automated workflows.',
                'Optimize research and development to identify the right products, pricing strategies, and market opportunities.',
                'Enhance product quality and regulatory compliance with centralized, transparent process control.',
                'Enable global supply chain optimization for faster delivery, reduced risk, and increased revenue.',
                'Adapt quickly to industry advancements with flexible and scalable SAP platforms.'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
        {
            key: '6',
            bullet: 'Healthcare',
            accent: 'amber',
            icon: 'hospital',
            tailText: 'Healthcare',
            bgImage: '/images/healthcare-bg.webp',
            body: 'By digitizing manual processes and creating a connected ecosystem, we help healthcare providers deliver timely, accurate, and patient-centric care. Our solutions focus on reducing paperwork, optimizing operational workflows, strengthening vendor and inventory management, and improving workforce performance, enabling healthcare institutions to operate with greater agility, transparency, and reliability.',
            ListTitle: 'Our SAP solutions for Healthcare help you:',
            ListItems: [
                'Reduce paperwork and manual processes, digitizing tasks like patient registration, discharge, documentation, and approvals.',
                'Enhance patient experience by reducing wait times, improving process efficiency, and personalizing care journeys.',
                'Strengthen vendor and inventory management with complete visibility into stock levels, automated replenishment, and centralized tracking of purchase orders and invoices.',
                'Optimize workforce and shift management through centralized scheduling, performance tracking, and goal-setting tools.',
                'Improve overall operational efficiency with real-time insights and integrated system workflows.'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
        {
            key: '7',
            bullet: 'Oil & Gas',
            accent: 'violet',
            icon: 'fuel',
            tailText: 'Oil & Gas',
            bgImage: '/images/oilandgas-bg.webp',
            body: 'AeonX empowers oil and gas enterprises with SAP-driven digital solutions that enhance operational control, increase visibility, and improve agility across upstream, midstream, and downstream operations. Our integrated systems streamline asset management, optimize supply chains, and accelerate decision-making for safer, more efficient operations.',
            ListTitle: 'Our SAP solutions for Oil & Gas help you:',
            ListItems: [
                'Perform precise, timely asset inspections to detect anomalies early, reduce breakdowns, and maximize equipment throughput.',
                'Gain real-time visibility into every activity, from job creation to completion, with remote job approvals for supervisors anytime, anywhere.',
                'Go fully digital and paperless, enabling faster decision-making with live data from field operations.',
                'Enhance supply chain and logistics efficiency through integrated tracking, automated workflows, and better resource planning.',
                'Ensure end-to-end transparency and zero errors across stockpile analysis, yard management, facility management, invoice processing, and field service operations.'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
        {
            key: '8',
            bullet: 'Telecom',
            accent: 'sky',
            icon: 'phone-outgoing',
            tailText: 'Telecom',
            bgImage: '/images/telecom-bg.webp',
            body: 'The telecommunications industry is rapidly transforming, driven by 5G, digital services, and the need for agile, scalable, and data-rich platforms. AeonX enables telecom companies to modernize their operations with SAP-powered solutions that enhance network performance, accelerate monetization, and improve customer experiences. By digitizing internal systems, enabling real-time insights, and supporting complex business models, we help telecom providers stay competitive in a fast-evolving landscape.',
            ListTitle: 'Our SAP solutions for Telecom help you:',
            ListItems: [
                'Launch and support new digital business models with scalable, low-latency platforms.',
                'Drive real-time insights using big data analytics and multidimensional margin analysis.',
                'Exceed performance targets with real-time corporate performance management and in-the-moment modeling.',
                'Accelerate enterprise monetization with an integrated quote-to-cash process.',
                'Enable agile billing, entitlement, and subscription management for rapid digital service launches.',
                'Enhance demand and supply planning for access equipment such as phones and customer-premise devices.',
                'Manage physical inventory across multiple sites to meet evolving market needs.',
                'Use dynamic marketing analytics to enrich customer profiles and support data-driven decisions.',
                'Leverage marketing automation and integrated operations for faster market responses.',
                'Enable intelligent edge computing for latency-sensitive and mission-critical scenarios.',
                'Optimize workforce scheduling and field service operations with mobile-enabled tools.'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
        {
            key: '9',
            bullet: 'Retail',
            accent: 'emerald',
            icon: 'book-user',
            tailText: 'Retail',
            bgImage: '/images/retail-bg.webp',
            body: 'AeonX empowers retailers with advanced data analytics, AI-driven tools, and integrated SAP and AWS solutions that enhance visibility, streamline supply chains, and support smarter decision-making. Our approach helps retailers optimize operations, reduce costs, and deliver seamless shopping experiences across channels. By combining digital transformation, scalable architectures, and DevOps-driven improvements, we help retail businesses stay competitive in a continuously shifting marketplace.',
            ListTitle: 'Our SAP solutions for Retail help you:',
            ListItems: [
                'Gain real-time visibility into customer preferences, inventory levels, and demand trends.',
                'Enhance supply chain agility and efficiency through integrated digital platform.',
                'Implement continuous improvements with strong DevOps practices to reduce downtime and optimize workflows.',
                'Achieve accurate demand forecasting, minimizing stockouts and excess inventory costs.',
                'Boost cost-efficiency and profitability with optimized planning and operations.',
                'Deliver superior customer experiences by ensuring product availability and personalized engagement.'
            ],
            badges: [
                { text: 'jin', color: 'violet', target: 'tickets' },
                { text: 'nora', color: 'emerald', target: 'owners' }
            ]
        },
    ];

    const highlightMap = {
        docs: ['briefs', 'checklists'],
        comments: ['threads', 'Mention'],
        commands: ['tickets', 'owners']
    };

    const colorMap = {
        emerald: { bg: 'rgba(16,185,129,0.18)', border: 'rgba(16,185,129,0.35)' },
        violet: { bg: 'rgba(139,92,246,0.18)', border: 'rgba(139,92,246,0.35)' },
        amber: { bg: 'rgba(245,158,11,0.18)', border: 'rgba(245,158,11,0.35)' },
        sky: { bg: 'rgba(14,165,233,0.18)', border: 'rgba(14,165,233,0.35)' },

    };

    const escapeRegExp = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const applyHighlights = (text, slideKey, badges) => {
        const tokens = highlightMap[slideKey] || [];
        let result = text;

        tokens.forEach((token, idx) => {
            const badge = badges[idx];
            if (!badge) return;

            const regex = new RegExp(`\\b(${escapeRegExp(token)})\\b`, 'i');
            const colors = colorMap[badge.color];

            result = result.replace(regex, (match) => {
                return `<span className="highlight" style="background:${colors.bg}; box-shadow: inset 0 0 0 1px ${colors.border};">${match}</span>`;
            });
        });

        return result;
    };

    const startRotation = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const handleBulletClick = (index) => {
        setActiveIndex(index);
        startRotation();
    };

    const handleMouseEnter = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const handleMouseLeave = () => {
        startRotation();
    };

    const location = useLocation();

    useEffect(() => {
        startRotation();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // Handle hash navigation
    useEffect(() => {
        if (location.hash) {
            const hash = location.hash.replace('#', '').toLowerCase();
            const index = slides.findIndex(slide =>
                slide.bullet.toLowerCase().includes(hash) ||
                slide.tailText.toLowerCase().includes(hash)
            );

            if (index !== -1) {
                setActiveIndex(index);
                if (timerRef.current) clearInterval(timerRef.current);

                // Scroll to the container
                if (containerRef.current) {
                    setTimeout(() => {
                        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            }
        }
    }, [location.hash]);

    const currentSlide = slides[activeIndex];
    const IconComponent = iconComponents[currentSlide.icon];

    return (
        <>
            <div
                className="feature-rotator" id='industry-rotator'
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="background-gradient"></div>

                <section className="section-container">
                    <h1 className="main-heading text-start" data-aos="fade-up">
                        Empowering Industries with Trusted Expertise
                        <br className="heading-break" />
                    </h1>

                    <div className="row">
                        <div className="col-lg-3" data-aos="fade-up">
                            <div>
                                <div className="bullet-list">
                                    {slides.map((slide, index) => (
                                        <button
                                            key={slide.key}
                                            type="button"
                                            className={`bullet-item ${index === activeIndex ? 'active' : ''}`}
                                            onClick={() => handleBulletClick(index)}
                                        >
                                            <span className={`bullet-bar ${index === activeIndex ? `accent-${currentSlide.accent}` : ''}`}></span>
                                            <span className="bullet-text">{slide.bullet}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9" data-aos="fade-up">
                            <div className="card-wrapper">
                                <div className="card" style={{ backgroundImage: `url(${currentSlide.bgImage})` }}>
                                    <div className="card-content">


                                        {/* <div className={`icon-box accent-${currentSlide.accent}`}>
                                            <IconComponent className="icon" />
                                        </div> */}

                                        <div className="content-wrapper">
                                            <h2 className="content-heading">
                                                <span className="highlight-tail">{currentSlide.tailText}</span>
                                            </h2>
                                        </div>

                                        <p
                                            className="body-copy"
                                            dangerouslySetInnerHTML={{
                                                __html: applyHighlights(currentSlide.body, currentSlide.key, currentSlide.badges)
                                            }}
                                        />

                                        {currentSlide.ListTitle && (
                                            <h5 className="list-title">
                                                <span className="">{currentSlide.ListTitle}</span>
                                            </h5>
                                        )}
                                        {currentSlide.ListItems && (
                                            <ul>
                                                {currentSlide.ListItems.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="fade-gradient"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default IndustryRotator;