import React from "react";
import { Helmet } from "react-helmet";
import LifeHero from "../components/LifeAtAeonxPageSections/LifeHero";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import GlassButton from "../components/GlassButton/GlassButton";
import aboutSap from "/images/rise-with-sap.png";
import growWithSapAbout from "/images/grow-with-sap.png";
import sapSuccessFactor from '/images/SAP-SuccessFactors.png'
import sapConcurAbout from '/images/SAP-Concur-full.png'
import risewithsap from "/images/risewithsap.webp";
import partnership from "/images/partnership.webp";
import procurement from "/images/control.webp";
import implementation from "/images/implementation.webp";
import smallBusiness from "/images/small-businesses.webp";
import cloud from "/images/cloud-computing.webp";
import cost from "/images/price-down.webp";
import collab from "/images/collaboration.webp";
import SapSuccess from "/images/SAP-SuccessFactors-2.webp";
import Ai from "/images/ai.webp";
import SapAriba from "/images/sap-ariba.webp";
import SapAribaBg from "/images/sap-ariba.png";
import SapBtp from "/images/sapbtp.webp";
import SapBtpBg from "/images/SAP-BTP.png";
import cloudAnalytics from '/images/sap-analytics-cloud.png'
import ctaImg from "/images/sap-cta.webp";
import sapConcur from '/images/sap-concur.png'
import SapAnalyticsCloud from '/images/SAP-Analytics-Cloud-about.png'

import growWithSap from '/images/grow-with-sap-logo.png'

