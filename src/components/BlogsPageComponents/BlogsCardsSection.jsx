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
        title: "Common SAP S/4HANA Migration Mistakes Enterprises Must Avoid in 2025",
        date: "Sep 29, 2025",
        category: "SAP",
        desc: "With SAP ending mainstream support for ECC in 2027, time is rushing for enterprises still working with older systems. Many organizations have kicked off their SAP S/4HANA migration journey",
        img: "/images/sap-migration-mistakes.jpg",
        url: "/blogs/sap-migration-mistakes"
    },
    {
        title: "How Does SAP Protect Your Data?",
        date: "Mar 15, 2021",
        category: "Blog, SAP",
        desc: "Any information or data recorded and stored by a business digitally needs to be protected.",
        img: "/images/how-sap-protect-data.jpg",
        url: "/blogs/how-sap-protect-your-data"
    },
    {
        title: "Driving Innovation With SAP",
        date: "Feb 7, 2021",
        category: "Blog, SAP",
        desc: "Integrating and coordinating business operations for several enterprises worldwide ",
        img: "/images/driving-innovation.jpg",
        url: "/blogs/driving-innovation-with-sap"
    },
];

const BlogsCardsSection = () => {
    return (
        <section className="blogs-section mb-5" id="blogs">
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
