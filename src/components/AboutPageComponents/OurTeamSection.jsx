import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Header from "../Header/Header";
import AeonxX from '/images/x-icon.webp'

const teamMembers = [
    { name: "Priyank Pancholi", role: "Region Head - SAP", img: "/images/team/priyank-pancholi.png" },
    { name: "Amit Goregaonkar", role: "Sr. Project Manager - SAP", img: "/images/team/amit-goregaonkar.png" },
    { name: "Milan Rathod", role: "Project Manager Cloudr", img: "/images/team/milan-rathod.png" },
    { name: "Milan Hota", role: "Regional Sales Manager - Middle East", img: "/images/team/milan-hota.png" },
    { name: "Priyanka Singh", role: "Business Development Manager", img: "/images/team/priyanka-singh.png" },
    { name: "Vicky Gandhi", role: "Head SAP Projects", img: "/images/team/vicky-gandhi.png" },
    { name: "Chandresh Acharyah", role: "Head of operations", img: "/images/team/chandresh-acharya.png" },
    { name: "Vikas Sharma", role: "COO", img: "/images/team/vikas-sharma.png" },

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
                                        <a href="#"><FaLinkedinIn /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaEnvelope /></a>
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
