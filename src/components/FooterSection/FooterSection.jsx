import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhoneAlt, FaFileDownload } from "react-icons/fa";
import logo from "/images/aeonx-logo-white.svg"
import GlassButton from "../GlassButton/GlassButton";
import { FaDownload } from "react-icons/fa6";
import half from "/images/aeonx-digital-half.webp"
import { Link, NavLink } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="footer text-white pt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Left section - Logo & Description */}
          <div className="col-12 col-lg-3 col-md-8">
            <div className="aeonx-logo-footer">
              <a href="">
                <img src={logo} alt="Logo" className="d-inline-block align-top" />
              </a>
            </div>
            <p className="mt-2 small text-light">
              AeonX offers a simple method by treating infrastructure as code to manage a group of linked AWS and third-party resources.
              It emphasizes delivering provision so you can run your business fast and in a reliable fashion with zero hassles.
            </p>
            {/* <GlassButton
              title="Company Deck"
              icon={() => <FaDownload />}
              url="/investors/AeonX Digital Capability Deck - Latest Version.pdf"
            /> */}
            <a className="text-decoration-none" href="/investors/AeonX Digital Capability Deck - Latest Version.pdf" download="AeonX Digital Capability Deck - Latest Version.pdf">
              <button className='slide-button d-flex items-center align-items-center gap-2 text-start'>
                    Company Deck  <FaDownload />
            </button>
            </a>
          </div>

          {/* Solutions */}
          <div className="col-6 col-lg-2 col-md-4">
            <h6 className="fw-bold mb-2">Products</h6>
            <ul className="list-unstyled text-light small">
              <li><Link className="text-decoration-none text-light" to="/sap-focused-products">SAP Service Portfolio</Link></li>
              <li><Link className="text-decoration-none text-light" to="/aws-products">AWS Service Portfolio</Link></li>
              <li><Link className="text-decoration-none text-light" to="/aeonx-flagship-products">AeonX Flagship Products</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2 col-md-4">
            <h6 className="fw-bold mb-2">Services</h6>
            <ul className="list-unstyled text-light small">
              <li><Link className="text-decoration-none text-light" to="/services#implementation">Implementation</Link></li>
              <li><Link className="text-decoration-none text-light" to="/services#support">Support</Link></li>
              <li><Link className="text-decoration-none text-light" to="/services#migration">Migration</Link></li>
              <li><Link className="text-decoration-none text-light" to="/services#integration">Integration</Link></li>
              <li><Link className="text-decoration-none text-light" to="/services#innovation">Innovation</Link></li>
              <li><Link className="text-decoration-none text-light" to="/services#staffing">Staffing</Link></li>
            </ul>
          </div>



          {/* Case Studies */}
          <div className="col-6 col-lg-2 col-md-4">
            <h6 className="fw-bold mb-2">Case Studies</h6>
            <ul className="list-unstyled text-light small">
              <li><Link className="text-decoration-none text-light" to="/case-studies?category=SAP">SAP Case Studies</Link></li>
              <li><Link className="text-decoration-none text-light" to="/case-studies?category=AWS">AWS Case Studies</Link></li>
              <li><Link className="text-decoration-none text-light" to="/case-studies?category=Aeonx">AeonX Case Studies</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-3 col-md-4">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <ul className="list-unstyled text-light small">
              <li><Link className="text-decoration-none text-light" to="/about">About Us</Link></li>

              <li><Link className="text-decoration-none text-light" to="/services">Services</Link></li>
              <li><Link className="text-decoration-none text-light" to="/industries">Industries</Link></li>
              <li><Link className="text-decoration-none text-light" to="/contact">Contact</Link></li>
              <li><Link className="text-decoration-none text-light" to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="text-decoration-none text-light" to="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div className="social-icons-footer d-flex gap-2 mb-2 mb-md-0">
            {/* <a href="#" className="me-3 ">Instagram</a>
            <a href="#" className="me-3 ">Facebook</a>
            <a href="#" className="me-3 ">Linkedin</a>
            <a href="#" className="">Twitter</a> */}
            <a href="https://www.linkedin.com/company/aeonx-digital/">
              <button className="Btn linkedin">
                <svg
                  className="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.28c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
                <span className="text">LinkedIn</span>
              </button>
            </a>

            <a href="https://www.instagram.com/aeonx.digital?igsh=MTFuNjljczFqdnoyYQ==">
              <button className="Btn instagram">
                <svg
                  className="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
                <span className="text">Instagram</span>
              </button>
            </a>

            <a href="https://www.facebook.com/share/1G9mrnhe1c/?mibextid=wwXIfr">
              <button className="Btn facebook" >
                <svg
                  className="svgIcon"
                  viewBox="0 0 320 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.07 44.38-121.07 124.72v70.62H22.89V288h81.4v224h100.2V288z"
                  ></path>
                </svg>
                <span className="text">Facebook</span>
              </button>
            </a>

            <a href="https://youtube.com/@aeonxdigital?si=Shy3x-210aaojI5y">
              <button className="Btn youtube">
                <svg
                  className="svgIcon"
                  viewBox="0 0 576 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 47.907-11.412 148.098-11.412 148.098s0 100.19 11.412 148.098c6.281 23.65 24.787 42.276 48.284 48.597 42.591 11.486 213.371 11.486 213.371 11.486s170.78 0 213.371-11.486c23.497-6.321 42.003-24.947 48.284-48.597 11.412-47.907 11.412-148.098 11.412-148.098s0-100.19-11.412-148.098zM232 337.741V161.07l155.676 88.336-155.676 88.335z"
                  ></path>
                </svg>
                <span className="text">YouTube</span>
              </button>
            </a>

            <a href="https://x.com/aeonxdigital?s=21">
              <button className="Btn twitter">
                <svg
                  className="svgIcon"
                  viewBox="0 0 512 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM365.7 442h20L157.6 73.2H136.4L365.7 442z"
                  ></path>
                </svg>
                <span className="text">X/Twitter</span>
              </button>
            </a>

          </div>

          <a href="tel:+91 22 66221640" className="text-decoration-none d-block d-md-none">
            <div className="d-flex align-items-center gap-2">
              <div className="text-end">
                <small className="text-light">Let’s Work Together</small>
                <h6 className="text-warning fw-bold mb-0">CALL AEONX</h6>
              </div>
              <div className="call-btn">
                <FaPhoneAlt />
              </div>
            </div>
          </a>

          <NavLink to="/contact#contact-form" className="text-decoration-none d-none d-md-block ">
            <div className="d-flex align-items-center gap-2">
              <div className="text-end">
                <small className="text-light">Let’s Work Together</small>
                <h6 className="text-warning fw-bold mb-0">CALL AEONX</h6>
              </div>
              <div className="call-btn">
                <FaPhoneAlt />
              </div>
            </div>
          </NavLink>
        </div>
        <hr className="border-light my-4" />

        <div className="footer-img">
          <h6 className="mb-4">© 2025 AeonX Digital. All rights reserved.</h6>
          <img src={half} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
