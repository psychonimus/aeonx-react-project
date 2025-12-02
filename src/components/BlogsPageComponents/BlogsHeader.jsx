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
                            <p className="eyebrow">Latest Blogs</p>
                            <h1 className="mb-0">
                                Explore Our Latest Blogs
                            </h1>
                            <h3 className="mb-4">Thoughtful articles designed to guide, educate, and empower you.</h3>

                            <div className="event-hero-buttons">
                                <GlassButton
                                    title="Explore Our Blogs"
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

export default BlogsHeader;
