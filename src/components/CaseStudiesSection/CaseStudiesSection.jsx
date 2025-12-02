import React from 'react'
import Header from '../Header/Header'
import cs1 from "/images/cs-1.webp"
import cs2 from "/images/cs-2.webp"
import cs3 from "/images/cs-3.webp"
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
                    subtext="Case Studies"
                    headline="AeonX Solutions"
                    highlight="Driving Enterprise Success"
                />

                <div className="row">
                    <div className="col-md-4">
                        <Link to="/case-study">
                        <div className="casestudy-card">
                            <div className="cs-image-container mb-3">
                                <img src={cs1} alt="" />
                            </div>

                            <CsContent
                                
                                headline="Aashapura Case Study"
                                desc="Crippling SAP Procurement Delays"
                            />

                            

                        </div></Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/case-study">
                        <div className="casestudy-card">
                            <div className="cs-image-container mb-3">
                                <img src={cs2} alt="" />
                            </div>

                            <CsContent
                                bgColor="#C9291F"
                                icon={() => <GoGoal color="#fff" size={28} />}
                                headline="Industry Challenge"
                                desc="Crippling SAP Procurement Delays"
                            />

                            

                        </div>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/case-study">
                        <div className="casestudy-card">
                            <div className="cs-image-container mb-3">
                                <img src={cs3} alt="" />
                            </div>

                            <CsContent
                                bgColor="#C9291F"
                                icon={() => <GoGoal color="#fff" size={28} />}
                                headline="Industry Challenge"
                                desc="Crippling SAP Procurement Delays"
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