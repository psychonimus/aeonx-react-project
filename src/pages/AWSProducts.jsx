import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import GlassButton from "../components/GlassButton/GlassButton";

const AWSProducts = () => {
  return (
    <section className="aws-page">

      {/* HERO SECTION */}
      <section className="life-hero sap-focused-products-hero" style={{ height: "100vh" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="life-hero-content text-center d-flex flex-column justify-content-center  h-100">
                                <p className="eyebrow">AWS-Focused Products</p>
                                <h1 className="mb-2">
                                    Transform Your Infrastructure and Accelerate Innovation with AWS
                                </h1>
                                <p className="mb-4">At AeonX Digital, we help organizations modernize their IT landscape and unlock innovation through AWS cloud transformation. Our solutions are designed to simplify operations, reduce costs, and empower businesses with a fully connected, data-driven digital ecosystem.
</p>

                                <div className="event-hero-buttons d-flex justify-content-center">
                                    <GlassButton
                                        title="Explore SAP Products"
                                        icon={() => <IoIosArrowDropdownCircle size={30} />}
                                    />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

      {/* OVERVIEW */}
      <div className="container aws-intro">
        <p>
          At AeonX Digital, we help organizations modernize their IT landscape
          and unlock innovation through AWS cloud transformation. Our solutions simplify
          operations, reduce cost & help enterprises transition seamlessly into a scalable,
          cloud-native ecosystem.
        </p>
      </div>

      {/* PILLARS */}
      <div className="container aws-pillars">
        <div className="pillar-box">
          <h3>Limitless Data Access</h3>
          <p>Elastic compute, flexible storage & seamless scaling for dynamic workloads.</p>
        </div>
        <div className="pillar-box">
          <h3>Insight Driven Analytics</h3>
          <p>Modern analytics & ML enable real-time business decisions.</p>
        </div>
        <div className="pillar-box">
          <h3>Organizational Agility</h3>
          <p>Modernize legacy systems & accelerate digital transformation.</p>
        </div>
      </div>

      {/* AWS SERVICES GRID */}
      <div className="container aws-services">
        <h2 className="section-title">Our AWS Expertise</h2>

        <div className="aws-grid">
          {[
            "Amazon Workspaces","Amazon CloudFront","SAP on AWS","Machine Learning","IoT",
            "DevOps","Database Services","Cloud Migration","Microsoft on AWS","Storage Solutions",
            "Security & Compliance","Disaster Recovery","Data Analytics","API Gateway",
            "Amazon Aurora","Dynamo DB","Lambda","Industrial Solutions"
          ].map((item,i)=>(
            <div className="aws-card" key={i}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AMAZON WORKSPACES SECTION */}
      <div className="container aws-workspaces">
        <h2>Amazon Workspaces</h2>
        <p>
          AeonX Digital is recognised globally for simplifying SAP landscapes &
          delivering scalable WorkSpaces environments for enterprises. We enable efficient
          workplaces, improved productivity, & high availability cloud architecture.
        </p>

        <div className="workspace-list">
          <li>Deploy secure virtual desktops</li>
          <li>Implement consistent enterprise-grade security</li>
          <li>Reduce IT workload with automated OS & software updates</li>
          <li>Enable BYOD & remote workforce mobility</li>
          <li>Flexible hardware/software provisioning</li>
        </div>
      </div>

      {/* CTA */}
      <div className="aws-cta">
        <h2>Move to AWS with Confidence</h2>
        <p>Let's build, migrate or modernize your cloud today.</p>
        <button>Talk to an Expert →</button>
      </div>

    </section>
  );
};

export default AWSProducts;
