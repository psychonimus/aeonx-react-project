import React from "react";
import { FaPlay } from "react-icons/fa";
import GlassButton from "../GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const LifeHero = () => {
    return (
        <section className="life-hero sap-focused-products-hero" style={{height:"100vh"}} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="life-hero-content text-center d-flex flex-column justify-content-center  h-100">
                            <p className="eyebrow">Life at AeonX Digital</p>
                            <h1 className="mb-0">
                                Where Innovation Thrives and People Grow
                            </h1>
                            <p className="mb-4">At AeonX Digital, we believe that great work happens when talented minds collaborate in an environment that empowers creativity and continuous learning. Our culture is built on trust, openness, and a shared passion for solving real-world problems through technology. From meaningful projects to a strong sense of community, we ensure every team member feels valued, supported, and inspired to become their best self.</p>

                            <div className="event-hero-buttons d-flex justify-content-center">
                                <GlassButton
                                    title="Explore Culture at AeonX"
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

export default LifeHero;
