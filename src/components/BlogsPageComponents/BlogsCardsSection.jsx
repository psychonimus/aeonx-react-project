import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


const blogData = [
    {
        title: "Is Rise with SAP Really OPEX Freindly",
        date: "Jan 18, 2025",
        category: "AI & Tech",
        desc: "desc 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
        img: "/images/blog-1.webp",
        url: "/blogs/is-rise-with-sap-really-opex-freindly"
    },
    {
        title: "How Cloud Computing is Changing Businesses",
        date: "Jan 12, 2025",
        category: "Cloud",
        desc: "desc 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
        img: "/images/blog2.webp",
    },
    {
        title: "Mastering UX: Tips for Better User Experiences",
        date: "Dec 22, 2024",
        category: "UX Design",
        desc: "desc 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
        img: "/images/blog3.webp",
    },
    {
        title: "Top 10 SAP Solutions You Should Know",
        date: "Nov 10, 2024",
        category: "SAP",
        desc: "desc 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
        img: "/images/blog4.webp",
    },
    {
        title: "Building Scalable Modern Apps with AWS",
        date: "Oct 15, 2024",
        category: "AWS",
        desc: "desc 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
        img: "/images/blog5.webp",
    },
    {
        title: "Digital Strategy for Modern Enterprises",
        date: "Sep 5, 2024",
        category: "Strategy",
        desc: "desc 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique.",
        img: "/images/blog6.webp",
    },
];

const BlogsCardsSection = () => {
    return (
        <section className="blogs-section mb-5">
            <div className="container">
                <Header
                    subtext="Blogs"
                    headline="Fresh Perspectives to Fuel Your Growth"
                    highlight="Insights, Updates & Inspiration"
                />

                <div className="blogs-grid">
                    {blogData.map((blog, index) => (
                        <div key={index} className={`blog-card p-2 box blog-card-${index + 1}`}>

                            <Link to={blog.url}>
                                <div className="blog-img">
                                    <img src={blog.img} alt="" />
                                </div>



                                <div className="blog-hover">
                                    <div className="blog-content">
                                        <h3>{blog.title}</h3>

                                        <p className="blog-desc">
                                            <p className="blog-meta">
                                                {blog.category} • {blog.date}
                                            </p>
                                            {blog.desc}
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogsCardsSection;
