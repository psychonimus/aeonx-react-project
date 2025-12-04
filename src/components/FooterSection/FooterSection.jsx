import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhoneAlt, FaFileDownload } from "react-icons/fa";
import logo from "/images/aeonx-logo-white.svg"
import GlassButton from "../GlassButton/GlassButton";
import { FaDownload } from "react-icons/fa6";
import half from "/images/aeonx-digital-half.webp"

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
            <GlassButton
              title="Company Deck"
              icon={() => <FaDownload />}
            />
          </div>

          {/* Solutions */}
          <div className="col-6 col-lg-2 col-md-4">
            <h6 className="fw-bold mb-2">Solutions</h6>
            <ul className="list-unstyled text-light small">
              <li>Business Solutions</li>
              <li>Cloud Solutions</li>
              <li>SAP on AWS</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2 col-md-4">
            <h6 className="fw-bold mb-2">Services</h6>
            <ul className="list-unstyled text-light small">
              <li>Implementation</li>
              <li>Support</li>
              <li>Migration</li>
              <li>Integration</li>
              <li>Innovation</li>
              <li>Staffing</li>
            </ul>
          </div>



          {/* Case Studies */}
          <div className="col-6 col-lg-2 col-md-4">
            <h6 className="fw-bold mb-2">Case Studies</h6>
            <ul className="list-unstyled text-light small">
              <li>Case Study 1</li>
              <li>Case Study 2</li>
              <li>Case Study 3</li>
              <li>Case Study 4</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-3 col-md-4">
            <h6 className="fw-bold mb-2">Quick Links</h6>
            <ul className="list-unstyled text-light small">
              <li>About Us</li>
              <li>Solutions</li>
              <li>Services</li>
              <li>Industries</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
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
            <a href="https://www.instagram.com/aeonx.digital?igsh=MTFuNjljczFqdnoyYQ==">
              <button class="Btn instagram">
              <svg
                class="svgIcon"
                viewBox="0 0 448 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
              <span class="text">Instagram</span>
            </button>
            </a>

            <a href="https://youtube.com/@aeonxdigital?si=Shy3x-210aaojI5y">
              <button class="Btn youtube">
              <svg
                class="svgIcon"
                viewBox="0 0 576 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M549.655 148.28c-6.281-23.64-24.041-42.396-47.655-48.685C462.923 85 288 85 288 85S113.077 85 74 99.595c-23.614 6.289-41.374 25.045-47.655 48.685-12.614 47.328-12.614 147.717-12.614 147.717s0 100.39 12.614 147.718c6.281 23.64 24.041 42.396 47.655 48.684C113.077 427 288 427 288 427s174.923 0 214-14.595c23.614-6.289 41.374-25.045 47.655-48.685 12.614-47.328 12.614-147.718 12.614-147.718s0-100.389-12.614-147.717zM240 336V176l144 80-144 80z"
                ></path>
              </svg>
              <span class="text">YouTube</span>
            </button>
            </a>

            <a href="https://www.facebook.com/share/1G9mrnhe1c/?mibextid=wwXIfr">
              <button class="Btn facebook" >
              <svg
                class="svgIcon"
                viewBox="0 0 320 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.07 44.38-121.07 124.72v70.62H22.89V288h81.4v224h100.2V288z"
                ></path>
              </svg>
              <span class="text">Facebook</span>
            </button>
            </a>

            <a href="https://x.com/aeonxdigital?s=21">
              <button class="Btn twitter">
              <svg
                class="svgIcon"
                viewBox="0 0 512 512"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM365.7 442h20L157.6 73.2H136.4L365.7 442z"
                ></path>
              </svg>
              <span class="text">X/Twitter</span>
            </button>
            </a>

          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="text-end">
              <small className="text-light">Let’s Work Together</small>
              <h6 className="text-warning fw-bold mb-0">CALL AEONX</h6>
            </div>
            <div className="call-btn">
              <FaPhoneAlt />
            </div>
          </div>
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
