import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FlagshipProducts.css';

import project1 from '/images/xpense-bg.png';
import project1mob from '/images/xpense-bg-mob.png';
import project2 from '/images/supplier-x-bg.png';
import project2mob from '/images/supplier-x-bg-mob.png';
import project3 from '/images/logystix-bg.png';
import project3mob from '/images/logystix-bg-mob.png';
import project4 from '/images/manufex-bg.png';
import project4mob from '/images/manufex-bg-mob.png';
import project5 from '/images/people-connect-bg.png';
import project5mob from '/images/people-connect-bg-mob.png';
import project6 from '/images/aeonxiq-bg.png';
import project6mob from '/images/aeonxiq-bg-mob.png';
import Header from '../Header/Header';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Xpense', image: project1, imageMob: project1mob, link: 'https://xpense.aeonx.digital/' },
  { id: 2, title: 'SupplierX', image: project2, imageMob: project2mob, link: 'https://supplierx.aeonx.digital/' },
  { id: 3, title: 'LOGYSTIX', image: project3, imageMob: project3mob, link: 'https://logystix.cloud/' },
  { id: 4, title: 'Manufex ', image: project4, imageMob: project4mob, link: 'https://dev.manufex.cloud/' },
  { id: 5, title: 'People connect', image: project5, imageMob: project5mob, link: 'https://dev.aeonxus.digital/' },
  { id: 6, title: 'aeonxiq.ai ', image: project6, imageMob: project6mob, link: 'https://aeonxiq.ai/' },
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
        end: '+=2000',
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

    // Force refresh to handle layout shifts (e.g. from images loading)
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const formatNumber = (num) => {
    return `(${num.toString().padStart(2, '0')})`;
  };

  return (
    <>
      <div className="contaner-fluid" style={{}} >
        <Header
          highlight="Our Product Suite"
          headline="Discover Flagship Innovations"
        />
      </div>

      <div className="flagship-products-wrapper" style={{}}>
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
                <div className={`accordion-content accordion-content-box-${index}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="accordion-image"
                  />

                  <img
                    src={project.imageMob}
                    alt={project.title}
                    className="accordion-image-mob"
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
                <a target='_blank' href={project.link} className="visit-button">
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
