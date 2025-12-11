import React, { useRef, useEffect, useState } from 'react'
import logo from '/images/aeonx-logo-white.svg'
import GlassButton from '../GlassButton/GlassButton'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(window.scrollY);

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
                <div className="container">
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





                            <li className="nav-item has-mega-menu d-none d-lg-block">
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
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >PRODUCTS</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
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
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Products</button>
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






                            <li className="nav-item has-mega-menu d-none d-lg-block">
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
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >Services</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/services#implementation">Implementation </NavLink></li>
                                                        <li><NavLink to="/services#support">Support</NavLink></li>
                                                        <li><NavLink to="/services#migration">Migration</NavLink></li>


                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li><NavLink to="/services#integration">Integration </NavLink></li>
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
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Services</button>
                                        </a><div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#services-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/services#implementation">Implementation </NavLink></li>
                                                    <li><NavLink to="/services#support">Support</NavLink></li>
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


                            <li className="nav-item has-mega-menu d-none d-lg-block">
                                <NavLink to="/industries" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Industries</NavLink>
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >INDUSTRIES</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><NavLink to="/industries">Manufacturing </NavLink></li>
                                                        <li><NavLink to="/industries">Mining & Minerals</NavLink></li>
                                                        <li><NavLink to="/industries">Logistics</NavLink></li>
                                                        <li><NavLink to="/industries">Chemical</NavLink></li>
                                                        <li><NavLink to="/industries">Pharmaceuticals </NavLink></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>

                                                        <li><NavLink to="/industries">Healthcare</NavLink></li>
                                                        <li><NavLink to="/industries">Oil & Gas</NavLink></li>
                                                        <li><NavLink to="/industries">Telecom</NavLink></li>
                                                        <li><NavLink to="/industries">Retail</NavLink></li>

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
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Industries</button>
                                        </a><div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#industries-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/industries">Manufacturing </NavLink></li>
                                                    <li><NavLink to="/industries">Mining & Minerals</NavLink></li>
                                                    <li><NavLink to="/industries">Logistics</NavLink></li>
                                                    <li><NavLink to="/industries">Chemical</NavLink></li>
                                                    <li><NavLink to="/industries">Pharmaceuticals </NavLink></li>
                                                    <li><NavLink to="/industries">Healthcare</NavLink></li>
                                                    <li><NavLink to="/industries">Oil & Gas</NavLink></li>
                                                    <li><NavLink to="/industries">Telecom</NavLink></li>
                                                    <li><NavLink to="/industries">Retail</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>



                            <li className="nav-item has-mega-menu d-none d-lg-block">
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
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >INSIGHTS</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><a target='_blank' href="https://help.sap.com/doc/download_multimedia_ebooks_businessone90_tb1200_01_01_story_html/9.0/en-US/story_content/external_files/implementation%20Tools%20-%20Implementation%20Methodology.pdf">SAP (Implementation playbooks) </a></li>
                                                        <li><a target='_blank' href="https://aws.amazon.com/aws-cost-management/cost-optimization/">AWS (Cloud optimization guides)</a></li>
                                                        <li><a target='_blank' href="#">Product Spotlight (Deep dives)</a></li>


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
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">Insights</button>
                                        </a><div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#industries-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><a target='_blank' href="https://help.sap.com/doc/download_multimedia_ebooks_businessone90_tb1200_01_01_story_html/9.0/en-US/story_content/external_files/implementation%20Tools%20-%20Implementation%20Methodology.pdf">SAP (Implementation playbooks) </a></li>
                                                    <li><a target='_blank' href="https://aws.amazon.com/aws-cost-management/cost-optimization/">AWS (Cloud optimization guides)</a></li>
                                                    <li><a target='_blank' href="#">Product Spotlight (Deep dives)</a></li>
                                                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                                                    <li><NavLink to="/events">Events</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item has-mega-menu d-none d-lg-block">
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Company</NavLink>
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >COMPANY</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
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
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">Company</button>
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

                            <li className="nav-item has-mega-menu d-none d-lg-block">
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
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >Investor Relations</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
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

                            <li className="nav-item d-lg-none mt-1">
                                <div className="accordion no-border" id="investor-mobile">
                                    <div className="accordion-item">
                                        <a className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">Investor Relations</button>
                                        </a><div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#investor-mobile">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li><NavLink to="/investor-relations">Financial Highlights </NavLink></li>
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