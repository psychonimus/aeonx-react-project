import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FlagshipProducts.css';

import project1 from '/images/xpense-bg.png';
import project2 from '/images/supplier-x-bg.png';
import project3 from '/images/logystix-bg.png';
import project4 from '/images/manufex-logo.png';
import project5 from '/images/people-connect-logo.png';
import project6 from '/images/aeonxiq-bg.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Xpense', image: project1, link: '#' },
  { id: 2, title: 'SupplierX', image: project2, link: '#' },
  { id: 3, title: 'Logystix', image: project3, link: '#' },
  { id: 4, title: 'Manufex ', description: 'Monitor real-time factory operations with IoT-driven insights for better efficiency. Seamlessly integrated with Google AI to deliver predictive insights, advanced analytics, and real-time recommendations that optimize your factory performance and reduce downtime.', image: project4, link: '#' },
  { id: 5, title: 'People connect', description: 'Cpef', image: project5, link: '#' },
  { id: 6, title: 'aeonxiq ai ', image: project6, link: '#' },
];

const HorizontalAccordion = () => {
  const sectionRef = useRef(null);
  const accordionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const items = itemsRef.current.filter(Boolean);

      if (!section || items.length === 0) return;

      const totalItems = items.length;

      // Initial state
      items.forEach((item, index) => {
        if (index === 0) {
          item.classList.add('active');
          item.classList.remove('collapsed');
        } else {
          item.classList.add('collapsed');
          item.classList.remove('active');
        }
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=3000',
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeIndex = Math.min(
            Math.floor(progress * totalItems),
            totalItems - 1
          );

          items.forEach((item, index) => {
            if (index === activeIndex) {
              item.classList.add('active');
              item.classList.remove('collapsed');
            } else {
              item.classList.add('collapsed');
              item.classList.remove('active');
            }
          });
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef); // Scope to sectionRef

    return () => ctx.revert();
  }, []);

  const formatNumber = (num) => {
    return `(${num.toString().padStart(2, '0')})`;
  };

  return (
    <>
      <div className="flagship-products-wrapper" style={{ position: 'relative', zIndex: 5 }}>
        {/* Pin Section */}
        <div ref={sectionRef} className="pin-section p-4" style={{ height: '100vh', width: '100%' }}>
          <div ref={accordionRef} className="horizontal-accordion">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className="accordion-item"
              >
                {/* Background Image */}
                <div className={`accordion-content px-5 accordion-content-box-${index}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="accordion-image mt-5"
                  />
                  
                  {/* <p className='mt-3'>{project.description}</p> */}
                  <div className="accordion-overlay" />
                </div>

                {/* Number */}
                <span className="accordion-number">
                  {formatNumber(project.id)}
                </span>

                {/* Title */}
                <span className="accordion-label">{project.title}</span>

                {/* Visit Button */}
                <a href={project.link} className="visit-button">
                  <div className="visit-circle">
                    <div className="visit-text">
                      Visit
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalAccordion;
