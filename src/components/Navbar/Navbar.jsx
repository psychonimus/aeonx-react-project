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
                        <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox" />
                        <label class="icon-menu" for="check-icon">
                            <div class="bar bar--1"></div>
                            <div class="bar bar--2"></div>
                            <div class="bar bar--3"></div>
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
                                    to="/sap-focused-products"
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
                                                        <li><NavLink to="/sap-focused-products">SAP Products </NavLink></li>
                                                        <li><NavLink to="/aws-products">AWS Products</NavLink></li>
                                                        <li><NavLink to="/aeonx-flagship-products">AeonX Flagship Products</NavLink></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="nav-item d-lg-none">
                                <div class="accordion" id="products-mobile">
                                    <div class="accordion-item">
                                        <a class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Products</button>
                                        </a><div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#products-mobile">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li><a href="#">SAP Products </a></li>
                                                    <li><a href="#">AWS Products</a></li>
                                                    <li><a href="#">AeonX Flagship Products</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            




                            <li className="nav-item has-mega-menu d-none d-lg-block">
                                <a className="nav-link" href="#">Services</a>
                                <div className="mega-menu">
                                    <div className="mega-menu-content py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 d-none d-lg-block">
                                                    <h4 >SERVICES</h4>
                                                    <p>Discover the diverse range of services we offer, from precision manufacturing to cutting-edge</p>
                                                </div>
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li><a href="#">Implementaion </a></li>
                                                        <li><a href="#">Support</a></li>
                                                        <li><a href="#">Migration</a></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li><a href="#">Integration </a></li>
                                                        <li><a href="#">Innovation</a></li>
                                                        <li><a href="#">Staffing</a></li>

                                                    </ul>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item has-mega-menu d-none d-lg-block">
                                <a className="nav-link " href="#">Industries</a>
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
                                                        <li><a href="#">Manufacturing </a></li>
                                                        <li><a href="#">Mining & Minerals</a></li>
                                                        <li><a href="#">Logistics</a></li>
                                                        <li><a href="#">Chemical</a></li>
                                                        <li><a href="#">Pharmaceuticals </a></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>

                                                        <li><a href="#">Healthcare</a></li>
                                                        <li><a href="#">Oil & Gas</a></li>
                                                        <li><a href="#">Telecom</a></li>
                                                        <li><a href="#">Retail</a></li>

                                                    </ul>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item has-mega-menu d-none d-lg-block">
                                <NavLink
                                    to="/blogs"
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
                                                        <li><a href="#">SAP (Implementation playbooks) </a></li>
                                                        <li><a href="#">AWS (Cloud optimization guides)</a></li>
                                                        <li><a href="#">Product Spotlight (Deep dives)</a></li>


                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>


                                                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                                                        <li><NavLink to="/events">Events</NavLink></li>
                                                        <li><NavLink to="/aeonxlife">Life at AeonX Digital</NavLink></li>

                                                    </ul>
                                                </div>

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
                                                        <li><a href="#">Leadership</a></li>
                                                        <li><a href="#">Partners</a></li>
                                                        <li><a href="#">Events</a></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-3">

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="nav-item">
                                <NavLink to="/careers" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Careers</NavLink>
                            </li>

                            <li className='nav-item'>
                                <NavLink to="/investor-relations" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Investor Relations</NavLink>
                            </li>


                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><GlassButton href="" title="Contact" /></NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar