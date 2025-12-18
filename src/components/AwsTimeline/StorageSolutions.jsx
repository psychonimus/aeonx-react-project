import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./AwsTimeline.css";
import Hana from '/images/HANA_HA.webp'
import sapWithRise from '/images/sap-with-rise.webp'










export const StorageSolutions = ({ data }) => {
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
    title: "Elastic Block Store",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          AeonX leverages Amazon EBS, providing scalable block storage volumes for EC2 instances. Through EBS, AeonX offers high-performance and low-latency storage solutions tailored to meet specific application requirements. Customers benefit from reliable and durable block-level storage, with features like snapshotting for data backup and restoration, ensuring data integrity and accessibility. 
        </p>
        
      </div>
    ),
  },
  {
    title: "Amazon FSx",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          AeonX utilizes Amazon FSx to deliver fully managed file storage solutions optimized for Windows File Server and Lustre workloads. By leveraging FSx, AeonX ensures high-performance file storage with integrated data backup capabilities. This allows customers to easily deploy and scale file systems, enhancing the efficiency of applications that require shared file storage.

        </p>
        
      </div>
    ),
  },
  {
    title: "Amazon EFs",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          AeonX employs Amazon EFS to provide scalable and fully managed file storage suitable for a wide range of applications. With EFS, AeonX enables customers to achieve high availability and durability for their file-based workloads. By offering seamless integration with AWS services and features like automatic scaling, AeonX ensures that customers have a flexible and cost-effective file storage solution.

        </p>
        
      </div>
    ),
  },
  {
    title: "Amazon S3",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          AeonX offers Amazon S3 as a scalable and secure object storage service for storing and retrieving any amount of data. Through S3, AeonX enables customers to leverage highly durable and available storage, suitable for a variety of use cases, including data backup, content distribution, and archival. AeonX ensures that S3 integrates seamlessly with other AWS services, providing a reliable foundation for building scalable applications.

        </p>
        
      </div>
    ),
  },
  {
    title: "Snowball",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          AeonX facilitates data transfer and migration with Amazon Snowball, a physical data transport solution. By utilizing Snowball, AeonX enables customers to transfer large volumes of data securely and cost-effectively, especially in scenarios where internet bandwidth may be limited. AeonX ensures a smooth and efficient data transfer process, allowing customers to seamlessly integrate on-premises data with AWS storage services.

        </p>
        
      </div>
    ),
  },
  {
    title: "Disaster Recovery",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", color: "#4b5563" }}>
          AeonX offers comprehensive disaster recovery solutions, leveraging AWS services to ensure business continuity. By employing services such as Amazon S3 for data storage, EBS for block storage, and other relevant AWS tools, AeonX designs and implements robust disaster recovery plans. This includes automated backup and replication strategies, minimizing downtime and data loss in the event of unexpected incidents. AeonX ensures that disaster recovery plans are tailored to the specific needs and criticality of each customers infrastructure.

        </p>
        
      </div>
    ),
  },
  
];

// Example usage component
export default function TimelineExample() {
  return <StorageSolutions data={timelineData} />;
}