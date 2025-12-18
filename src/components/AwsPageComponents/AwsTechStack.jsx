import React from 'react';
import './AwsTechStack.css';



const Feature = ({ title, description, icon, index }) => {
  return (
    <div className="feature-item">
      <div className="gradient-overlay gradient-top" />

      <div className="icon-wrapper">
        {icon}
      </div>

      <div className="title-wrapper">
        <div className="accent-bar" />
        <span className="title-text">{title}</span>
      </div>
    </div>
  );
};

export default function AwsTechStack() {
  const features = [
    {
      title: "Amazon Workspaces",
      description: "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <img src="/images/amz-workspace.png" alt="" />,
    },
    {
      title: "Amazon CloudFront",
      description: "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <img src="/images/amz-cloudfront.png" alt="" />,
    },
    {
      title: "SAP on AWS",
      description: "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <img src="/images/sap-on-aws2.png" alt="" />,
    },
    {
      title: "Machine Learning",
      description: "We just cannot be taken down by anyone.",
      icon: <img src="/images/aws-ml-2.png" alt="" />,
    },
    {
      title: "IOT",
      description: "You can simply share passwords instead of buying new seats",
      icon: <img src="/images/aws-iot-2.png" alt="" />,
    },
    {
      title: "DEVOPS",
      description: "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <img src="/images/devops-logo-2.png" alt="" />,
    },
    {
      title: "Database services",
      description: "If you donot like EveryAI, we will convince you to like us.",
      icon: <img src="/images/aws-db-services.png" alt="" />,
    },
    {
      title: "Cloud Migration",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/aws-cloud-mig.png" alt="" />,
    },
    {
      title: "Microsoft on AWS",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/MS-ON-AWS.png" alt="" />,
    },
    {
      title: "Storage Solutions",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/storage-sol.png" alt="" />,
    },
    {
      title: "Security & Compliance",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/aws-security.png" alt="" />,
    },
    {
      title: "Industrial Solutions",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/ind-sol.png" alt="" />,
    },
    {
      title: "Disaster Recovery",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/dis-rec.png" alt="" />,
    },
    {
      title: "Data Analytics",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/data-analytics-2.png" alt="" />,
    },
    {
      title: "Amazon Aurora",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/amz-aurora.png" alt="" />,
    },
    {
      title: "API Gateway",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/api-gateway.png" alt="" />,
    },
    {
      title: "Lambda",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/aws-lambda.png" alt="" />,
    },
    {
      title: "Dynamo DB",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="/images/dynamo-db.png" alt="" />,
    },

  ];

  return (
    <div className="features-grid-container">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}