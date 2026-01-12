import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";


const blogData = [
    {
        title: "Is SAP Business Suite Really OPEX Freindly",
        date: "Jan 18, 2025",
        category: "AI & Tech",
        desc: "Over the last few years, SAP Business Suite has become one of the most discussed transformation offerings in the enterprise world. Positioned as a business-transformation-as-a-service model, Business Suite promises a faster, smoother, and cost-optimized move to SAP S/4HANA Cloud.",
        img: "/images/blog-1.webp",
        url: "/blogs/is-sap-business-suite-really-opex-freindly"
    },
    {
        title: "Common SAP S/4HANA Migration Mistakes Enterprises Must Avoid in 2025",
        date: "Sep 29, 2025",
        category: "SAP",
        desc: "With SAP ending mainstream support for ECC in 2027, time is running out for enterprises still working with older systems. Many organizations have kicked off new S/4HANA projects, expecting a smooth transition, but a startling 60% of large enterprise studies show that more than 60% of projects face serious delays, budget overruns, and only a few achieve their set business value.",
        img: "/images/sap-migration-mistakes.webp",
        url: "/blogs/sap-migration-mistakes"
    },
    {
        title: "How Does SAP Protect Your Data?",
        date: "Mar 15, 2021",
        category: "Blog, SAP",
        desc: "Any information or data recorded and stored by a business digitally needs to be protected. From financial information to payment and personal details, it is imperative that this data is protected for the safety and maintenance of your business. These can be key pieces of information commonly stored by enterprises such as consumer details, employee records, transactions, strategy, and transactions among many. They need to be prevented from being misused by fraudulent third parties.",
        img: "/images/how-sap-protect-data.webp",
        url: "/blogs/how-sap-protect-your-data"
    },
    {
        title: "Driving Innovation With SAP",
        date: "Feb 7, 2021",
        category: "Blog, SAP",
        desc: "Integrating and coordinating business operations for several enterprises worldwide, Systems Applications and Products in Data Processing or SAP has been an industry game changer. With over a number of fully integrated modules, the SAP system efficiently covers virtually every aspect of business management.",
        img: "/images/driving-innovation.webp",
        url: "/blogs/driving-innovation-with-sap"
    },
];

const BlogsCardsSection = () => {
    return (
        <section className="blogs-section mb-5" id="blogs">
            <div className="container">
                <Header
                    // subtext="Blogs"
                    highlight="Insights, Updates & Inspiration"
                    headline="Fresh perspectives to drive smarter business decisions"
                />

                <div className="blogs-grid">
                    {blogData.map((blog, index) => (
                        <div key={index} className={`blog-card p-2 box blog-card-${index + 1}`} data-aos="fade-up">

                            <Link to={blog.url} >
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
                                            {blog.desc.split(/\s+/).slice(0, 12).join(" ") + (blog.desc.split(/\s+/).length > 12 ? "..." : "")}
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
