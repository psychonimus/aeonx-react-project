import React from 'react';
import './AwsTechStack.css';



const Feature = ({ title, description, icon, index }) => {
  const getBorderClasses = () => {
    let classes = 'feature-item';
    if (index === 0 || index === 5 || index === 10 || index === 15) classes += ' border-left';
    if (index < 18) classes += ' border-bottom';
    return classes;
  };

  return (
    <div className={getBorderClasses()}>
      {index < 18 && <div className="gradient-overlay gradient-top" />}
      {index >= 18 && <div className="gradient-overlay gradient-bottom" />}
      
      <div className="icon-wrapper">
        {icon}
      </div>
      
      <div className="title-wrapper">
        <div className="accent-bar" />
        <span className="title-text">{title}</span>
      </div>
      
      <p className="description">
        {description}
      </p>
      
      
    </div>
  );
};

export default function AwsTechStack() {
  const features = [
    {
      title: "Amazon Workspaces",
      description: "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <img src="" alt="" />,
    },
    {
      title: "Amazon CloudFron",
      description: "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <img src="" alt="" />,
    },
    {
      title: "SAP on AWS",
      description: "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <img src="" alt="" />,
    },
    {
      title: "Machine Learning",
      description: "We just cannot be taken down by anyone.",
      icon: <img src="" alt="" />,
    },
    {
      title: "IOT",
      description: "You can simply share passwords instead of buying new seats",
      icon: <img src="" alt="" />,
    },
    {
      title: "DEVOPS",
      description: "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <img src="" alt="" />,
    },
    {
      title: "Database services",
      description: "If you donot like EveryAI, we will convince you to like us.",
      icon: <img src="" alt="" />,
    },
    {
      title: "Cloud Migration",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Microsoft on AWS",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Storage Solutions",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Security & Compliance",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Industrial Solutions",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Disaster Recovery",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Data Analytics",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Amazon Aurora",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "API Gateway",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Lambda",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    {
      title: "Dynamo DB",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <img src="" alt="" />,
    },
    
  ];

  return (
    <div style={containerStyle}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
      
      
    </div>
  );
}

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  position: 'relative',
  zIndex: 10,
  
  paddingBottom: '40px',
//   maxWidth: '1280px',
  marginLeft: 'auto',
  marginRight: 'auto',
  className: 'features-grid'
};