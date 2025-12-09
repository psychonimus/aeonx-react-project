import { motion } from "framer-motion";
import { Zap, Shield, RefreshCw, MousePointerClick } from "lucide-react";
import "./ServiceHeroSection.css";
import implementation from "/images/implementation.svg";
import support from "/images/support.svg";
import migration from "/images/migration.svg";
import integration from "/images/integration.svg";
import innovation from "/images/innovation.svg";
import staffing from "/images/staffing.svg";
import x from "/images/logo-x.svg"

const integrationIcons = [
  { Icon: implementation, delay: 0, title: "Implementation" },
  { Icon: support, delay: 0.1, title: "Support" },
  { Icon: migration, delay: 0.2, title: "Migration" },
  { Icon: integration, delay: 0.3, title: "Integration" },
  { Icon: innovation, delay: 0.4, title: "Innovation" },
  { Icon: staffing, delay: 0.4, title: "Staffing" },
];

const features = [
  { icon: Zap, text: "Instant sync" },
  { icon: Shield, text: "Enterprise security" },
  { icon: RefreshCw, text: "Real-time updates" },
  { icon: MousePointerClick, text: "One-click setup" },
];

export const ServiceHeroSection = () => {
  return (
    <section className="integrations-hero">
      <div className="integrations-container pt-5">
        {/* Badge */}
        

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="main-heading mt-4"
        >
          Our Expert Services
        </motion.h1>

        {/* Subtitle */}
       

        {/* Integration Icons Row */}
        <div className="icons-row">
          {integrationIcons.map(({ Icon, delay, title }, index) => (
            <div className="d-flex flex-column align-items-center">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + delay }}
                className="icon-box"
              >
                {/* <Icon className="integration-icon" /> */}
                <img className="integration-icon" src={Icon} alt="" style={{
                  objectFit: 'fill',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                   backgroundSize: 'contain',
                }} />

              </motion.div>
              <p className="text-center service-name mt-3">{title}</p>
            </div>

          ))}
        </div>

        {/* Animated Connection Visualization */}
        <div className="connection-visualization">
          <svg className="connection-svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static connecting lines */}
            {[...Array(5)].map((_, i) => {
              const startX = (i + 1) * (100 / 6);
              const endX = 50;
              const startY = 0;
              const endY = 100;

              return (
                <g key={i}>
                  {/* Static line */}
                  <motion.line
                    x1={`${startX}%`}
                    y1={`${startY}%`}
                    x2={`${endX}%`}
                    y2={`${endY}%`}
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.3 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />

                  {/* Animated pulse traveling along the line */}
                  <motion.circle
                    r="3"
                    fill="#4ade80"
                    filter="url(#glow)"
                    initial={{
                      cx: `${startX}%`,
                      cy: `${startY}%`,
                      opacity: 0,
                    }}
                    animate={{
                      cx: [`${startX}%`, `${endX}%`],
                      cy: [`${startY}%`, `${endY}%`],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1 + i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}

            {/* Static dots at line endpoints */}
            {[...Array(5)].map((_, i) => {
              const startX = (i + 1) * (100 / 6);

              return (
                <motion.circle
                  key={`dot-${i}`}
                  cx={`${startX}%`}
                  cy="0%"
                  r="3"
                  fill="#22c55e"
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + i * 0.1,
                  }}
                />
              );
            })}
          </svg>

          {/* Central Glowing Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="central-icon"
          >
            {/* <Zap className="zap-icon" /> */}
            <img className="zap-icon" src={x} alt="" />
          </motion.div>
        </div>

        
        
      </div>

      {/* Background gradient effect */}
      <div className="background-glow"></div>
    </section>
  );
};

export default ServiceHeroSection;
