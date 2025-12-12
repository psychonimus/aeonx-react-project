import React from 'react'
import GlassButton from '../GlassButton/GlassButton';
import ctaImg from '/images/sap-cta.webp'

const ServicesCTA = () => {
    return (
        <>
            <section className="services-cta p-2 p-md-0">
                <div className="container sap-cta mb-5  ">
                    <div className="row py-4 px-3 px-md-5 text-white">
                        <div className="col-md-6">
                            <div className="text-part text-center text-md-start">
                                <h2>Ready to transform your business with SAP?</h2>
                                <p>Let's discuss your SAP modernization journey and how we can help you achieve your goals.</p>
                                <div className='d-flex justify-content-center justify-content-md-start'>
                                    <GlassButton
                                    title="Get in touch"
                                    href="/contact"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-part mt-3 mt-md-0">
                                <img src={ctaImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesCTA