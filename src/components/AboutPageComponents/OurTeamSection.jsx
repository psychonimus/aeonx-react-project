import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Header from "../Header/Header";
import AeonxX from '/images/x-icon.webp'

const teamMembers = [
    { name: "Vikas Sharma", role: "Chief Operating Officer", img: "/images/team/vikas-sharma.png", linkedin: "https://www.linkedin.com/in/vikas--sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Chandresh Acharya", role: "Head of operations", img: "/images/team/chandresh-acharya.webp", linkedin: "https://www.linkedin.com/in/chandresh-acharya-4609031a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Karan Sankhyan", role: "Program Manager - Functional & Pre-sales", img: "/images/team/karan-sankhyan.webp", linkedin: "https://www.linkedin.com/in/karan-sankhyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Chandni Gadhvi", role: "Program Manager - Data and AI", img: "/images/team/chandani-gadhvi-new.jpeg", linkedin: "https://www.linkedin.com/in/chandni-gadhvi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Milan Rathod", role: "Project Manager Cloud", img: "/images/team/milan-rathod.png", linkedin: "https://www.linkedin.com/in/milanrathod?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Samudraneel Thakur", role: "Product Manager", img: "/images/team/samudraneel-thakur.webp", linkedin: "https://www.linkedin.com/in/samudraneel-thakur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Amit Goregaonkar", role: "Senior Project Manager – SAP", img: "/images/team/amit-goregaonkar.webp", linkedin: "https://www.linkedin.com/in/amit-g-921133a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Vicky Gandhi", role: "Senior Project Manager -SAP", img: "/images/team/vicky-gandhi.webp", linkedin: "https://www.linkedin.com/in/vicky-gandhi-5a496928?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Pranav Patil", role: "Senior Project Manager - SAP", img: "/images/team/pranav-patil.webp", linkedin: "https://www.linkedin.com/in/pranav-patil-07352469?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Priyank Pancholi", role: "Region Head", img: "/images/team/priyank-pancholi-new.jpeg", linkedin: "https://www.linkedin.com/in/priyankpancholi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Sharad Raina", role: "Sales & Strategic Alliances Lead", img: "/images/team/sharad-raina.webp", linkedin: "https://www.linkedin.com/in/sharad-raina-77216374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Priyanka Singh", role: "Business Development Manager", img: "/images/team/priyanka-singh-new.jpeg", linkedin: "https://www.linkedin.com/in/priyanka-singh-business-development-sap-and-aws?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Milan Hota", role: "Regional Sales Manager - Middle East", img: "/images/team/milan-hota-new.jpeg", linkedin: "https://www.linkedin.com/in/milanhota?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },

];

const OurTeamSection = () => {
    return (
        <section className="team-section mb-5" id="team">
            <div className="container text-center">
                <Header
                    highlight="Meet Our Team"
                    headline="The Creative Minds Behind AeonX"
                />

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index} data-aos="fade-up">
                            <div className="team-img">
                                <img src={member.img} alt={member.name} />
                                <div className="team-overlay">
                                    <div className="social-icons mb-2 ">
                                        <a target="_blank" href={member.linkedin}><FaLinkedinIn /></a>

                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 px-2">
                                <div className="x-img d-flex justify-content-center align-items-center">
                                    <img src={AeonxX} className="mt-3 mt-md-0" alt="" />
                                </div>
                                <div className="text-center text-md-start">
                                    <h3 className="mt-0 mt-md-3">{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeamSection;
