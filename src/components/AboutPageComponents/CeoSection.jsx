import React from 'react'
import deepakSir from '/images/deepak-sir.png'
import mananSir from '/images/manan-sir.png'

const CeoSection = () => {
    return (
        <>

        <section className="ceo-msg-img d-none d-lg-block" id="vision-mission" data-aos="fade-up">
            <img src="/images/vision-banner.png" alt="" />
        </section>

        <section className="ceo-msg d-lg-none" id="vision-mission" data-aos="fade-up">
                <div className="container-fluid" >
                    <div className="row ">

                        <div className="col-6 order-2 col-xl-4  px-0 px-0">
                            <div className="ceo-img h-100">
                                <img src={mananSir} alt="" />
                            </div>
                        </div>

                        <div className="col-12 order-1 col-xl-4 order-xl-2   h-100">
                            <div className="msg-content text-center h-100 text-white d-flex flex-column justify-content-center mt-5 px-3 px-lg-0">
                                <h1 data-aos="fade-up">VISION AND MISSION</h1>
                                <p data-aos="fade-up" data-aos-delay="100" >AeonX Digital delivers innovative, future-ready technology solutions that drive business efficiency and growth. We act as strategic enablers, helping organizations adopt cutting-edge tools while balancing cost and speed. Our focus is on practical, scalable, and impactful solutions. Excellence starts within our workplace and extends to clients and communities.</p>
                                <p data-aos="fade-up" data-aos-delay="200" >Our vision is to empower businesses to scale beyond current capabilities through technology and innovation. With five years of expertise in digital transformation, we help companies stay ahead while focusing on their core strengths. Built on experience, integrity, and innovation, AeonX Digital delivers tailored solutions for long-term success. We grow by helping our clients grow.</p>
                                <div className="d-flex gap-4 justify-content-center" data-aos="fade-up" data-aos-delay="300">
                                    <div className="nameandinfo mt-3" style={{ borderLeft: "none" }}>
                                        <h3>250+</h3>
                                        <h5>Certified Consultants</h5>
                                    </div>
                                    <div className="nameandinfo my-3">
                                        <h3>50+</h3>
                                        <h5>AWS Cloud Experts</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-6 order-3 col-xl-4 px-0">
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