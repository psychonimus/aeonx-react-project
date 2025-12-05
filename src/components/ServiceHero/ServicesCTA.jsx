import React from 'react'
import GlassButton from '../GlassButton/GlassButton';
import ctaImg from '/images/sap-cta.webp'

const ServicesCTA = () => {
  return (
    <>
        <section className="services-cta">
            <div className="container sap-cta mb-5  ">
                <div className="row py-4 px-5 text-white">
                    <div className="col-md-6">
                        <div className="text-part">
                            <h2>Ready to transform your business with SAP?</h2>
                            <p>Let's discuss your SAP modernization journey and how we can help you achieve your goals.</p>
                            <GlassButton
                                title="Get in touch"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-part">
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