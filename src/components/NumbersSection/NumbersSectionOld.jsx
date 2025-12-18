import React from 'react'
import xLogo from '/images/aeonx-x-icon.webp'
import infoOne from '/images/info-1.webp'
import infoTwo from '/images/info-2.webp'
import infoThree from '/images/info-3.webp'
import infoFour from '/images/info-4.webp'
import infoFive from '/images/info-5.webp'
import infoSix from '/images/info-6.webp'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Xicon from '../ProductShowcase/ThreeDX'




const NumbersSectionOld = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <>
            <div
                className="container-fluid py-5 bgBlackDiv"
                style={{ color: "#fff" }}
            >
                <span className="radar" />
                <span className="radar" />
                <span className="radar" />
                <div className="container-fluid mb-5">
                    <div className="text-center">
                        <div className="metrics-title">
                            <h2>GLOBAL IMPACT</h2>
                            <h3>BY THE NUMBERS</h3>
                            {/* <p>Connecting people, data, and ideas across borders with measurable outcomes.</p> */}
                        </div>
                    </div>
                    <div className="infoGraphicDiv row d-flex align-items-center">
                        <div className="rightInfo col-lg-4 col-md-4 col-6 order-2 order-md-1">
                            <div className="rightDivContent d-flex align-items-center py-4 row justify-content-center">
                                <div className="infoIcon col-md-6">
                                    <img src={infoOne} width="90%" />
                                </div>
                                <div ref={ref} className="info text-center col-md-6 ">
                                    <span className="infoPoints">{inView ? <CountUp end={25} duration={2.5} /> : "0"}+</span>
                                    <h6>Publicly Listed Companies are our customers.</h6>
                                </div>
                            </div>
                            <div className="rightDivContent d-flex align-items-center py-4 row justify-content-center">
                                <div className="infoIcon col-md-6">
                                    <img src={infoTwo} width="90%" />
                                </div>
                                <div className="info text-center col-md-6">
                                    <span className="infoPoints">{inView ? <CountUp end={30} duration={2.5} /> : "0"}+</span>
                                    <h6>S/4HANA Implementation, Upgrade, Migration, Conversion & Rollout projects executed</h6>
                                </div>
                            </div>
                            <div className="rightDivContent align-items-center py-4 row justify-content-center">
                                <div className="infoIcon col-md-6">
                                    <img src={infoThree} width="90%" />
                                </div>
                                <div className="info text-center col-md-6">
                                    <span className="infoPoints">{inView ? <CountUp end={10000} duration={2.5} /> : "0"}+</span>
                                    <h6>SAP End Users Supported</h6>
                                </div>
                            </div>
                        </div>
                        <div className="centerInfo col-lg-4 col-md-4 text-center order-md-2 order-1 ">
                            <img src={xLogo} />



                        </div>
                        <div className="rightInfo col-lg-4 col-md-4 col-6 order-md-3 order-3">
                            <div className="rightDivContent d-flex align-items-center py-4 row justify-content-center">
                                <div className="infoIcon col-md-6">
                                    <img src={infoFour} width="90%" />
                                </div>
                                <div className="info text-center col-md-6 ">
                                    <span className="infoPoints">{inView ? <CountUp end={50} duration={2.5} /> : "0"}+</span>
                                    <h6>Cloud Migration Projects Completed</h6>
                                </div>
                            </div>
                            <div className="rightDivContent d-flex align-items-center py-4 row justify-content-center">
                                <div className="infoIcon col-md-6">
                                    <img src={infoFive} width="90%" />
                                </div>
                                <div className="info text-center col-md-6">
                                    <span className="infoPoints">{inView ? <CountUp end={5} duration={2.5} /> : "0"}</span>
                                    <h6>Countries Served Across Key Markets</h6>
                                </div>
                            </div>
                            <div className="rightDivContent align-items-center py-4 row justify-content-center">
                                <div className="infoIcon col-md-6">
                                    <img src={infoSix} width="90%" />
                                </div>
                                <div className="info text-center col-md-6">
                                    <span className="infoPoints">ISO</span>
                                    <h6>ISO 9001-2015, 27001-2022 and Great Place to work Certified.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NumbersSectionOld