import React from 'react'
import deepakSir from '/images/deepak-sir.webp'
import mananSir from '/images/manan-sir.webp'

const CeoSection = () => {
    return (
        <>
            <section className="ceo-msg" id="vision-mission">
                <div className="container-fluid">
                    <div className="row ">

                    <div className="col-md-4 px-0 px-0">
                            <div className="ceo-img h-100">
                                <img src={mananSir} alt="" />
                            </div>
                        </div>

                        <div className="col-md-4 h-100">
                            <div className="msg-content text-center h-100 text-white d-flex flex-column justify-content-center mt-5">
                                <h1>VISION AND MISSION</h1>
                                <p>AeonX Digital aims to deliver high-quality, innovative, and future-ready technology solutions that drive business efficiency and growth. We act as strategic enablers—helping organizations seamlessly integrate cutting-edge digital tools while balancing cost and implementation speed. Our focus is on providing practical, scalable, and cost-effective solutions that make technology adoption effortless and impactful. We believe excellence starts within our workplace and extends to our clients and communities.</p>
                                <p>Our vision is to empower businesses to scale beyond current capabilities by harnessing technology and driving innovation at every stage. With over five years of expertise in digital transformation, we help companies stay ahead of evolving technology while they focus on their core strengths. Built on experience, integrity, and a passion for innovation, AeonX Digital thrives on delivering tailored solutions that fuel long-term success. We grow by helping our clients grow.</p>
                                <div className="d-flex gap-4 justify-content-center">
                                <div className="nameandinfo mt-3" style={{borderLeft:"none"}}>
                                    <h3>100+</h3>
                                    <h5>Certified Consultants</h5>
                                </div>
                                <div className="nameandinfo my-3">
                                    <h3>25+</h3>
                                    <h5>AWS Cloud Experts</h5>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-4 px-0">
                            <div className="ceo-img h-100">
                                <img src={deepakSir} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CeoSection