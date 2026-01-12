import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import GlassButton from "../components/GlassButton/GlassButton";
import { Helmet } from "react-helmet";
import AwsTechStack from "../components/AwsPageComponents/AwsTechStack";
import Header from "../components/Header/Header";
import WorkspaceSolution from "/images/amz-workspace-about.webp";
import workspaceLogo from "/images/amazonWorkspaceLogo.webp";
import implementation from "/images/implementation.webp";
import smallBusiness from "/images/small-businesses.webp";
import cloud from "/images/cloud-computing.webp";
import cost from "/images/price-down.webp";
import Ai from "/images/ai.webp";
import cloudSolutions from '/images/aws-cloud-solutions.webp'
import cloudFront from '/images/awsCloudFront.webp'
import saponaws from '/images/sap-on-aws.webp'
import saponawsCap from '/images/sap-on-aws-capabilities.webp'
import AwsTimeline from "../components/AwsTimeline/AwsTimeline";
import StorageSolutions from "../components/AwsTimeline/StorageSolutions";
import awsmachinelearning from '/images/awsmachinelearning.webp'
import awsmachineLearningAbout from '/images/aws-ml.webp'
import awsIotSolutionsBanner from '/images/IOT-about.webp'
import awsIot from '/images/awsIot.webp'
import awsDevOps from '/images/devops-about.webp'
import DevOpsLogo from '/images/DevOpsLogo.webp'
import awsDatabaseLogo from '/images/aws-database-new.webp'
import awsDB from '/images/database-solutions.webp'
import cloudMigrationBanner from '/images/cloud-migration.webp'
import cloudMigrationBannerTop from '/images/aws-cloud-migration-top.webp'
import appModernTop from '/images/app-modernization-top.webp'
import applicationModernizationBanner from '/images/application-modernization-cover.webp'
import managedServiceLogo from '/images/awsManagedServiceProviderLogo.webp'
import awsManagedServiceBanner from '/images/Aws-manged-services-about.webp'
import MsOnAwsLogo from '/images/MsOnAws.webp'
import MsonAwsAbout from '/images/Microsoft-on-aws.webp'
import cloudStorageTop from '/images/cloud-storage-top.webp'
import cloudStorageSolutions from '/images/cloud-storage-solutions.webp'
import bigDataTop from '/images/big-data-top.webp'
import awsBigDataAnalytics from '/images/aws-big-data-anlytics.webp'
import securityManagementTop from '/images/security-man-top.webp'
import SecurityManagementSolutions from '/images/security-management-solutions.webp'
import industryStandardTop from '/images/industry-standard-top.webp'
import industryStandardSolutions from '/images/industry-standard-solutions.webp'
import disasterManagementTop from '/images/dis-rec.webp'
import disasterManagement from '/images/disaster-management-sol.webp'
import AwsAccordion from "../components/AwsTimeline/AwsAccordion";
import CloudStorageAccordion from "../components/AwsTimeline/CloudStorageAccordion";





import { IoMdCloudy } from "react-icons/io";
import { MdOutlineSecurity, MdSecurity } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { MdDevices } from "react-icons/md";
import { IoHardwareChipSharp } from "react-icons/io5";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiFillApi } from "react-icons/ai";
import { TbManualGearbox } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa6";
import { TbAutomation } from "react-icons/tb";
import { VscFileMedia } from "react-icons/vsc";
import { BsClipboard2DataFill } from "react-icons/bs";
import { MdOutlineRecommend } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";
import { TbDevicesDown } from "react-icons/tb";
import { MdOutlineInsights } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { TbNetwork } from "react-icons/tb";
import { RiInfinityFill } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { FaConnectdevelop } from "react-icons/fa6";
import { MdOutlineDeveloperBoard } from "react-icons/md";
// import { TbAutomation } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import { MdOutlineDatasetLinked } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";
import { SiInstructure } from "react-icons/si";
import { GiExpand } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { TbBrandSpeedtest } from "react-icons/tb";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { IoDocumentSharp } from "react-icons/io5";
import { VscDebugLineByLine } from "react-icons/vsc";
import { CgServerless } from "react-icons/cg";
import { BsGearWideConnected } from "react-icons/bs";
import { VscDebugConsole } from "react-icons/vsc";

