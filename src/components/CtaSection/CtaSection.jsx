import React from 'react'
import Header from '../Header/Header'
import { FaArrowRight } from 'react-icons/fa'
import GlassButtonLight from '../GlassButton/GlassButtonLight'
import { RiArrowRightCircleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { MdSms } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiYoutubeLine } from "react-icons/ri";

const CtaSection = () => {
    return (
        <>
            <section className="cta-section pb-5">
                <div className="container">
                    <Header
                        subtext="Contact Us"
                        headline="Have a Project? Let’s Talk!"

                    />

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-bg p-4">
                                <h2>Send us a Message</h2>
                                <p>Discover how we’ve collaborated with leading startups, scaleups, and enterprises to build next-gen digital solutions—from concept to </p>
                                <form className="contact-form">
                                    <div className="form-row">
                                        <input type="text" placeholder="Name" />
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="form-row">
                                        <input type="text" placeholder="Contact" />
                                        <select>
                                            <option value="">Industry</option>
                                            <option value="technology">Technology</option>
                                            <option value="finance">Finance</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="education">Education</option>
                                        </select>
                                    </div>
                                    <textarea placeholder="Tell us about your project or goals..."></textarea>

                                    <GlassButtonLight
                                        title="send message"
                                        icon={() => <RiArrowRightCircleFill color='#0173F1' size="30" />}
                                    />
                                </form>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <div className="cta-card h-100 p-4 mt-4 mt-lg-0">
                                <h2 className='mb-4'>Hii, We are always here to help you!</h2>
                                <div className="info-card d-flex gap-3 align-items-center p-2 mb-3">
                                    <div className="icon-container">
                                        <IoCall color='#fff' size="35" />
                                    </div>
                                    <div className="info-card-desc">
                                        <h4>Contact Number</h4>
                                        <a href="">022-66221640</a>
                                    </div>
                                </div>

                                <div className="info-card d-flex gap-3 align-items-center p-2 mb-3">
                                    <div className="icon-container">
                                        <MdSms color='#fff' size="35" />
                                    </div>
                                    <div className="info-card-desc">
                                        <h4>SMS/Whatsapp</h4>
                                        <a href="">022-66221640</a>
                                    </div>
                                </div>

                                <div className="info-card d-flex gap-3 align-items-center p-2 mb-3">
                                    <div className="icon-container">
                                        <MdEmail color='#fff' size="35" />
                                    </div>
                                    <div className="info-card-desc">
                                        <h4>Email</h4>
                                        <a href="">sales@aeonx.digital</a>
                                    </div>
                                </div>

                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaSection