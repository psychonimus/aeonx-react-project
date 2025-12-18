import React from "react";
import { Helmet } from "react-helmet";
import LifeHero from "../components/LifeAtAeonxPageSections/LifeHero";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import GlassButton from "../components/GlassButton/GlassButton";
import aboutSap from "/images/rise-with-sap.webp";
import growWithSapAbout from "/images/grow-with-sap.webp";
import sapSuccessFactor from '/images/SAP-SuccessFactors.webp'
import sapConcurAbout from '/images/SAP-Concur-full.webp'
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
import SapAriba from "/images/sap-ariba-top.webp";
import SapAribaBg from "/images/sap-ariba.webp";
import SapBtp from "/images/sapbtp.webp";
import SapBtpBg from "/images/SAP-BTP.webp";
import cloudAnalytics from '/images/sap-analytics-cloud-dark.webp'
import ctaImg from "/images/sap-cta.webp";
import sapConcur from '/images/sap-concur-dark.webp'
import SapAnalyticsCloud from '/images/SAP-Analytics-Cloud-about.webp'

import growWithSap from '/images/grow-with-sap-logo.webp'

import { RiCloudFill, RiContractLine } from "react-icons/ri";
import { PiDesktopFill } from "react-icons/pi";
import { GrBusinessService } from "react-icons/gr";
import { IoMdBusiness } from "react-icons/io";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { MdOutlinePriceCheck } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoMdCloudCircle } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { IoExpandSharp } from "react-icons/io5";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { PiStarFourFill } from "react-icons/pi";
import { MdOutlineDevices } from "react-icons/md";
import { LuMessageSquareDot } from "react-icons/lu";
import { MdOutlineInsights } from "react-icons/md";
import { GrIntegration } from "react-icons/gr";
import { FaPeopleArrows } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { BsClipboard2Data } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
import { MdModeOfTravel } from "react-icons/md";
import { MdZoomOutMap } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDevicesOther } from "react-icons/md";
import { MdCloudDone } from "react-icons/md";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { CgInsights } from "react-icons/cg";
import { BsFileEarmarkBarGraph } from "react-icons/bs";











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
        className="life-hero sap-focused-products-hero" style={{ backgroundImage: "url(/images/sap-products-banner.webp)" }}
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

      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><RiContractLine size={20} /></div>
                  <h4>Single contract, single subscription covering cloud editions, SAP BTP, and business network access
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><PiDesktopFill size={20} /></div>
                  <h4>Streamlined procurement & vendor management
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><GrBusinessService size={20} /></div>
                  <h4>Flexible implementation tailored to business-specific needs
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><IoMdBusiness size={20} /></div>
                  <h4>Works for businesses with smaller IT footprints or limited budgets
                  </h4>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoCloudDownloadSharp size={20} /></div>
                  <h4>Access to SAP Cloud Application Lifecycle Management (CALM) at no cost

                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdOutlinePriceCheck size={20} /></div>
                  <h4>Reduces maintenance costs for ECC users
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiTeamFill size={20} /></div>
                  <h4>Enables collaboration across suppliers and trading partners
                  </h4>
                  
                </div>


              </div>
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

      

      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoMdCloudCircle size={25} /></div>
                  <h4>Ready-to-run cloud ERP for fast implementation
                  </h4>
                  <p>Adopt SAP S/4HANA Cloud quickly with preconfigured industry best practices tailored for growing businesses.
</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><VscGraphLine size={20} /></div>
                  <h4>Scales easily as your business grows
                  </h4>
                  <p>Add users, processes, and locations seamlessly without redesigning your ERP or disrupting operations.
</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiMoneyDollarCircleFill size={25} /></div>
                  <h4>Affordable, predictable subscription pricing
                  </h4>
                  <p>Built for SMBs and mid-market companies, offering high value without large upfront investments.
</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><SlGraph size={25} /></div>
                  <h4>Embedded analytics for faster decision-making
                  </h4>
                  <p>AI-powered insights, dashboards, and real-time reporting help teams act quickly and confidently.
</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoExpandSharp size={25} /></div>
                  <h4>Extend and innovate easily with SAP BTP
                  </h4>
                  <p>Leverage low-code tools, automation, and ready-made integrations to build new capabilities as you scale.
</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><BsPersonBoundingBox size={20} /></div>
                  <h4>Simplified onboarding for teams with limited IT resources
                  </h4>
                  <p>Guided configuration, accelerators, and best practices reduce dependency on large IT teams.
