
import React, { useState, useEffect, useRef } from "react";
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
import CaseStudiesAll from "./pages/CaseStudiesAll";

import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Services from "./pages/Services";
import ContactFormPopup from "./components/ContactPageComponents/ContactFormPopup";
import JobDescOne from "./pages/JdPages/JobDescOne";
import Industries from "./pages/Industries";
import BlogTwo from "./pages/AllBlogs/BlogTwo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import FinancialHighlights from "./pages/FinancialHighlights";
import ShareholderInformation from "./pages/ShareholderInformation";
import CorporateGovernance from "./pages/CorporateGovernance";
import CodeAndPolicy from "./pages/CodeAndPolicy";
import OtherDocuments from "./pages/OtherDocuments";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const lenisRef = useRef();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
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
          <Route path="/case-studies" element={<CaseStudiesAll />} />


          <Route path="/blogs/is-rise-with-sap-really-opex-freindly" element={<BlogOne />} />
          <Route path="/blogs/sap-migration-mistakes" element={<BlogTwo />} />


          <Route path="/aeonxlife" element={<LifeAtAeonx />} />
          <Route path="/sap-focused-products" element={<SAPFocusedProducts />} />
          <Route path="/aws-products" element={<AWSProducts />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/financial-highlights" element={<FinancialHighlights />} />
          <Route path="/shareholder-information" element={<ShareholderInformation />} />
          <Route path="/corporate-governance" element={<CorporateGovernance />} />
          <Route path="/code-and-policy" element={<CodeAndPolicy />} />
          <Route path="/other-documents" element={<OtherDocuments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers/job-desc-one" element={<JobDescOne />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/case-studies" element={<CaseStudiesAll />} />

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
