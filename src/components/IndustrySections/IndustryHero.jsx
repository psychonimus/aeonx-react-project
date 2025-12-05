import React from "react";
import { FaPlay } from "react-icons/fa";
import GlassButton from "../GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./IndustryHero.css"

const IndustryHero = () => {
    return (
        <section className="industry-hero" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="industry-hero-content d-flex flex-column justify-content-center  h-100">
                            <p className="eyebrow">Industries</p>
                            <h1 className="mb-0">
                                Explore Our Served Industries
                            </h1>
                            <h3 className="mb-4">Different Domains, Specific Solutions</h3>

                            <div className="event-hero-buttons">
                                <GlassButton
                                    title="Explore Our Industries"
                                    icon={() => <IoIosArrowDropdownCircle size={30} />}
                                />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default IndustryHero;
