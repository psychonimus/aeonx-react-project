import React from "react";
import { FaPlay } from "react-icons/fa";
import GlassButton from "../GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const EventHero = () => {
  return (
    <section className="event-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="event-hero-left d-flex flex-column justify-content-center h-100">
              <p className="eyebrow">Join us in our events</p>
              <h1>
                Unlock The Power <br />
                Within And Achieve <br />
                Your Dreams
              </h1>

              <div className="event-hero-buttons d-flex justify-content-start">
                <GlassButton
                  title="View All Events"
                  icon={() => <IoIosArrowDropdownCircle size={30} />}
                />

              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="event-headline">
              <h3 className="mb-3">Upcoming Events</h3>
            </div>
            <div className="event-hero-right">
              
              <div className="event-card card1">
                <div className="event-card-overlay"></div>
                <p className="event-tag">Mastermind</p>
                <h3 className="tagSub">Inner Circle Community</h3>
              </div>
              <div className="event-card card2">
                <div className="event-card-overlay"></div>
                <p className="event-tag">Coaching</p>
                <h3 className="tagSub">Business Accelerator</h3>
              </div>
              <div className="event-card card3">
                <div className="event-card-overlay"></div>
                <p className="event-tag">Partnership</p>
                <h3 className="tagSub">Platinum Partnerships</h3>
              </div>
              <div className="event-card card4">
                <div className="event-card-overlay"></div>
                <p className="event-tag">Events</p>
                <h3 className="tagSub">Unleash Her Power Within</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventHero;
