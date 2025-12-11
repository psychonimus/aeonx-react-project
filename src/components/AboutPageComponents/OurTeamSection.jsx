import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Header from "../Header/Header";
import AeonxX from '/images/x-icon.webp'

const teamMembers = [
    { name: "Vikas Sharma", role: "COO", img: "/images/team/vikas-sharma.png", linkedin: "https://www.linkedin.com/in/vikas--sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Chandresh Acharya", role: "Head of operations", img: "/images/team/chandresh-acharya.png", linkedin: "https://www.linkedin.com/in/chandresh-acharya-4609031a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Karan Sankhyan", role: "Program Manager - Functional & Pre-sales", img: "/images/team/Karan-sankhyan.png", linkedin: "https://www.linkedin.com/in/karan-sankhyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Chandni Gadhvi", role: "Project Manager Data and AI", img: "/images/team/chandani-gadhvi.png", linkedin: "https://www.linkedin.com/in/chandni-gadhvi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Milan Rathod", role: "Project Manager Cloud", img: "/images/team/milan-rathod.png", linkedin: "https://www.linkedin.com/in/milanrathod?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Samudraneel Thakur", role: "Project Manager", img: "/images/team/samudraneel-thakur.png", linkedin: "https://www.linkedin.com/in/samudraneel-thakur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Amit Goregaonkar", role: "Sr. Project Manager - SAP", img: "/images/team/amit-goregaonkar.png", linkedin: "https://www.linkedin.com/in/amit-g-921133a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Vicky Gandhi", role: "Head SAP Projects", img: "/images/team/vicky-gandhi.png", linkedin: "https://www.linkedin.com/in/vicky-gandhi-5a496928?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Pranav Patil", role: "Sr. Project Manager - SAP", img: "/images/team/pranav-patil.png", linkedin: "https://www.linkedin.com/in/pranav-patil-07352469?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Priyank Pancholi", role: "Region Head - SAP", img: "/images/team/priyank-pancholi.png", linkedin: "https://www.linkedin.com/in/priyankpancholi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Sharad Raina", role: "Sales & Strategic Alliances Lead", img: "/images/team/sharad-raina.png", linkedin: "https://www.linkedin.com/in/sharad-raina-77216374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Priyanka Singh", role: "Business Development Manager", img: "/images/team/priyanka-singh.png", linkedin: "https://www.linkedin.com/in/priyanka-singh-business-development-sap-and-aws?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Milan Hota", role: "Regional Sales Manager - Middle East", img: "/images/team/milan-hota.png", linkedin: "https://www.linkedin.com/in/milanhota?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },

];

const OurTeamSection = () => {
    return (
        <section className="team-section mb-5" id="team">
            <div className="container text-center">
                <Header
                    subtext="Meet Our Team"
                    headline="The Creative Minds Behind AeonX"
                />

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-img">
                                <img src={member.img} alt={member.name} />
                                <div className="team-overlay">
                                    <div className="social-icons mb-2 ">
                                        <a target="_blank" href={member.linkedin}><FaLinkedinIn /></a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 ps-3">
                                <div className="x-img d-flex justify-content-center align-items-center">
                                    <img src={AeonxX} alt="" />
                                </div>
                                <div className="text-start">
                                    <h3>{member.name}</h3>
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
