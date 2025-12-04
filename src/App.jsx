import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import FooterSection from "./components/FooterSection/FooterSection";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ContactForm from "./components/ContactPageComponents/ContactForm";

import "./popup.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CareersPage from "./pages/Careers";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import LifeAtAeonx from "./pages/LifeAtAeonx";
import BlogOne from "./pages/AllBlogs/BlogOne";
import CaseStudyOne from "./pages/AllCaseStudies/CaseStudyOne";
import SAPFocusedProducts from "./pages/SAPFocusedProducts";
import AWSProducts from "./pages/AWSProducts";
import InvestorRelations from "./pages/InvestorRelations";

import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Services from "./pages/Services";
import ContactFormPopup from "./components/ContactPageComponents/ContactFormPopup";
import JobDescOne from "./pages/JdPages/JobDescOne";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/case-study" element={<CaseStudyOne />} />


          <Route path="/blogs/is-rise-with-sap-really-opex-freindly" element={<BlogOne />} />


          <Route path="/aeonxlife" element={<LifeAtAeonx />} />
          <Route path="/sap-focused-products" element={<SAPFocusedProducts />} />
          <Route path="/aws-products" element={<AWSProducts />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers/job-desc-one" element={<JobDescOne />} />

        </Routes>


        <FloatingButton onClick={togglePopup} />
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content" data-lenis-prevent>
              <button className="popup-close-btn" onClick={togglePopup}>&times;</button>
              <ContactFormPopup />
            </div>
          </div>
        )}
        <FooterSection />
      </BrowserRouter>
    </ReactLenis>
  );
};

export default App;