</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdSecurity size={20} /></div>
                  <h4>Enterprise-grade security and reliability from day one
                  </h4>
                  <p>Built on SAP’s trusted cloud infrastructure with strong compliance, data protection, and uptime.</p>

                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiTeamLine size={20} /></div>
                  <h4>Enables collaboration across suppliers and trading partners

                  </h4>
                  <p>With a single contract and unified subscription, businesses can access cloud editions, SAP BTP, and the SAP Business Network without managing multiple licensing layers
                  </p>
                </div>


              </div>
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

      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoCloudDownloadSharp size={20} /></div>
                  <h4>Cloud-based HCM & HXM platform for end-to-end HR transformation
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><PiStarFourFill size={20} /></div>
                  <h4>AI-powered tools, including digital assistants and machine learning
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdOutlineDevices size={20} /></div>
                  <h4>User-friendly interfaces across all devices for seamless engagement
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><LuMessageSquareDot size={20} /></div>
                  <h4>Enhanced communication & collaboration among employees
                  </h4>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><MdOutlineInsights size={20} /></div>
                  <h4>Real-time insights for smarter, faster decision-making
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><GrIntegration size={20} /></div>
                  <h4>Effortless integration with SAP ERP & enterprise systems
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><FaPeopleArrows size={20} /></div>
                  <h4>Supports global HR operations with scalable architecture
                  </h4>
                 
                </div>

                


              </div>
            </div>
          </div>
        </div>
      </section>


      {/* sap-concur section */}

      <section className="rise-with-sap my-5" id="sap-concur">
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

      

      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><GiExpense size={20} /></div>
                  <h4>Automated Expense Management
                  </h4>
                  <p>Reduce manual entry and errors with intelligent workflows.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><BsClipboard2Data size={20} /></div>
                  <h4>Real-Time Visibility
                  </h4>
                  <p>Access up-to-date spend data for smarter decision-making.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><GrCompliance size={20} /></div>
                  <h4>Compliance & Control
                  </h4>
                  <p>Enforce company policies and ensure regulatory compliance.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdModeOfTravel size={20} /></div>
                  <h4>Integrated Travel Booking
                  </h4>
                  <p>Seamlessly connect travel planning with expense reporting.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><MdZoomOutMap size={20} /></div>
                  <h4>Scalable & Cloud-Based
                  </h4>
                  <p>Flexible deployment for businesses of all sizes, with secure cloud infrastructure.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdOutlineInsights  size={20} /></div>
                  <h4>Actionable Insights
                  </h4>
                  <p>Analytics and reporting to optimize costs and improve financial planning.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><GrMoney size={20} /></div>
                  <h4>Rapid ROI
                  </h4>
                  <p>Accelerated adoption and measurable benefits through expert implementation.</p>
                 
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


      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoGitNetworkSharp size={20} /></div>
                  <h4>Access to the world’s largest supplier network for smarter sourcing
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiTeamFill size={20} /></div>
                  <h4>Real-time collaboration with global vendors and trading partners
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><GrBusinessService size={20} /></div>
                  <h4>Streamlined procurement workflows with simplified processes
                  </h4>
                  
                </div>

                
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoCloudDownloadSharp size={20} /></div>
                  <h4>Increased efficiency and reduced operational spend
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><FaGears size={20} /></div>
                  <h4>Scalable and dynamic platform connecting millions of suppliers
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><BsClipboard2Data  size={20} /></div>
                  <h4>Improved visibility and control across the supply chain
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

      

      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><TbDeviceDesktopCog size={20} /></div>
                  <h4>Unified platform for data, AI, automation & app development
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><IoCloudDownloadSharp size={20} /></div>
                  <h4>Seamless SAP and multi-cloud integration
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><GrTechnology size={20} /></div>
                  <h4>Enables faster innovation with business context
                  </h4>
                  
                </div>

                
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><MdOutlineDevicesOther size={20} /></div>
                  <h4>Customizable user experiences across SAP applications
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdCloudDone size={20} /></div>
                  <h4>Runs on a secure, enterprise-grade cloud infrastructure
                  </h4>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><AiFillCodeSandboxCircle size={20} /></div>
                  <h4>Accelerates digital transformation & IT modernization
                  </h4>
                 
                </div>

                


              </div>
            </div>
          </div>
        </div>
      </section>


      {/* sap analytics cloud section starts  */}
      <section className="rise-with-sap my-5" id="sap-analytics-cloud">
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


      <section className="feature-list my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><IoAnalyticsSharp size={20} /></div>
                  <h4>Unified Analytics & Planning
                  </h4>
                  <p>Combine BI, predictive analytics, and planning in one platform.</p>
                  
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><MdOutlineInsights  size={20} /></div>
                  <h4>Real-Time Insights
                  </h4>
                  <p>Make decisions based on up-to-date, integrated data.</p>
                  
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiDashboardFill size={20} /></div>
                  <h4>Intuitive Dashboards
                  </h4>
                  <p>Create interactive visualizations for faster understanding of trends.</p>
                  
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><CgInsights size={20} /></div>
                  <h4>Predictive Analytics
                  </h4>
                  <p>Leverage AI/ML to forecast outcomes and identify risks.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="list-timeline">
                <div class="list-timeline-item">
                  <div class="icon"><GrIntegration size={20} /></div>
                  <h4>Seamless Integration
                  </h4>
                  <p>Connect with SAP ERP, S/4HANA, and non-SAP systems.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiTeamFill size={20} /></div>
                  <h4>Collaborative Planning
                  </h4>
                  <p>Enable cross-functional teams to plan and adjust together.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><RiCloudFill size={20} /></div>
                  <h4>Cloud-Native & Scalable
                  </h4>
                  <p>Secure, flexible, and accessible anywhere, anytime.</p>
                  
                </div>

                <div class="list-timeline-item">
                  <div class="icon"><BsFileEarmarkBarGraph size={20} /></div>
                  <h4>Actionable Intelligence
                  </h4>
                  <p>Transform complex data into meaningful, business-driving insights.</p>
                  
                </div>

                


              </div>
            </div>
          </div>
        </div>
      </section>


      {/* cta section  */}

      <div className="container sap-cta mb-5  ">
        <div className="row py-4 px-2 px-md-5 text-white">
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
          <div className="col-md-6 mt-3 mt-md-0">
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
