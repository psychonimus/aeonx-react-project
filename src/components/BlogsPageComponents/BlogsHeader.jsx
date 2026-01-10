import React from "react";
import { FaPlay } from "react-icons/fa";
import GlassButton from "../GlassButton/GlassButton";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const BlogsHeader = () => {
    return (
        <section className="blogs-hero" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="blogs-hero-content d-flex flex-column justify-content-center  h-100">
                            {/* <p className="eyebrow">Latest Blogs</p> */}
                            <h1 className="mb-0" data-aos="fade-up">
                                Perspectives that Power Transformation
                            </h1>
                            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="100">Expert insights shaping the future of enterprise technology.</h3>

                            <div className="event-hero-buttons d-flex justify-content-start" data-aos="fade-up" data-aos-delay="200">
                                <GlassButton
                                    title="Read Now"
                                    icon={() => <IoIosArrowDropdownCircle size={30} />}
                                    
                                    onClick={() => {
                                        window.scrollTo({
                                            top: document.getElementById("blogs").offsetTop,
                                            behavior: "smooth"
                                        });
                                    }}
                                />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BlogsHeader;
