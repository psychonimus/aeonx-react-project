import React from 'react'
import Header from '../Header/Header'
import whyJoinUs from '/images/whyjoinus.png'
import { PiCertificateFill } from "react-icons/pi";
const WhyJoinUsSection = () => {
  return (
    <>
        <section className="whyjoinus">
            <Header
                subtext="Why Join Us"
                headline="Why Work with AeonX?"
            />

            <div className="wwu-img-container">
                <img src={whyJoinUs} alt="" />
            </div>
            <div className="container-fluid www-content py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="wwu-box p-3 h-100">
                            <div className="icon d-inline-flex p-2">
                                <PiCertificateFill size={50} color='#fff' />
                            </div>
                            <h4 className='mt-3'>Certification and on-the-job training</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wwu-box p-3 h-100">
                            <div className="icon d-inline-flex p-2">
                                <PiCertificateFill size={50} color='#fff' />
                            </div>
                            <h4 className='mt-3'>Secure future</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wwu-box p-3 h-100">
                            <div className="icon d-inline-flex p-2">
                                <PiCertificateFill size={50} color='#fff' />
                            </div>
                            <h4 className='mt-3'>People first culture</h4>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="wwu-box p-3 h-100">
                            <div className="icon d-inline-flex p-2">
                                <PiCertificateFill size={50} color='#fff' />
                            </div>
                            <h4 className='mt-3'>Fastest growing ERP consultants in India</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wwu-box p-3 h-100">
                            <div className="icon d-inline-flex p-2">
                                <PiCertificateFill size={50} color='#fff' />
                            </div>
                            <h4 className='mt-3'>Backed by one of the biggest mining companies in India</h4>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="wwu-box p-3 h-100">
                            <div className="icon d-inline-flex p-2">
                                <PiCertificateFill size={50} color='#fff' />
                            </div>
                            <h4 className='mt-3'>Certification and on-the-job training</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyJoinUsSection