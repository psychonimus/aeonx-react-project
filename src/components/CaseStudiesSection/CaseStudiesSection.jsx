import React from 'react'
import Header from '../Header/Header'
import cs1 from "/images/sap-case-studies.png"
import cs2 from "/images/aws-case-studies.png"
import cs3 from "/images/aeonx-cs-banner.jpg"
import { GoGoal } from "react-icons/go";
import CsContent from './CsContent';
import { TbBulbFilled } from "react-icons/tb";
import { PiArrowFatLineUpFill } from "react-icons/pi";
import { Link } from 'react-router-dom'

const CaseStudiesSection = () => {
    return (
        <section className="case-studies pb-3">
            <div className="container">
                <Header
                    
                    highlight="Our Success Stories"
                    headline="Driving Real-World Business Impact"
                />

                <div className="row">
                    <div className="col-md-4">
                        <Link to="/case-studies?category=SAP">
                        <div className="casestudy-card">
                            <div className="cs-image-container mb-3">
                                <img src={cs1} alt="" />
                            </div>

                            <CsContent
                                
                                headline="SAP Case Studies"
                                desc="SAP Success Stories"
                            />

                            

                        </div></Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/case-studies?category=AWS">
                        <div className="casestudy-card">
                            <div className="cs-image-container mb-3">
                                <img src={cs2} alt="" />
                            </div>

                            <CsContent
                                bgColor="#C9291F"
                                icon={() => <GoGoal color="#fff" size={28} />}
                                headline="AWS Case Studies"
                                desc="AWS Success Stories"
                            />

                            

                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/case-studies?category=Aeonx">
                        <div className="casestudy-card">
                            <div className="cs-image-container mb-3">
                                <img src={cs3} alt="" />
                            </div>

                            <CsContent
                                bgColor="#C9291F"
                                icon={() => <GoGoal color="#fff" size={28} />}
                                headline="AeonX's Solutions"
                                desc="Aashapura Case Study"
                            />

                            

                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesSection