import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./AwsTimeline.css";
import Hana from '/images/HANA_HA.png'
import sapWithRise from '/images/sap-with-rise.png'










export const AwsTimeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-container" ref={containerRef}>


      <div ref={ref} className="timeline-content">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-header">
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>
              <h3 className="timeline-item-title-desktop">
                {item.title}
              </h3>
            </div>

            <div className="timeline-item-content">
              <h3 className="timeline-item-title-mobile">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="timeline-line"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="timeline-line-progress"
          />
        </div>
      </div>
    </div>
  );
};

// Dummy data for the timeline
const timelineData = [
  {
    title: "S/4HANA on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          Running SAP S/4HANA on AWS allows organizations to combine the power of next-generation ERP with the scalability and reliability of the AWS Cloud. AWS offers a comprehensive suite of services to support S/4HANA deployments, including:

        </p>
        <ul>
          <li>Amazon EC2 for scalable compute</li>
          <li>Amazon EBS for high-performance storage</li>
          <li>Amazon VPC for secure networking</li>
          <li>Amazon RDS for SAP and Amazon S3 for data and database management</li>
        </ul>
        <h4 className="font-weight-bold">S/4HANA on AWS enables businesses to:</h4>
        <ul>
          <li>Accelerate time-to-value with on-demand cloud infrastructure</li>
          <li>Provision environments quickly without upfront investments or long-term contracts</li>
          <li>Pay only for what they use, avoiding unnecessary hardware purchases</li>
          <li>Scale resources effortlessly based on business demand</li>

        </ul>
        <p>With AeonX, organizations can confidently modernize their SAP landscape on AWS and unlock a future-ready digital foundation.</p>
        <img className="w-100" src={Hana} alt="" />
      </div>
    ),
  },
  {
    title: "Rise with SAP on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          RISE with SAP on AWS gives enterprises a powerful foundation to modernize their ERP landscape with the world’s most secure, scalable, and proven cloud platform. AWS brings unmatched expertise, robust architecture, and 200+ services designed to accelerate innovation, reduce risk, and maximize the value of SAP investments. With purpose-built automation and seamless integration, businesses gain the agility needed to support digital transformation at scale.

        </p>
        {/* <div style={{
          padding: "1rem",
          backgroundColor: "#f3f4f6",
          borderRadius: "0.5rem",
          marginTop: "1rem"
        }}>
          <p style={{ fontWeight: "600", color: "#1f2937" }}>Funding: $2M Series A</p>
        </div> */}

        <h4 className="mb-4">Key benefits of running RISE with SAP on AWS include:</h4>
        <ul>
          <li><b>Scalability:</b> Easily scale infrastructure up or down based on demand, improving efficiency and reducing operational costs.
          </li>
          <li><b>Flexibility:</b> Choose from a wide range of instance types, storage tiers, and AWS services tailored to specific workloads.</li>
          <li><b>High Availability:</b> Built-in redundancy and comprehensive disaster recovery options ensure continuous uptime and strong data protection.</li>
          <li><b>Enhanced Security:</b> Benefit from AWS’s extensive security framework, including encryption, firewalls, IAM controls, and global compliance certifications.</li>
          <li><b>Lower Operational Overheads:</b> Reduce the burden of managing on-premise infrastructure and redirect resources toward core business priorities.</li>
          <li><b>Faster Time-to-Value:</b> Preconfigured tools and services in the RISE program accelerate deployment and simplify implementation efforts.</li>
          <li><b>Expert Guidance:</b> Gain access to dedicated AWS and SAP specialists who help optimize performance, architecture, and long-term operations.</li>
        </ul>
        <img className="w-100" src={sapWithRise} alt="" />
      </div>
    ),
  },
  {
    title: "SAP Disaster Recovery on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          SAP Disaster Recovery on AWS provides a reliable, scalable, and secure way to protect business-critical SAP systems from outages, data loss, and unexpected disruptions. By replicating SAP environments to a secondary AWS location, organizations can ensure rapid failover, minimal downtime, and uninterrupted business continuity. AWS offers a robust suite of services that streamline replication, automation, and recovery for SAP workloads.
        </p>
        <h5 className="mb-4">Key AWS services that strengthen SAP Disaster Recovery:</h5>
        <ul>
          <li><b>Amazon EBS Snapshots:</b> Replicate SAP system and data volumes efficiently.</li>
          <li><b>AWS Direct Connect:</b> Establish a dedicated, low-latency connection between primary and DR sites.</li>
          <li><b>AWS Database Migration Service (DMS) + Schema Conversion Tool (SCT):</b> Migrate and convert SAP databases and schemas.
          </li>
          <li><b>AWS CloudFormation & Elastic Beanstalk:</b> Automate deployment and configuration of SAP systems in the DR environment.
          </li>
          <li><b>Advanced security & compliance:</b> Leverage AWS’s global certifications, encryption, IAM controls, and monitoring tools to secure DR landscapes and meet regulatory requirements.
          </li>

        </ul>
      </div>
    ),
  },
  {
    title: "Lift & Shift Migration Strategy for SAP on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          A Lift & Shift migration allows organizations to move their existing SAP systems to AWS without redesigning the application or changing core configurations. This approach delivers a faster, cost-effective path to the cloud while maintaining system integrity and minimizing downtime.
        </p>
        {/* <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginTop: "1rem"
        }}>
          <div style={{ padding: "0.75rem", backgroundColor: "#eff6ff", borderRadius: "0.375rem" }}>
            <p style={{ fontWeight: "600", color: "#1e40af" }}>50K+ Users</p>
          </div>
          <div style={{ padding: "0.75rem", backgroundColor: "#f0fdf4", borderRadius: "0.375rem" }}>
            <p style={{ fontWeight: "600", color: "#166534" }}>15+ Integrations</p>
          </div>
        </div> */}
        <h5 className="mb-4">Key steps in an SAP Lift & Shift migration to AWS include:</h5>
        <ul>
          <li>Assess the current SAP landscape: Review the existing architecture, integrations, and system dependencies across hardware and software.</li>
          <li>Define the target AWS architecture: Select the right AWS services, instance types, storage options, and configurations to support your SAP workloads.
          </li>
          <li>Prepare the AWS environment: Set up VPCs, subnets, security groups, and storage volumes required for the SAP deployment.
          </li>
          <li>Execute the migration: Use AWS Database Migration Service (DMS) or trusted third-party tools to migrate data, applications, and system components.
          </li>
          <li>Test and validate: Ensure the migrated SAP system performs correctly, maintains data integrity, and meets functional and performance expectations.
          </li>
          <li>Go-live: Cut over to the AWS environment and complete post-migration tasks such as DNS updates, traffic routing, and system optimization.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Well-Architected Review (WAR) on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          The AWS Well-Architected Framework provides a structured approach to designing and operating reliable, secure, high-performing, and cost-efficient systems in the AWS Cloud. Through a Well-Architected Review (WAR), businesses can assess their current workloads, identify gaps, and implement best practices to strengthen their cloud architecture.
        </p>
        <h5 className="mb-4">The framework is built on five core pillars that guide continuous improvement:</h5>
        <ul>
          <li>Operational Excellence: Ensures systems are monitored effectively, processes are optimized, and operations continuously improve to deliver business value.</li>
          <li>Security: Protects data, applications, and infrastructure through layered defenses, risk assessments, and robust access controls.</li>
          <li>Reliability: Helps systems recover quickly from failures, scale with demand, and minimize disruptions caused by misconfigurations or network issues.</li>
          <li>Performance Efficiency: Enables optimal use of computing resources while adapting to evolving technologies and changing workload requirements.</li>
          <li>Cost Optimization: Focuses on eliminating unnecessary expenses and maximizing business value at the lowest achievable cost.</li>
        </ul>
        <h5 className="mb-4">The framework is built on five core pillars that guide continuous improvement:</h5>
      </div>
    ),
  },
  {
    title: "Highly Available SAP Architecture on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          A highly available SAP architecture on AWS is designed to keep critical systems running with minimal disruption, even during failures or outages. By building redundancy, automated failover, and strong disaster recovery capabilities into the cloud environment, businesses can ensure continuous operations and faster recovery times. AWS provides the scalability, resilience, and infrastructure needed to support uninterrupted SAP workloads.
        </p>
        <h5 className="mb-4">Key benefits of a highly available SAP architecture on AWS:</h5>
        <ol>
          <li>Maximum uptime and improved system availability</li>
          <li>Elastic scalability to meet changing business demands</li>
          <li>Reduced maintenance-related downtime</li>
          <li>Lower operational and infrastructure costs</li>
          <li>Flexible architecture tailored to workload needs</li>
          <li>Stronger disaster recovery and faster failover</li>
          <li>Enhanced security across applications and data</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Backend Services for SAP Backup and Restore on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          Backend services on AWS provide a reliable, scalable, and cost-efficient foundation for SAP backup and restore operations. These services ensure data durability, strong protection against loss, and seamless integration with cloud and on-premise environments. With built-in automation, compliance support, and remote accessibility, AWS enables businesses to maintain secure and resilient backup strategies for their SAP landscapes.
        </p>
        <h5 className="mb-4">Key AWS services supporting SAP backup and restore include:</h5>
        <ol>
          <li><b>Amazon S3:</b> Highly durable storage for SAP backup data.</li>
          <li><b>Amazon Glacier:</b> Cost-effective long-term archival storage.</li>
          <li><b>Amazon EBS Snapshots:</b> Point-in-time backups for EBS volumes.</li>
          <li><b>AWS Backup:</b> Centralized, automated backup and recovery management.</li>
          <li><b>AWS Storage Gateway:</b> Hybrid integration between on-premise storage and AWS.</li>
          <li><b>Amazon RDS Snapshots:</b> Automated and manual database backups.</li>
          <li><b>SAP HANA System Replication:</b> Real-time data replication for SAP HANA environments.</li>
        </ol>
      </div>
    ),
  },

  {
    title: "Automation for SAP on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          Automation for SAP on AWS leverages AWS tools and services to streamline the deployment and management of SAP workloads in the cloud. From provisioning and scaling to backups, patching, and disaster recovery, automation eliminates manual effort and ensures consistent, reliable operations across the SAP environment.
        </p>
        <h5 className="mb-4">Core benefits of automating SAP on AWS include:</h5>
        <ol>
          <li>Higher operational efficiency</li>
          <li>Lower risk of human error</li>
          <li>Faster deployment and reduced time-to-value
          </li>
          <li>Cost savings through optimized resource usage
          </li>
          <li>Seamless scalability based on demand
          </li>
          <li>Enhanced disaster recovery and resilience
          </li>
          <li>Stronger security controls</li>
          <li>Improved compliance and governance
          </li>
        </ol>
      </div>
    ),
  },

  {
    title: "Automation for SAP on AWS",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          Automation for SAP on AWS leverages AWS tools and services to streamline the deployment and management of SAP workloads in the cloud. From provisioning and scaling to backups, patching, and disaster recovery, automation eliminates manual effort and ensures consistent, reliable operations across the SAP environment.
        </p>
        <h5 className="mb-4">Core benefits of automating SAP on AWS include:</h5>
        <ol>
          <li>Higher operational efficiency</li>
          <li>Lower risk of human error</li>
          <li>Faster deployment and reduced time-to-value
          </li>
          <li>Cost savings through optimized resource usage
          </li>
          <li>Seamless scalability based on demand
          </li>
          <li>Enhanced disaster recovery and resilience
          </li>
          <li>Stronger security controls</li>
          <li>Improved compliance and governance
          </li>
        </ol>
      </div>
    ),
  },

  {
    title: "Custom Developments",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          At AeonX, we specialize in building custom digital solutions tailored to unique business challenges. Our proprietary products - SupplierX, SignX, and OrderX are designed to streamline operations, enhance productivity, and deliver seamless user experiences across enterprise workflows. Each solution is built with scalability, automation, and industry best practices at its core.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "1rem"
        }}>
          <div style={{ padding: "0.75rem", backgroundColor: "#f0f0f0ff", borderRadius: "0.375rem" }}>
            <h3>SupplierX</h3>
            <p style={{ fontWeight: "600", color: "#000000ff" }}>SupplierX is a smart, end-to-end supplier management platform that simplifies vendor onboarding, communication, compliance tracking, and performance monitoring. It helps businesses create transparent supplier ecosystems, reduce manual effort, and accelerate procurement cycles.
            </p>
          </div>  
          <div style={{ padding: "0.75rem", backgroundColor: "#f0f0f0ff", borderRadius: "0.375rem" }}>
            <h3>SignX</h3>
            <p style={{ fontWeight: "600", color: "#000000ff" }}>SignX is a secure digital signing and document management solution that enables organizations to automate approvals, reduce paperwork, and ensure legal compliance. With seamless integration and easy accessibility, SignX enhances speed, accuracy, and traceability across document workflows.
            </p>
          </div>
          <div style={{ padding: "0.75rem", backgroundColor: "#f0f0f0ff", borderRadius: "0.375rem" }}>
            <h3>OrderX</h3>
            <p style={{ fontWeight: "600", color: "#000000ff" }}>OrderX streamlines the complete order lifecycle—from order creation and approvals to fulfillment and tracking. Designed for accuracy and operational efficiency, OrderX helps businesses reduce errors, improve visibility, and deliver faster, more reliable order management.
            </p>
          </div>
        </div>

      </div>
    ),
  },
];

// Example usage component
export default function TimelineExample() {
  return <AwsTimeline data={timelineData} />;
}