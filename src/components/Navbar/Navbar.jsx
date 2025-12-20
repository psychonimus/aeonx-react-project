import React, { useRef, useEffect, useState } from 'react'
import logo from '/images/aeonx-logo-white.svg'
import GlassButton from '../GlassButton/GlassButton'
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(window.scrollY);
    const location = useLocation();
    const navRef = useRef(null);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    // Helper to determine if a section is active
    const isSectionActive = (paths) => {
        if (Array.isArray(paths)) {
            return paths.some(path => location.pathname.startsWith(path));
        }
        return location.pathname.startsWith(paths);
    };

    useEffect(() => {
        // Close navbar and accordions on route change
        const closeMenu = () => {
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');

                // Reset hamburger icon
                const checkIcon = document.getElementById('check-icon');
                if (checkIcon) checkIcon.checked = false;

                // Close all open accordions
                const openAccordions = document.querySelectorAll('.accordion-collapse.show');
                openAccordions.forEach(acc => {
                    acc.classList.remove('show');
                });

                // Reset accordion buttons
                const accordionButtons = document.querySelectorAll('.accordion-button:not(.collapsed)');
                accordionButtons.forEach(btn => {
                    btn.classList.add('collapsed');
                    btn.setAttribute('aria-expanded', 'false');
                });
            }
            setHoveredMenu(null);
        };

        closeMenu();
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    // Close the menu if clicked outside
                    navbarCollapse.classList.remove('show');
                    const checkIcon = document.getElementById('check-icon');
                    if (checkIcon) checkIcon.checked = false;
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
                        // scrolling down
                        setIsHidden(true);
                    } else {
                        // scrolling up
                        setIsHidden(false);
                    }
                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function toggleMegaMenu(event) {
        if (window.innerWidth < 992) {
            event.preventDefault();
            const megaMenu = event.currentTarget.nextElementSibling;
            megaMenu.classList.toggle('show');
            const plusIcon = event.currentTarget.querySelector('span');
            plusIcon.textContent = megaMenu.classList.contains('show') ? '-' : '+';
        }
    }

    function toggleAccordion(header) {
        if (window.innerWidth < 992) {
            const ul = header.nextElementSibling;
            if (!ul) return; // Guard clause if ul doesn't exist

            const isActive = header.classList.contains('active');

            // Close all other accordions in the same mega-menu
            const parentMegaMenu = header.closest('.mega-menu');
            const allHeaders = parentMegaMenu.querySelectorAll('h4');
            const allUls = parentMegaMenu.querySelectorAll('ul');

            allHeaders.forEach(h => h.classList.remove('active'));
            allUls.forEach(u => u.classList.remove('active'));

            if (!isActive) {
                header.classList.add('active');
                ul.classList.add('active');
            }
        }
    }


    return (
        <>
            <nav
                ref={navRef}
                className="navbar navbar-expand-lg"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    zIndex: 1000,
                    transform: isHidden ? 'translateY(-200px)' : 'translateY(0)',
                    transition: 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)',

                }}
            >
                <div className="container navbar-cont">
                    {/* Logo on the left */}
                    <NavLink to="/" className="navbar-brand" >
                        <img src={logo} alt="Logo" className="d-inline-block align-top nav-logo" />
                    </NavLink>
                    {/* Navbar toggler for responsive design */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <input hidden="" className="check-icon" id="check-icon" name="check-icon" type="checkbox" />
                        <label className="icon-menu" htmlFor="check-icon">
                            <div className="bar bar--1"></div>
                            <div className="bar bar--2"></div>
                            <div className="bar bar--3"></div>
                        </label>
                    </button>
                    {/* Links on the right */}
                    <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className='nav-item'>
                                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
                            </li>


                            <li className="nav-item has-mega-menu d-none d-lg-block"
                                onMouseEnter={() => setHoveredMenu('products')}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <NavLink
                                    to="javascript:void(0)"
                                    className={
                                        (location.pathname === "/sap-focused-products" ||
                                            location.pathname === "/aws-products" ||
                                            location.pathname === "/aeonx-flagship-products" ||
                                            location.pathname.startsWith("/products/"))
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Products
                                </NavLink>
                                <div className={`mega-menu ${hoveredMenu === 'products' ? 'show-desktop' : ''}`}>
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >PRODUCTS</h4>
                                                    <p>Explore AeonX’s SAP and AWS service portfolios,
                                                        along with accelerators built to speed up enterprise transformation.</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/sap-focused-products">SAP Service Portfolio </NavLink></li>
                                                        <li><NavLink to="/aws-products">AWS Service Portfolio</NavLink></li>
                                                        <li><NavLink to="/aeonx-flagship-products">AeonX Accelerators</NavLink></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-lg-none">
                                <div className="accordion no-border" id="products-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button
                                                className={`accordion-button ${isSectionActive(['/sap-focused-products', '/aws-products', '/aeonx-flagship-products', '/products/']) ? 'mobile-active' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Products
                                            </button>
                                        </a><div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#products-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/sap-focused-products">SAP Service Portfolio </NavLink></li>
                                                    <li><NavLink to="/aws-products">AWS Service Portfolio</NavLink></li>
                                                    <li><NavLink to="/aeonx-flagship-products">AeonX Accelerators</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>






                            <li className="nav-item has-mega-menu d-none d-lg-block"
                                onMouseEnter={() => setHoveredMenu('services')}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <NavLink
                                    to="/services"
                                    className={
                                        (location.pathname === "/services")
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Services
                                </NavLink>
                                <div className={`mega-menu ${hoveredMenu === 'services' ? 'show-desktop' : ''}`}>
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >SERVICES</h4>
                                                    <p>Comprehensive services covering implementation, migration, integration,
                                                        support, innovation initiatives, and specialized staffing.</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/services#implementation">Implementation </NavLink></li>
                                                        {/* <li><NavLink to="/services#support">Support</NavLink></li> */}
                                                        <li><NavLink to="/services#migration">Migration</NavLink></li>
                                                        <li><NavLink to="/services#integration">Integration </NavLink></li>



                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li><NavLink to="/services#innovation">Innovation</NavLink></li>
                                                        <li><NavLink to="/services#staffing">Staffing</NavLink></li>
                                                    </ul>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-lg-none mt-1">
                                <div className="accordion no-border" id="services-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button
                                                className={`accordion-button ${isSectionActive('/services') ? 'mobile-active' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="true"
                                                aria-controls="collapseTwo"
                                            >
                                                Services
                                            </button>
                                        </a><div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#services-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/services#implementation">Implementation </NavLink></li>
                                                    {/* <li><NavLink to="/services#support">Support</NavLink></li> */}
                                                    <li><NavLink to="/services#migration">Migration</NavLink></li>
                                                    <li><NavLink to="/services#integration">Integration </NavLink></li>
                                                    <li><NavLink to="/services#innovation">Innovation</NavLink></li>
                                                    <li><NavLink to="/services#staffing">Staffing</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item has-mega-menu d-none d-lg-block"
                                onMouseEnter={() => setHoveredMenu('industries')}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <NavLink to="/industries" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Industries</NavLink>
                                <div className={`mega-menu ${hoveredMenu === 'industries' ? 'show-desktop' : ''}`}>
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >INDUSTRIES</h4>
                                                    <p>Industry-specific expertise across manufacturing, mining, logistics,
                                                        healthcare, energy, telecom, chemicals, pharmaceuticals, and retail.</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/industries#manufacturing">Manufacturing </NavLink></li>
                                                        <li><NavLink to="/industries#mining">Mining & Minerals</NavLink></li>
                                                        <li><NavLink to="/industries#logistics">Logistics</NavLink></li>
                                                        <li><NavLink to="/industries#chemicals">Chemical</NavLink></li>
                                                        <li><NavLink to="/industries#pharmaceuticals">Pharmaceuticals </NavLink></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>

                                                        <li><NavLink to="/industries#healthcare">Healthcare</NavLink></li>
                                                        <li><NavLink to="/industries#oil">Oil & Gas</NavLink></li>
                                                        <li><NavLink to="/industries#telecom">Telecom</NavLink></li>
                                                        <li><NavLink to="/industries#retail">Retail</NavLink></li>

                                                    </ul>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-lg-none mt-1">
                                <div className="accordion no-border" id="industries-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button
                                                className={`accordion-button ${isSectionActive('/industries') ? 'mobile-active' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="true"
                                                aria-controls="collapseThree"
                                            >
                                                Industries
                                            </button>
                                        </a><div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#industries-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/industries#manufacturing">Manufacturing </NavLink></li>
                                                    <li><NavLink to="/industries#mining">Mining & Minerals</NavLink></li>
                                                    <li><NavLink to="/industries#logistics">Logistics</NavLink></li>
                                                    <li><NavLink to="/industries#chemicals">Chemical</NavLink></li>
                                                    <li><NavLink to="/industries#pharmaceuticals">Pharmaceuticals </NavLink></li>
                                                    <li><NavLink to="/industries#healthcare">Healthcare</NavLink></li>
                                                    <li><NavLink to="/industries#oil">Oil & Gas</NavLink></li>
                                                    <li><NavLink to="/industries#telecom">Telecom</NavLink></li>
                                                    <li><NavLink to="/industries#retail">Retail</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>



                            <li className="nav-item has-mega-menu d-none d-lg-block"
                                onMouseEnter={() => setHoveredMenu('insights')}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <NavLink
                                    to="javascript:void(0)"
                                    className={
                                        (location.pathname === "/blogs" ||
                                            location.pathname === "/events" ||
                                            location.pathname === "/aeonxlife" ||
                                            location.pathname.startsWith("/blogs/"))
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Insights
                                </NavLink>
                                <div className={`mega-menu ${hoveredMenu === 'insights' ? 'show-desktop' : ''}`}>
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >INSIGHTS</h4>
                                                    <p>Practical SAP playbooks, AWS optimization guides,
                                                        product deep dives, blogs, and industry events.</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><a target='_blank' href="https://help.sap.com/doc/download_multimedia_ebooks_businessone90_tb1200_01_01_story_html/9.0/en-US/story_content/external_files/implementation%20Tools%20-%20Implementation%20Methodology.pdf">SAP (Implementation playbooks) </a></li>
                                                        <li><a target='_blank' href="https://aws.amazon.com/aws-cost-management/cost-optimization/">AWS (Cloud optimization guides)</a></li>
                                                        <li><NavLink to="/aeonx-flagship-products">Product Spotlight (Deep dives)</NavLink></li>


                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>


                                                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                                                        <li><NavLink to="/events">Events</NavLink></li>
                                                        {/* <li><NavLink to="/aeonxlife">Life at AeonX Digital</NavLink></li> */}

                                                    </ul>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-lg-none mt-1">
                                <div className="accordion no-border" id="insights-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button
                                                className={`accordion-button ${isSectionActive(['/blogs', '/events', '/aeonxlife']) ? 'mobile-active' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="true"
                                                aria-controls="collapseFour"
                                            >
                                                Insights
                                            </button>
                                        </a><div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#industries-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><a target='_blank' href="https://help.sap.com/doc/download_multimedia_ebooks_businessone90_tb1200_01_01_story_html/9.0/en-US/story_content/external_files/implementation%20Tools%20-%20Implementation%20Methodology.pdf">SAP (Implementation playbooks) </a></li>
                                                    <li><a target='_blank' href="https://aws.amazon.com/aws-cost-management/cost-optimization/">AWS (Cloud optimization guides)</a></li>
                                                    <li><NavLink to="/aeonx-flagship-products">Product Spotlight (Deep dives)</NavLink></li>
                                                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                                                    <li><NavLink to="/events">Events</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item has-mega-menu d-none d-lg-block"
                                onMouseEnter={() => setHoveredMenu('company')}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Company</NavLink>
                                <div className={`mega-menu ${hoveredMenu === 'company' ? 'show-desktop' : ''}`}>
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >COMPANY</h4>
                                                    <p>Learn about AeonX’s journey, vision, leadership team,
                                                        and the values shaping our organization.</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/about">About Us</NavLink></li>
                                                        <li><NavLink to="/about#journey">Our Journey</NavLink></li>
                                                        <li><NavLink to="/about#vision-mission">Vision & Mission</NavLink></li>
                                                        <li><NavLink to="/about#team">Team</NavLink></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-lg-none mt-1">
                                <div className="accordion no-border" id="company-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button
                                                className={`accordion-button ${isSectionActive('/about') ? 'mobile-active' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="true"
                                                aria-controls="collapseFive"
                                            >
                                                Company
                                            </button>
                                        </a><div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#company-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/about">About Us</NavLink></li>
                                                    <li><NavLink to="/about#journey">Our Journey</NavLink></li>
                                                    <li><NavLink to="/about#vision-mission">Vision & Mission</NavLink></li>
                                                    <li><NavLink to="/about#team">Team</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item">
                                <NavLink to="/careers" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Careers</NavLink>
                            </li>

                            <li className="nav-item has-mega-menu d-none d-lg-block"
                                onMouseEnter={() => setHoveredMenu('investor')}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <NavLink
                                    to="javascript:void(0)"
                                    className={
                                        (location.pathname === "/investor-relations")
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Investor Relations
                                </NavLink>
                                <div className={`mega-menu ${hoveredMenu === 'investor' ? 'show-desktop' : ''}`}>
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >INVESTOR RELATIONS</h4>
                                                    <p>Financial disclosures, governance frameworks,
                                                        shareholder information, policies, and statutory documents.</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/financial-highlights">Financial Highlights </NavLink></li>
                                                        <li><NavLink to="/shareholder-information">Shareholder Information</NavLink></li>
                                                        <li><NavLink to="/corporate-governance">Corporate Governance</NavLink></li>
                                                        <li><NavLink to="/code-and-policy">Code and Policy</NavLink></li>
                                                        <li><NavLink to="/other-documents">Other Documents</NavLink></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item d-lg-none mt-0 mb-3">
                                <div className="accordion no-border" id="investor-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button
                                                className={`accordion-button ${isSectionActive(['/investor-relations', '/financial-highlights', '/shareholder-information', '/corporate-governance', '/code-and-policy', '/other-documents']) ? 'mobile-active' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="true"
                                                aria-controls="collapseSix"
                                            >
                                                Investor Relations
                                            </button>
                                        </a><div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#investor-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/financial-highlights">Financial Highlights </NavLink></li>
                                                    <li><NavLink to="/shareholder-information">Shareholder Information</NavLink></li>
                                                    <li><NavLink to="/corporate-governance">Corporate Governance</NavLink></li>
                                                    <li><NavLink to="/code-and-policy">Code and Policy</NavLink></li>
                                                    <li><NavLink to="/other-documents">Other Documents</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item">
                                <GlassButton href="/contact" title="Contact" />

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar