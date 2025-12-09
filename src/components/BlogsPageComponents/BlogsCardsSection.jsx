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
        title: "A Sap Consultant Guide 2022 : Career, Salary, Jobs, Scope, Skill",
        date: "Mar 11, 2022 | Blog, SAP, Training",
        category: "Blog, SAP, Training",
        desc: "A Sap Consultant Guide 2022 : Career, Salary, Jobs, Scope, Skills, Future SAP consultants are in high demand due to",
        img: "/images/blog3.webp",
    },
    {
        title: "How Does SAP Protect Your Data?",
        date: "Mar 15, 2022",
        category: "Blog, SAP, Training",
        desc: "Any information or data recorded and stored by a business digitally needs to be protected. ",
        img: "/images/blog4.webp",
    },
    {
        title: "Driving Innovation With SAP",
        date: "Feb 7, 2021",
        category: "Blog, SAP",
        desc: "Integrating and coordinating business operations for several enterprises worldwide",
        img: "/images/blog5.webp",
    },
    {
        title: "Top 30 SAP Interview Questions & Answers",
        date: "Jan 28, 2021",
        category: "Blog, SAP",
        desc: "Working in SAP is fundamentally a technical job and while theory and strong concepts are imperative for candidates",
        img: "/images/blog6.webp",
    },
    {
        title: "E-Invoicing Under GST India",
        date: "Dec 29, 2020",
        category: "Blog, SAP",
        desc: "E-Invoicing Under GST India: Where Efficiency Meets Transparency Over the years",
        img: "/images/blog6.webp",
    },
    {
        title: "Where There Is Business, There is SAP",
        date: "Dec 16, 2020",
        category: "Blog, SAP",
        desc: "A typical business enterprise has numerous departments and units which are constantly communicating",
        img: "/images/blog6.webp",
    },
    {
        title: "Search String in Electronic Bank Reconciliation – MT940 Format – Part II",
        date: "Oct 19, 2020",
        category: "Blog, SAP",
        desc: "Hello, This is with reference to my earlier blog post which is Steps to Activate",
        img: "/images/blog6.webp",
    },
    {
        title: "Steps to Activate Electronic Bank Reconciliation Statement – MT940 Format – Part I",
        date: "Oct 19, 2020",
        category: "Blog, SAP",
        desc: "Hi, SAP have the features of Electronic Bank Reconciliation Statement (EBRS) process",
        img: "/images/blog6.webp",
    },
    {
        title: "Sales Order – Level Approval Workflow and release from Credit Block 2 in 1I",
        date: "Oct 12, 2020",
        category: "Blog, SAP",
        desc: "There are many standard workflow scenarios available but some business requirements can",
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
