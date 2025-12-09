import { div } from "framer-motion/client";
import React from "react";

const ValueData = [
  {
    title: "Innovation",
    desc: "We challenge conventions and explore what’s next. By blending technology, creativity, and strategy, we build future-ready digital solutions. Innovation drives everything we design, develop, and deliver.",
  },
  {
    title: "Integrity",
    desc: "Trust is at the core of every partnership we build. We act with transparency, honesty, and accountability in all our engagements. Our commitments guide our actions, always.",
  },
  {
    title: "Collaboration",
    desc: "Great outcomes are built together. We work as an extension of our clients’ teams through open communication and shared goals. Collaboration fuels smarter decisions and stronger results.",
  },
  {
    title: "Excellence",
    desc: "We set high standards and consistently exceed them. Every project reflects our focus on quality, precision, and performance. Excellence is not an act, it’s our mindset.",
  },
  {
    title: "Ownership",
    desc: "We take responsibility from strategy to execution. Each challenge is treated as our own, with proactive thinking and decisive action. Ownership ensures accountability, agility, and impact.",
  },
];

const CoreValuesSection = () => {
  return (
    <>
      <section className="core-values py-5">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2>Our Core Values</h2>
              <h4>Principles That Guide Every Step We Take</h4>
            </div>
            <div className="col-md-6">
              <p>
                At AeonX Digital, our core values shape the way we think, build,
                and collaborate. They reflect our commitment to excellence,
                integrity, and innovation. These principles guide our decisions,
                strengthen our culture, and help us deliver meaningful impact
                for our clients, partners, and team.
              </p>
            </div>
          </div>

          <div className="value-grid">
            {ValueData.map((value, index) => (
              <div key={index} className={`value-card value-${index + 1}`}>
                <div className="value-overlay p-3">
                  <div className="content-div">
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValuesSection;
