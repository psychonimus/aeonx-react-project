import React from "react";
import { FaPlay } from "react-icons/fa";
import GlassButton from "../GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const EventHero = () => {
  return (
    <section className="event-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="event-hero-left d-flex flex-column justify-content-center h-100">
              <p className="eyebrow" data-aos="fade-up">Join us in our events</p>
              <h1 data-aos="fade-up" data-aos-delay="100">
                Unlock The Power <br />
                Within And Achieve <br />
                Your Dreams
              </h1>

              <div className="event-hero-buttons d-flex justify-content-start" data-aos="fade-up" data-aos-delay="200">
                <GlassButton
                  title="View Past Events"
                  icon={() => <IoIosArrowDropdownCircle size={30} />}
                  bg="#424242c1"
                  onClick={() => {
                    window.scrollTo({
                        top: document.getElementById("past-events").offsetTop,
                        behavior: "smooth"
                    });
                }}
                />

              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="event-headline">
              <h3 className="mb-3" data-aos="fade-up">Upcoming Events</h3>
            </div>
            <div className="event-hero-right">
              
              <div className="event-card card1" data-aos="fade-up" data-aos-delay="200">
                <div className="event-card-overlay"></div>
                <h3 className="tagSub">SAP Innovation Day </h3>
                <p className="event-tag">Q1</p>
              </div>
              <div className="event-card card2" data-aos="fade-up" data-aos-delay="300">
                <div className="event-card-overlay"></div>
                <h3 className="tagSub">SAP NOW Mumbai </h3>
                <p className="event-tag">Q2</p>
              </div>
              <div className="event-card card3" data-aos="fade-up" data-aos-delay="400">
                <div className="event-card-overlay"></div>
                <h3 className="tagSub">SAP Innovation Day </h3>
                <p className="event-tag">Q2 </p>
              </div>
              <div className="event-card card4" data-aos="fade-up" data-aos-delay="500">
                <div className="event-card-overlay"></div>
                <h3 className="tagSub">SAP NOW Delhi  </h3>
                <p className="event-tag">Q3</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventHero;