import { AiFillSecurityScan } from "react-icons/ai";
import { GrVulnerability } from "react-icons/gr";
import { GiGears } from "react-icons/gi";
import { BsFiletypeSql } from "react-icons/bs";
import { TbLicenseOff } from "react-icons/tb";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { TfiMicrosoft } from "react-icons/tfi";
import { MdOutlineStorage } from "react-icons/md";
import { TiCloudStorage } from "react-icons/ti";
import { MdOutlineDataSaverOff } from "react-icons/md";
import { BsClipboard2Data } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";
import { MdOutlineCampaign } from "react-icons/md";
import { TbLockAccess } from "react-icons/tb";
import { SiGoogledataflow } from "react-icons/si";
import { MdStorage } from "react-icons/md";
import { MdOnDeviceTraining } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaCodepen } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { LuDatabaseBackup } from "react-icons/lu";
import { IoHardwareChipOutline } from "react-icons/io5";














const AWSProducts = () => {
  return (
    <>
      <Helmet>
        <title>AWS Products - Aeonx Digital</title>
        <meta name="description" content="At AeonX Digital, we help organizations modernize their IT landscape and unlock innovation through AWS cloud transformation. Our solutions simplify operations, reduce costs, and empower businesses with a fully connected, data-driven digital ecosystem." />
        <meta name="keywords" content="AWS products, AWS cloud transformation, AWS migration, AWS support, AWS training, AWS certification, AWS best practices, AWS security, AWS compliance" />
        <meta name="author" content="AeonX Digital" />
      </Helmet>
      <section className="aws-page">

        {/* HERO SECTION */}
        <section className="life-hero sap-focused-products-hero" style={{ height: "100vh" }} >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="life-hero-content text-center d-flex flex-column justify-content-center  h-100">
                  {/* <p className="eyebrow" data-aos="fade-up">AWS-Focused Products</p> */}
                  <h1 className="mb-2" data-aos="fade-up" data-aos-delay="100">
                    Transform Your Infrastructure and Accelerate Innovation with AWS
                  </h1>
                  <p className="mb-4" data-aos="fade-up" data-aos-delay="200">At AeonX Digital, we help organizations modernize their IT landscape and unlock innovation through AWS cloud transformation. Our solutions are designed to simplify operations, reduce costs, and empower businesses with a fully connected, data-driven digital ecosystem.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="300">With proven expertise in SAP on AWS, server migration, backup and disaster recovery, CI/CD automation, managed services, analytics, integration, and machine learning, AeonX enables enterprises to transition seamlessly to a scalable, cloud-native infrastructure.
                  </p>

                  <div className="event-hero-buttons d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">
                    <GlassButton
                      title="Explore AWS Products"
                      icon={() => <IoIosArrowDropdownCircle size={30} />}
                      onClick={() => {
                        window.scrollTo({
                          top: document.getElementById("aws-services").offsetTop,
                          behavior: "smooth"
                        });
                      }}
                    />

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>



        {/* AWS SERVICES GRID */}
        <div className="container aws-services mt-5" id="aws-services">
          <Header
            highlight="AWS-Focused Products"
            headline="Our AWS Expertise"

          />

          <AwsTechStack />
        </div>

        {/* WORKSPACE SOLUTIONS */}
        <section className="rise-with-sap my-5" id="workspace-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">
              <div className="col-lg-6 left py-4 px-5">
                <img src={workspaceLogo} alt="" />
                <h2>Workspace Solutions</h2>
                <p>
                  AeonX Digital is recognized by leading industry analysts, including ISG, Forrester, Everest, and NelsonHall, for our ability to align SAP landscapes with evolving business needs, focusing on simplification, modernization, digital transformation, HANA roadmap planning, and cloud migration. We serve as a trusted partner for SAP application management, optimization, enhancement, and upgrade services across global enterprises.
                </p>
                <p>As part of an elite group of SAP service providers, AeonX successfully delivers implementations, global rollouts, upgrades, cloud migrations, and SAP support services across complex landscapes and multiple industries. Our solutions enable businesses to build efficient workplaces, enhance user experience, and improve employee productivity, while maintaining operational continuity and digital readiness.</p>
              </div>
              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={WorkspaceSolution} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Why Choose Amazon WorkSpaces with AeonX</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoMdCloudy size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Deploy secure virtual desktops with Amazon WorkSpaces  
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdSecurity size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Implement consistent security policies across all devices
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GrCloudSoftware size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Reduce IT workload with always up-to-date operating systems and software
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdDevices size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Support BYOD (Bring Your Own Device) flexibility</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoHardwareChipSharp size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Select from a wide range of hardware and software options
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbDeviceDesktopStar size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Provide engineers and developers with high-performance virtual desktops
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOUD SOLUTIONS */}
        <section className="rise-with-sap my-5" id="cloud-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={cloudSolutions} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={cloudFront} alt="" />
                <h2>AWS Cloud Solutions</h2>
                <p>AeonX delivers robust and scalable AWS CloudFront solutions designed to enhance content delivery performance across the globe. With low latency, high transfer speeds, and a developer-friendly environment, our AWS cloud capabilities ensure secure and seamless distribution of data, applications, videos, and APIs.</p>
                <p>Built to integrate effortlessly with AWS Shield, AWS Web Application Firewall, and Amazon Route 53, CloudFront provides enterprise-grade protection offering features like HTTPS support, field-level encryption, and strong defenses against network-level and application-level DDoS attacks. These services operate across globally distributed edge locations, giving users a faster, safer, and more reliable digital experience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>What you can achieve with AWS Cloud Solutions from AeonX</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <BiMoneyWithdraw size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Choose between subsidized pricing or flexible pay-as-you-go models
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <AiFillApi size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Access fully functional APIs to create, configure, and manage CloudFront distributions
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbManualGearbox size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Deploy custom content variations using compression, cache-key configuration, and advanced optimization techniques
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <RiSecurePaymentFill size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Integrate AWS Shield Standard for layered, customizable security</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <FaNetworkWired size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Accelerate delivery of both static and dynamic content with network-level performance enhancements
                    </h4>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* SAP ON AWS */}

        <section className="rise-with-sap my-5" id="sap-on-aws" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">
              <div className="col-lg-6 left py-4 px-5">
                <img src={saponaws} alt="" style={{ filter: "brightness(0)" }} />
                <h2>SAP on AWS Capabilities</h2>
                <p>AeonX is among a select group of SAP partners equipped to manage end-to-end SAP transformations including implementations, rollouts, cloud migrations, upgrades, and ongoing support across diverse industries and complex SAP landscapes. Our consultative approach ensures every deployment is tailored, scalable, and aligned with business goals.
              <br />With deep expertise in running SAP workloads on AWS, our team ensures high availability, strong performance, and seamless integration with AWS services such as Amazon S3, Amazon RDS, and Amazon Redshift. This enables businesses to store, process, and analyze data efficiently while building a reliable and secure SAP environment in the cloud.
             <br/>Our SAP on AWS solutions give enterprises the agility, flexibility, and security required to accelerate growth and support continuous innovation.
                </p>
              </div>
              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={saponawsCap} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AwsAccordion />




        {/* MACHINE LEARNING */}

        <section className="rise-with-sap my-5" id="machine-learning" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={awsmachineLearningAbout} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={awsmachinelearning} alt="" />
                <h2>AWS Machine Learning Solutions</h2>
                <p >Enterprises are increasingly turning to machine learning to solve complex business challenges. AeonX delivers end-to-end AWS machine learning solutions that help organizations unlock insights, automate processes, and drive smarter decisions. Our expertise, strong domain understanding, and collaborative approach enable businesses to innovate faster and scale with confidence.
                  <br />
                  By leveraging AWS’s powerful ML ecosystem, we help companies enhance productivity, improve accuracy, and detect anomalies faster using techniques such as mathematical optimization, pattern recognition, and computational intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>What AWS Machine Learning Enables for Your Business:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbAutomation size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Upgrade your systems with intelligent automation and ML-driven insights.

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <VscFileMedia size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Extract valuable information from images, videos, and documents using computer vision.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <FaNetworkWired size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Enable natural language understanding to automate customer service and improve user interactions.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <BsClipboard2DataFill size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Eliminate guesswork with data-driven predictions that transform business operations.</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineRecommend size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Deliver personalized customer experiences using relevant, real-time content recommendations.
                    </h4>
                  </div>
                </div>
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdSmsFailed size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Detect anomalies and prevent risks, including fraud, security breaches, and operational failures.
                    </h4>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* IOT SOLUTIONS */}

        <section className="rise-with-sap my-5" id="iot-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">
              <div className="col-lg-6 left py-4 px-5">
                <img src={awsIot} alt="" style={{ filter: "brightness(0)" }} />
                <h2>IoT Solutions</h2>
                <p >AeonX helps enterprises convert IoT opportunities into real business impact by delivering advanced, cloud-enabled IoT solutions tailored to operational needs.
                  <br />From selecting the right sensors to building intelligent platforms and generating actionable insights, we offer end-to-end IoT services designed to improve efficiency, reduce costs, and enhance customer experiences. Our strong partnerships with leading technology providers, including AWS IoT, Microsoft Azure, PTC ThingWorx, MongoDB, Intel, WindRiver, and others, position us to meet diverse IoT requirements with confidence.</p>
              </div>
              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={awsIotSolutionsBanner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Key IoT capabilities we deliver:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbDevicesDown size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Connect devices seamlessly using cloud-based IoT platforms for rapid prototyping and deployment.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineInsights size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Showcase measurable business value through improved customer engagement and operational insights.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <LuNetwork size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Build next-generation connected devices on trusted and scalable IoT platforms.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <LuNetwork size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Integrate IoT data with existing business systems to create smarter, more efficient applications.</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbNetwork size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Establish centralized operations centers to monitor, manage, and optimize devices and business processes.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEVOPS SOLUTIONS */}

        <section className="rise-with-sap my-5" id="devops-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={awsDevOps} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={DevOpsLogo} alt="" />
                <h2>DevOps Solutions</h2>
                <p >AeonX delivers comprehensive AWS DevOps solutions that streamline development, improve collaboration, and accelerate software delivery. By integrating automation, continuous integration, and lean development practices, we help teams eliminate bottlenecks, enhance operational performance, and respond quickly to changing business needs. Our DevOps approach bridges the gaps between development, IT operations, and quality assurance enabling faster, more reliable, and scalable application delivery.
                  <br />
                  With end-to-end AWS DevOps tools and frameworks, we support clients in building, deploying, and managing applications efficiently while strengthening culture, processes, and engineering workflows. The result is continuous delivery, improved stability, and higher customer value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Our DevOps capabilities on AWS include:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <RiInfinityFill size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Assessing the current DevOps maturity across culture, processes, and toolchains.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GoProjectRoadmap size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Defining the future state with a clear roadmap and measurable success metrics.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <FaConnectdevelop size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Building pilot frameworks to standardize DevOps practices and accelerate business outcomes.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineDeveloperBoard size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Leveraging existing tools alongside a strong ecosystem of open-source and enterprise solutions.</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbAutomation size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Designing, automating, and implementing workflows to reduce errors and increase deployment reliability.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DATABASE SOLUTIONS */}

        <section className="rise-with-sap my-5" id="database-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">
              <div className="col-lg-6 left py-4 px-5">
                <img src={awsDatabaseLogo} alt="" />
                <h2>Database Solutions</h2>
                <p>Managing the massive volumes of data generated each day has become a major challenge for modern enterprises. AeonX helps organizations unlock the full value of their data with robust AWS Database Solutions designed to support informed decision-making, improve performance, and accelerate business growth. Our experts work across SAP, Sybase, Microsoft SQL, Oracle, MySQL, MongoDB, and other leading database technologies ensuring a strong and scalable data foundation for every business.</p>
                <p>Our database services support end-to-end data and analytics needs using a hybrid, open-source-friendly approach. With distributed and hybrid data cloud architectures, we help businesses achieve higher performance, greater uptime, and improved cost efficiency across all environments.</p>
              </div>
              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={awsDB} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Key advantages of database solutions:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GrShieldSecurity size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Advanced security features to protect data at rest and in transit
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineDatasetLinked size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Support for all data types, structured, unstructured, SQL, NoSQL, IoT, and blockchain
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoIosCloudDone size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Global hybrid cloud design for seamless access across devices and environments
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <FaExpandArrowsAlt size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Elastic scalability to grow resources as your business expands</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoCloudUploadSharp size={30} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Distributed cloud deployment across on-premise, edge, and multi-cloud environments
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Analytics Services</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon" style={{ background: "#ffffffff" }}>
                      <img src="/images/amz-rds.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      <b>Amazon RDS</b> - Build and manage traditional relational databases with ease.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon" style={{ background: "#ffffffff" }}>
                      <img src="/images/amz-dynamo-db.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      <b>Amazon DynamoDB</b> - Gain high-performance, fully managed NoSQL capabilities with dynamic scaling.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon" style={{ background: "#ffffffff" }}>
                      <img src="/images/amz-redshift-logo.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      <b>Amazon Redshift</b> – Automate data warehousing and process large-scale analytics efficiently.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon" style={{ background: "#ffffffff" }}>
                      <img src="/images/amz-neptune-logo.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4><b>Amazon Neptune</b> – Manage complex relationships and graph-based data structures.
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon" style={{ background: "#ffffffff" }}>
                      <img src="/images/amz-elastic-cache.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      <b>Amazon ElastiCache</b> – Use in-memory caching for fast access to highly volatile data.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOUD MIGRATION */}

        <section className="rise-with-sap my-5" id="cloud-migration" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={cloudMigrationBanner} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={cloudMigrationBannerTop} alt="" />
                <h2>Cloud Migration</h2>
                <p
             
                >AeonX enables seamless digital transformation with end-to-end AWS Cloud Migration solutions tailored to your business needs. Through the right strategy, roadmap, and migration framework, we help organizations modernize their infrastructure and move to the cloud with confidence. Our migration approach combines industry-tested methods with pre-configured tools, automation, and best practices across all cloud models, whether IaaS, PaaS, or SaaS.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Our Cloud Migration Capabilities Include:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoCloudDone size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Assessing cloud readiness with proven proprietary tools
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <SiInstructure size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Evaluating existing infrastructure to enhance security, scalability, and automation
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GiExpand size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Designing a scalable, secure cloud architecture for long-term innovation
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <FaCloud size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Using enterprise-grade cloud technologies to simplify storage and operations</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbBrandSpeedtest size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Deploying and testing cloud environments for performance, usability, and reliability
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* application modernization  */}

        <section className="rise-with-sap my-5" id="application-modernization" data-aos="fade-up">
          <div className="container">
            <div className="row  grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={applicationModernizationBanner} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={appModernTop} alt="" />
                <h2>Application Modernization</h2>
                <p
                  style={{
                    textAlign: "left",
                    wordSpacing: "normal",
                    letterSpacing: "normal",
                    lineHeight: "1.6",
                    maxWidth: "65ch",
                  }}
                >
                  We help organizations transform their application landscape through a comprehensive suite of modernization services, including re-platforming, re-hosting, re-architecting, re-coding, re-engineering, interoperability enhancements, and strategic application retirement. We also support architecture evaluations to determine the most effective modernization path for your business.
                  <br />
                  Using proven DevOps practices, open-source platforms, and advanced automation tools, we enable faster, secure, and efficient software development. Our modernization approach delivers a consistent development and operations experience, helping organizations innovate quickly while reducing long-term costs.
                </p>

              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Our Application Modernization Capabilities Include:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineSettingsApplications size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Assessing application readiness for continuous improvement and modern delivery models

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoDocumentSharp size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Applying a declarative approach to manage policies and configurations across environments

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <VscDebugLineByLine size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Reducing risk through reliable open-source technologies that enhance speed and stability
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <CgServerless size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Streamlining developer workflows with serverless architectures and automated event orchestration
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <BsGearWideConnected size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Accelerating modern operations adoption to unlock the full value of cloud-native applications

                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* AWS MANAGED SERVICES */}

        <section className="rise-with-sap my-5" id="aws-managed-services" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 left py-4 px-5">
                <img src={managedServiceLogo} alt="" />
                <h2>AWS Managed Services</h2>
                <p>AWS Managed Services help businesses maintain control of their cloud environment while reducing operational costs and improving reliability. As an AWS Advanced Tier Partner, AeonX manages your AWS infrastructure end-to-end, ensuring stability, security, and seamless performance across all applications. We set up and administer a wide range of AWS services, including Amazon EC2, Amazon RDS, Amazon S3, Elastic Load Balancing, Amazon ElastiCache, Amazon Route 53, and more.
                </p>
                <p>Our managed services also support smooth workload migration from on-premise or other hosting environments to AWS. Using proven methodologies and industry best practices, we simplify and accelerate migrations, enabling businesses to unlock new opportunities and scale efficiently on the cloud.
                </p>
              </div>

              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={awsManagedServiceBanner} alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Our AWS Managed Services include:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <VscDebugConsole size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Full administration and troubleshooting for uninterrupted AWS operations

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GiExpand size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Designing secure and scalable network architectures to maximize productivity
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <AiFillSecurityScan size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Continuous security monitoring to maintain operational integrity
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GrVulnerability size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Regular vulnerability assessments and penetration testing to reduce risks</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GiGears size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Fast and efficient implementation of system changes to support evolving business needs
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Microsoft on AWS */}

        <section className="rise-with-sap my-5" id="ms-on-aws" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={MsonAwsAbout} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={MsOnAwsLogo} alt="" />
                <h2>Microsoft on AWS Solutions</h2>
                <p>AeonX delivers powerful, scalable solutions that bring together the strengths of Microsoft technologies and Amazon Web Services. From data processing and warehousing to mobile and web applications, our solutions support organizations of all sizes.
                </p>
                <p>As an AWS Solution Provider, we create familiar, secure, and cost-effective cloud environments that are easy to deploy and fully automated. With flexible hardware and software choices, rapid provisioning, and pay-as-you-go pricing, businesses can scale their Microsoft workloads on AWS based on real-time needs without long-term commitments or unnecessary overhead.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>What Microsoft on AWS Enables:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <AiFillSecurityScan size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Move to a secure and reliable cloud platform for smooth, efficient operations
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <BsFiletypeSql size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Run Microsoft SQL Server on AWS to eliminate complex database management tasks
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbLicenseOff size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Spin up instances on demand without long-term licensing constraints
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineMoneyOffCsred size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Reduce costs while increasing performance, security, and agility</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TfiMicrosoft size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Scale Microsoft SharePoint environments effortlessly and pay only for what you use
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOUD STORAGE SOLUTIONS */}

        <section className="rise-with-sap my-5" id="cloud-storage-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 left py-4 px-5">
                <img src={cloudStorageTop} alt="" />
                <h2>Cloud Storage Solutions</h2>
                <p>AWS offers highly durable, scalable, and cost-efficient cloud storage designed for diverse business needs. AeonX helps organizations leverage these capabilities for secure data archiving, backup, and disaster recovery. Over the years, AWS storage has evolved to support a wide range of workloads, from databases and ERP systems to large-scale enterprise applications, all with low-latency, dedicated performance.
                </p>
                <p>With cloud-based storage, businesses can eliminate the cost and complexity of managing on-premise infrastructure. Storage capacity is available on demand, allowing you to scale instantly and pay only for what you use.
                </p>
              </div>

              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={cloudStorageSolutions} alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>What You Can Achieve with Cloud Storage Solutions:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GiExpand size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Build scalable and flexible storage for analytics, backups, and long-term archiving

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineStorage size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Develop modern applications without worrying about underlying storage management

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TiCloudStorage size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Use cloud storage for large content repositories, media libraries, development environments, or user directories

                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineDataSaverOff size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Automate data lifecycle management to efficiently shift inactive data to cold storage
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <AiFillSecurityScan size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Protect data integrity with point-in-time snapshots for long-term durability
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORAGE SOLUTIONS */}

        <div className="container" id="storage-solutions" data-aos="fade-up">
          <div className="point-heading ">
            <h2>Our Storage Solutions:</h2>
          </div>
        </div>

        {/* <StorageSolutions /> */}
        <CloudStorageAccordion />

        {/* aws big data and analytics */}

        <section className="rise-with-sap my-5" id="big-data-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={awsBigDataAnalytics} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={bigDataTop} alt="" />
                <h2>AWS Big Data and Analytics Solutions</h2>
                <p>AeonX partners with leading technology providers to deliver next-generation, scalable data solutions that support complete enterprise transformation. With AWS, businesses gain access to purpose-built services for data migration, storage, data lakes, big data analytics, business intelligence, and machine learning, all designed for exceptional performance, flexibility, and cost efficiency.
                </p>
                <p>Our AWS Big Data and Analytics services help organizations unlock meaningful insights, manage complex data pipelines, and turn raw data into actionable intelligence. We support businesses across industries in building strong analytics foundations that enhance decision-making and drive continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>What You Can Achieve with AWS Big Data & Analytics:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <BsClipboard2Data size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Enable deeper customer personalization through advanced data analysis

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoPersonSharp size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Understand customer behavior at scale to fuel innovation
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <VscDebugDisconnect size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Track, monitor, and detect anomalies to prevent fraud
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineCampaign size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Run targeted, high-impact marketing campaigns that maximize ROI</h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GiGears size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Streamline operations, predict failures, and improve productivity
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY MANAGEMENT SOLUTIONS */}

        <section className="rise-with-sap my-5" id="security-management-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 left py-4 px-5">
                <img src={securityManagementTop} alt="" />
                <h2>Security Management Solutions
                </h2>
                <p>At AeonX, we prioritize robust cloud security by ensuring your data is encrypted both in transit using SMB Kerberos session keys and at rest with AWS-native encryption. To protect your environment from accidental exposure, vulnerabilities, and evolving threats, we integrate a wide range of AWS security services and management tools. While AWS provides strong foundational security, we ensure these controls are implemented correctly and aligned to your business needs.</p>
                <p>AeonX adheres to leading global standards, including ISO, PCI-DSS, and SOC, and is HIPAA-qualified to deliver solutions that meet the highest compliance requirements. With AWS-driven automation, we help development and operations teams build, deploy, and manage applications with greater speed and stronger security.
                </p>
              </div>

              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={SecurityManagementSolutions} alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Our Security & Compliance Capabilities Include:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbLockAccess size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Preventing unauthorized access to applications, data, accounts, and infrastructure

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <SiGoogledataflow size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Regulating data flow and encrypting sensitive information within secure cloud architectures

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdStorage size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Enabling safe storage and protection of mission-critical applications and authentication data

                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <TbLockAccess size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Delivering identity and access controls with real-time security monitoring

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdSecurity size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Managing essential security tasks such as firewall configuration, OS and database patching, and disaster recovery

                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* industry STANDARD SOLUTIONS */}

        <section className="rise-with-sap my-5" id="industry-standard-solutions" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 right px-0 order-2 order-lg-1">
                <div
                  className="img-container"
                  style={{
                    borderTopLeftRadius: "30px",
                    borderBottomLeftRadius: "30px",
                  }}
                >
                  <img src={industryStandardSolutions} alt="" />
                </div>
              </div>
              <div className="col-lg-6 left py-4 px-5 order-1 order-lg-2">
                <img src={industryStandardTop} alt="" />
                <h2>Industry Standard Solutions</h2>
                <p>AeonX is a trusted provider of advanced software solutions for the manufacturing and process industries, with strong capabilities across product design, production operations, and lifecycle management. As an AWS Industrial Software Competency Partner, we bring deep cloud and IoT expertise that helps enterprises streamline supply chain integration, accelerate product development, and transition toward smart, connected factory environments.
                </p>
                <p>With manufacturing rapidly shifting from traditional mechatronics to cyber-physical systems, our solutions support this evolution while maintaining the highest levels of security and reliability. Our implementation approach covers the complete application lifecycle, from design and deployment to training, operations, and ongoing support ensuring a seamless experience and strong customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Key Benefits of Industrial Solutions on AWS:
              </h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdSecurity size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Achieve end-to-end security, data privacy, scalability, and high availability

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineSecurity size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Gain a deep understanding of your current applications by aligning IT capabilities with industrial operations

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineSupportAgent size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Maintain your industrial software with 24/7 support and full lifecycle application management

                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <GrDocumentText size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Strengthen compliance, prevent fraud, and adopt smarter, more resilient applications
                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineAutoGraph size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Enhance productivity and extend application life through scalable resources and tailored services

                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DISASTER MANAGEMENT SOLUTIONS */}

        <section className="rise-with-sap my-5" id="disaster-management" data-aos="fade-up">
          <div className="container">
            <div className="row grey-bg">

              <div className="col-lg-6 left py-4 px-5">
                <img src={disasterManagementTop} alt="" />
                <h2>Disaster Management Solutions
                </h2>
                <p>AeonX empowers disaster response teams with reliable AWS cloud solutions designed to operate even in the toughest conditions. By enabling cloud services at the edge, we help agencies stay focused on critical relief operations while ensuring their data, applications, and infrastructure remain secure and accessible.
                </p>
                <p>With AWS, we quickly set up essential systems, deliver necessary hardware to field locations, and deploy portable infrastructure based on real-time needs. Our specialists leverage AWS edge technologies to process and analyze large volumes of data directly in the field, allowing responders to make faster, more informed decisions even when internet connectivity is limited.
                </p>

              </div>

              <div className="col-lg-6 right px-0">
                <div
                  className="img-container"
                  style={{
                    borderTopRightRadius: "30px",
                    borderBottomRightRadius: "30px",
                  }}
                >
                  <img src={disasterManagement} alt="" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="major-points my-5" data-aos="fade-up">
          <div className="container">
            <div className="point-heading ">
              <h2>Key Advantages of Disaster Recovery on AWS:</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <MdOutlineSupportAgent size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Provide technical support to restore local connectivity and strengthen on-ground response

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <FaCodepen size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex align-items-center">
                    <h4>
                      Build software solutions that improve preparedness, response, and recovery for public and nonprofit organizations

                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <BsDatabaseFillCheck size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Share and analyze large datasets seamlessly through AWS for coordinated disaster operations

                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <LuDatabaseBackup size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>Enhance community resilience and overall disaster response effectiveness


                    </h4>
                  </div>
                </div>

                <div className="row point py-4">
                  <div className="col-2 d-flex justify-content-start align-items-center">
                    <div className="point-icon">
                      <IoHardwareChipOutline size={24} />
                    </div>
                  </div>
                  <div className="col-10 point-text d-flex  align-items-center">
                    <h4>
                      Deploy hardware and field-ready infrastructure rapidly to support urgent missions

                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




      </section>
    </>
  );
};

export default AWSProducts;
