import React from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Header from "../Header/Header";
import AeonxX from '/images/x-icon.webp'

const teamMembers = [
    { name: "Aarav Shah", role: "CEO & Founder", img: "/images/team-1.webp" },
    { name: "Neha Patel", role: "Creative Director", img: "/images/team-2.webp" },
    { name: "Rohan Verma", role: "Lead Developer", img: "/images/team-3.webp" },
    { name: "Ishita Mehta", role: "UI/UX Designer", img: "/images/team-4.webp" },
    { name: "Arjun Singh", role: "Marketing Head", img: "/images/team-5.webp" },
    { name: "Arjun Singh", role: "Marketing Head", img: "/images/team-3.webp" },
    { name: "Arjun Singh", role: "Marketing Head", img: "/images/team-1.webp" },
    { name: "Arjun Singh", role: "Marketing Head", img: "/images/team-4.webp" },

];

const OurTeamSection = () => {
    return (
        <section className="team-section mb-5">
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