const SAPFocusedProducts = () => {
  return (
    <>
      <Helmet>
        <title>SAP Focused Products - Aeonx Digital</title>
        <meta
          name="description"
          content="At AeonX Digital, we are committed to fostering a dynamic, inclusive, and innovative workplace culture. Our team of dedicated professionals is dedicated to delivering exceptional results and creating a positive impact in the industry."
        />
        <meta
          name="keywords"
          content="careers, job opportunities, employment, recruitment, talent acquisition, talent development, employee engagement, employee retention, employee satisfaction, employee well-being"
        />
        <meta name="author" content="AeonX Digital" />
      </Helmet>
      <section
        className="life-hero sap-focused-products-hero" style={{ backgroundImage:"url(/images/sap-products-banner.png)" }}
      // style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="life-hero-content text-center d-flex flex-column justify-content-center  h-100" >
                {/* <p className="eyebrow">SAP Focused Products</p> */}
                <h1 className="mb-2">
                  Empowering Business Growth with Proven SAP Excellence
                </h1>
                <p className="mb-4">
                  AeonX Digital brings 7+ years of hands-on SAP expertise,
                  delivering next-gen digital transformation, S/4HANA
                  implementation, and high-performance AMS support. With a team
                  of 100+ SAP-certified consultants, we have successfully
                  executed 25+ SAP S/4HANA implementation and support projects
                  and proudly partner with 8 publicly listed enterprises in
                  India. Our 24/7 Global Delivery Center currently supports
                  10,000+ SAP end users, ensuring uninterrupted business
                  operations and measurable ROI.
                </p>

                <div className="event-hero-buttons d-flex justify-content-center">
                  <GlassButton
                    title="Explore SAP Products"
                    icon={() => <IoIosArrowDropdownCircle size={30} />}
                    href="/sap-focused-products#rise-with-sap"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='about-sap-products'>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6">
                            <h2>Our Core  Values</h2>
                            <h4>Principles That Guide Every Step We Take</h4>
                        </div>
                        <div className="col-md-6">
                            <p>AeonX Digital brings 7+ years of hands-on SAP expertise, delivering next-gen digital transformation, S/4HANA implementation, and high-performance AMS support. With a team of 100+ SAP-certified consultants, we have successfully executed 25+ SAP S/4HANA implementation and support projects and proudly partner with 8 publicly listed enterprises in India. Our 24/7 Global Delivery Center currently supports 10,000+ SAP end users, ensuring uninterrupted business operations and measurable ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

      <section className="rise-with-sap my-5" id="rise-with-sap">
        <div className="container">
          <div className="row grey-bg">
            <div className="col-md-6 left py-4 px-5">
              <img src={risewithsap} alt="" />
              <h2>Rise With SAP</h2>
              <p>
                RISE with SAP is a powerful business transformation package
                designed to help companies shift to cloud-based SAP solutions
                with speed, flexibility, and minimal disruption. It consolidates
                everything you need from licensing, tools, and services into one
                subscription contract, making digital transformation easier,
                faster, and more cost-effective.<br></br>
                Ideal for organizations with limited IT resources or technical
                capacity, RISE with SAP enables seamless migration to S/4HANA
                and SAP BTP without impacting ongoing operations or budgets.
              </p>
            </div>
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <img src={aboutSap} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Why RISE With SAP?</h2>
          </div>
          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={partnership} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex align-items-center">
              <h4>
                Single contract, single subscription covering cloud editions,
                SAP BTP, and business network access
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={procurement} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex align-items-center">
              <h4>Streamlined procurement & vendor management</h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={implementation} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Flexible implementation tailored to business-specific needs
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={smallBusiness} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Works for businesses with smaller IT footprints or limited
                budgets
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cloud} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Access to SAP Cloud Application Lifecycle Management (CALM) at
                no cost
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cost} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>Reduces maintenance costs for ECC users</h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={collab} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Enables collaboration across suppliers and trading partners
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* grow with sap  */}
      <section className="rise-with-sap my-5" id="grow-with-sap">
        <div className="container">
          <div className="row flex-row-reverse grey-bg">
            <div className="col-md-6 left py-4 px-5">
              <img src={growWithSap} alt="" style={{ filter: "brightness(0)" }} />
              <h2>GROW WITH SAP</h2>
              <p>
                Grow with SAP is designed to help fast-growing organizations scale confidently with a modern, cloud-based ERP foundation. Built for companies that need speed, agility, and simplicity, it delivers ready-to-run industry best practices, intelligent analytics, and enterprise-grade capabilities, all packaged in an accessible, cost-efficient subscription model.
              </p>
              <p>Perfect for businesses looking to expand without the complexity of traditional ERP deployments, Grow with SAP enables rapid adoption of SAP S/4HANA Cloud, giving teams real-time visibility, streamlined operations, and the flexibility to evolve as the business grows.</p>
            </div>
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <img src={growWithSapAbout} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Why Grow With SAP? </h2>
          </div>
          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={partnership} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex align-items-center">
              <h4>
                Ready-to-run cloud ERP for fast implementation
              </h4>

            </div>
            <div className="col-md-5">
              <p>
                Adopt SAP S/4HANA Cloud quickly with preconfigured industry best practices tailored for growing businesses.
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={procurement} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex align-items-center">
              <h4>Scales easily as your business grows</h4>
            </div>
            <div className="col-md-5">
              <p>
                Add users, processes, and locations seamlessly without redesigning your ERP or disrupting operations.
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={implementation} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Affordable, predictable subscription pricing
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                Built for SMBs and mid-market companies, offering high value without large upfront investments.
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={smallBusiness} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Embedded analytics for faster decision-making
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                AI-powered insights, dashboards, and real-time reporting help teams act quickly and confidently.

              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cloud} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Extend and innovate easily with SAP BTP
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                Leverage low-code tools, automation, and ready-made integrations to build new capabilities as you scale.

              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cloud} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Enterprise-grade security and reliability from day one
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                Built on SAP’s trusted cloud infrastructure with strong compliance, data protection, and uptime.
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cost} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4> Simplified onboarding for teams with limited IT resources</h4>
            </div>
            <div className="col-md-5">
              <p>
                Guided configuration, accelerators, and best practices reduce dependency on large IT teams.

              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={collab} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                Enables collaboration across suppliers and trading partners
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sap success factor section starts  */}
      <section className="rise-with-sap my-5" id="sap-success-factor">
        <div className="container">
          <div className="row flex-row-reverse grey-bg">
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <img src={sapSuccessFactor} alt="" />
              </div>
            </div>
            <div className="col-md-6 left py-4 px-5">
              <img src={SapSuccess} alt="" />
              <h2>SAP SuccessFactors</h2>
              <p>
                SAP SuccessFactors is a leading cloud-based Human Capital
                Management (HCM) solution designed to enhance employee
                experience and streamline HR processes. As a global leader in
                Human Experience Management (HXM), it combines intelligent
                technologies like machine learning and digital assistants to
                help organizations build agile, high-performing teams.
              </p>
              <p>
                With intuitive, mobile-friendly interfaces, SuccessFactors
                offers an engaging and personalized experience for employees,
                managers, and HR leaders—helping them connect, collaborate, and
                make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Key Advantages </h2>
          </div>
          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cloud} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex align-items-center">
              <h4>
                Cloud-based HCM & HXM platform for end-to-end HR transformation
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={Ai} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex align-items-center">
              <h4>
                AI-powered tools, including digital assistants and machine
                learning
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={implementation} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>
                User-friendly interfaces across all devices for seamless
                engagement
              </h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={smallBusiness} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>Enhanced communication & collaboration among employees</h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cloud} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>Real-time insights for smarter, faster decision-making</h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={cost} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>Effortless integration with SAP ERP & enterprise systems</h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>

          <div className="row point py-4">
            <div className="col-md-1 d-flex justify-content-start align-items-center">
              <div className="point-icon">
                <img src={collab} alt="" />
              </div>
            </div>
            <div className="col-md-6 point-text d-flex  align-items-center">
              <h4>Supports global HR operations with scalable architecture</h4>
            </div>
            <div className="col-md-5">
              <p>
                With a single contract and unified subscription, businesses can
                access cloud editions, SAP BTP, and the SAP Business Network
                without managing multiple licensing layers
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* sap-concur section */}

      <section className="rise-with-sap my-5" id="sap-success-factor">
        <div className="container">
          <div className="row grey-bg">
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <img src={sapConcurAbout} alt="" />
              </div>
            </div>
            <div className="col-md-6 left py-4 px-5">
              <img src={sapConcur} alt="" />
              <h2>SAP Concur</h2>
              <p>
                SAP Concur transforms the way organizations manage travel, expenses, and invoices by providing a fully integrated, cloud-based platform that connects spend data across your enterprise. From automated expense reporting to intelligent travel booking and invoice management, SAP Concur ensures efficiency, transparency, and compliance at every step. As a trusted SAP implementation partner, we guide companies through seamless deployment, customization, and integration with existing ERP systems, enabling faster adoption and maximizing ROI. Our expertise ensures that your workforce can focus on business priorities, while the system manages spend intelligently and accurately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Why SAP Concur</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>
                    Automated Expense Management: Reduce manual entry and errors with intelligent workflows.
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={Ai} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>
                    Real-Time Visibility: Access up-to-date spend data for smarter decision-making.
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={implementation} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Compliance & Control : Enforce company policies and ensure regulatory compliance.
                  </h4>
                </div>
              </div>
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cost} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Rapid ROI: Accelerated adoption and measurable benefits through expert implementation.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={smallBusiness} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Integrated Travel Booking: Seamlessly connect travel planning with expense reporting.
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Scalable & Cloud-Based: Flexible deployment for businesses of all sizes, with secure cloud infrastructure.

                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cost} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Actionable Insights: Analytics and reporting to optimize costs and improve financial planning.
                  </h4>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>




      {/* sap success factors  */}


      {/* sap ariba section starts  */}

      <section className="rise-with-sap my-5" id="sap-ariba">
        <div className="container">
          <div className="row grey-bg">
            <div className="col-md-6 left py-4 px-5">
              <img src={SapAriba} alt="" />
              <h2>SAP Ariba</h2>
              <p>
                SAP Ariba is a cloud-based procurement and supply chain solution
                that helps businesses operate faster, reduce costs, and make
                smarter purchasing decisions. By connecting organizations to the
                world’s largest B2B network, it streamlines supplier
                collaboration and enhances procurement efficiency at scale.
              </p>
            </div>
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <img src={SapAribaBg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Key Benefits </h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>
                    Access to the world’s largest supplier network for smarter
                    sourcing
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={Ai} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>
                    Real-time collaboration with global vendors and trading
                    partners
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={implementation} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Streamlined procurement workflows with simplified processes
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={smallBusiness} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Increased efficiency and reduced operational spend</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Scalable and dynamic platform connecting millions of
                    suppliers
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cost} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Improved visibility and control across the supply chain
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sap-btp-section  */}
      <section className="rise-with-sap my-5" id="sap-btp">
        <div className="container">
          <div className="row grey-bg">
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                <img src={SapBtpBg} alt="" />
              </div>
            </div>

            <div className="col-md-6 left py-4 px-5">
              <img src={SapBtp} alt="" style={{ width: "100px" }} />
              <h2>SAP BTP</h2>
              <p>
                SAP Business Technology Platform (SAP BTP) empowers
                organizations to innovate faster, connect systems seamlessly,
                and turn data into actionable intelligence. Designed with
                flexibility, scalability, and enterprise-grade security, SAP BTP
                unifies data management, analytics, AI, application development,
                automation, and integration in one powerful cloud platform.
              </p>
              <p>
                It enables businesses to personalize SAP applications, build
                extensions without disruption, and accelerate digital
                transformation using real-time insights and embedded business
                context. Whether you're modernizing legacy systems or creating
                new digital solutions, SAP BTP helps you innovate at speed,
                automate workflows, and drive business growth efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Key Benefits </h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>
                    Unified platform for data, AI, automation & app development
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={Ai} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>Seamless SAP and multi-cloud integration</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={implementation} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Enables faster innovation with business context</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={smallBusiness} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Customizable user experiences across SAP applications</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Runs on a secure, enterprise-grade cloud infrastructure
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cost} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Accelerates digital transformation & IT modernization</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* sap analytics cloud section starts  */}
      <section className="rise-with-sap my-5" id="sap-btp">
        <div className="container">
          <div className="row flex-row-reverse grey-bg">
            <div className="col-md-6 right px-0">
              <div
                className="img-container"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <img src={SapAnalyticsCloud} alt="" />
              </div>
            </div>

            <div className="col-md-6 left py-4 px-5">
              <img src={cloudAnalytics} alt="" style={{ width: "100px" }} />
              <h2>SAP Analytics Cloud</h2>
              <p>
                SAP Analytics Cloud combines business intelligence, planning, and predictive analytics in a single, cloud-native platform. It empowers organizations to analyze real-time data, create interactive dashboards, and perform collaborative planning, all while integrating seamlessly with SAP and third-party systems. As a trusted SAP implementation partner, we help companies deploy SAC to unlock data-driven decision-making, enabling leaders to respond quickly to market changes, optimize operations, and identify new growth opportunities. With our guidance, organizations can turn complex data into clear insights, improve forecasting accuracy, and foster a culture of analytics-driven performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="major-points my-5">
        <div className="container">
          <div className="point-heading ">
            <h2>Why SAP Analytics Cloud</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>
                    Unified Analytics & Planning: Combine BI, predictive analytics, and planning in one platform.
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={Ai} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex align-items-center">
                  <h4>Real-Time Insights: Make decisions based on up-to-date, integrated data.</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={implementation} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Intuitive Dashboards: Create interactive visualizations for faster understanding of trends.</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={implementation} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Cloud-Native & Scalable : Secure, flexible, and accessible anywhere, anytime.</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={smallBusiness} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Predictive Analytics: Leverage AI/ML to forecast outcomes and identify risks.</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cloud} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>
                    Seamless Integration: Connect with SAP ERP, S/4HANA, and non-SAP systems.
                  </h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cost} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Collaborative Planning: Enable cross-functional teams to plan and adjust together.</h4>
                </div>
              </div>

              <div className="row point py-4">
                <div className="col-md-2 d-flex justify-content-start align-items-center">
                  <div className="point-icon">
                    <img src={cost} alt="" />
                  </div>
                </div>
                <div className="col-md-10 point-text d-flex  align-items-center">
                  <h4>Actionable Intelligence: Transform complex data into meaningful, business-driving insights.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* cta section  */}

      <div className="container sap-cta mb-5  ">
        <div className="row py-4 px-5 text-white">
          <div className="col-md-6">
            <div className="text-part">
              <h2>Ready to transform your business with SAP?</h2>
              <p>
                Let's discuss your SAP modernization journey and how we can help
                you achieve your goals.
              </p>
              <GlassButton href="/contact" title="Get in touch" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-part">
              <img src={ctaImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SAPFocusedProducts;
