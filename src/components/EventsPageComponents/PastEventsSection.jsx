import React, { useState } from "react";
import Header from '../Header/Header'
const PastEventSection = () => {
  const images = [
    "/images/event/sap-ste-tour/sap-ste-tour-1.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-2.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-3.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-4.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-5.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-6.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-7.webp",
    "/images/event/sap-ste-tour/sap-ste-tour-8.jpg",
  ];

  const ceoConclave = [
    "/images/event/cio-conclave-event/ceo-conclave-1.webp",
    "/images/event/cio-conclave-event/ceo-conclave-2.webp",
    "/images/event/cio-conclave-event/ceo-conclave-3.JPG",
    "/images/event/cio-conclave-event/ceo-conclave-4.jpeg",
    "/images/event/cio-conclave-event/ceo-conclave-5.webp",
    "/images/event/cio-conclave-event/ceo-conclave-6.webp",
    "/images/event/cio-conclave-event/ceo-conclave-7.webp",
    "/images/event/cio-conclave-event/ceo-conclave-8.JPG",
  ];

  const images2 = [
    "/images/event/elevateXevent/elevatex-1.webp",
    "/images/event/elevateXevent/elevatex-2.webp",
    "/images/event/elevateXevent/elevatex-3.webp",
    "/images/event/elevateXevent/elevatex-4.webp",
    "/images/event/elevateXevent/elevatex-5.webp",
    "/images/event/elevateXevent/elevatex-6.webp",
    "/images/event/elevateXevent/elevatex-7.webp",
    "/images/event/elevateXevent/elevatex-8.webp",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openLightbox = (src) => {
    setCurrentImg(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="bento-section" id="past-events" >
        
        <Header 
            
            highlight="A Look Back at Events"
            headline="That Inspired Innovation"
        />


      <div className="container" data-aos="fade-up">
        <h2 className="bento-title mt-2 ">SAP STE TOUR</h2>
        <p className="bento-date ">Kolkata, Mumbai, New Delhi, Bangalore</p>

        <div className="img-grid mb-5">
          {images.map((src, i) => (
            <div className={`img-box box-${i + 1}`} key={i} onClick={() => openLightbox(src)}>
              <img src={src} alt={`bento-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <h2 className="bento-title mt-2 ">CIO Conclave</h2>
        <p className="bento-date ">Ahmedabad, Mumbai</p>

        <div className="img-grid mb-5">
          {ceoConclave.map((src, i) => (
            <div className={`img-box box-${i + 1}`} key={i} onClick={() => openLightbox(src)}>
              <img src={src} alt={`bento-${i}`} />
            </div>
          ))}
        </div>
      </div>


      <div className="container" data-aos="fade-up">
        <h2 className="bento-title mt-2 ">Elevate X </h2>
        <p className="bento-date ">Pune, Ahmedabad, Kolkata, Chandigarh</p>

        <div className="img-grid mb-5">
          {images2.map((src, i) => (
            <div className={`img-box box-${i + 1}`} key={i} onClick={() => openLightbox(src)}>
              <img src={src} alt={`bento-${i}`} />
            </div>
          ))}
        </div>
      </div>




      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <img src={currentImg} alt="lightbox-img" />
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PastEventSection;
