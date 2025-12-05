import React from 'react'
import Header from '../Header/Header'
import './SapSupport.css'
import flex from '/images/sap-support-1.png'
import buildX from '/images/sap-support-2.png'

const SapSupport = () => {
    return (
        <>
            <section className="sap-support">
                <div className="container py-5">
                    <div className="sap-support-heading text-center">
                        <h2>SAP SUPPORT SERVICES</h2>
                        <p>Our SAP support models are designed to give businesses flexibility, control, and long-term value. They are built around agility, transparency, and uninterrupted innovation, leveraging deep expertise across SAP S/4HANA, SAP Rise, SAP Cloud solutions, and managed services.</p>
                    </div>

                    <div className="sap-support-parent py-3">
                        <div className="sap-support-child sap-support-child-1 p-3">
                            <div className="sap-support-child-content p-3">
                                <img src={flex} alt="" />
                                {/* <h2>FLEX</h2> */}
                                <ul className='mt-3'>
                                    <li>No minimum commitment, No Scope Restrictions.</li>
                                    <li>Hourly rate Contract.</li>
                                    <li>Unlimited Development.</li>
                                    <li>Monthly Billed.</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="sap-support-child sap-support-child-2 p-3">
                            <div className="sap-support-child-content p-3">
                                <img src={buildX} alt="" />
                                {/* <h2>FLEX</h2> */}
                                <ul className='mt-3'>
                                    <li>Minimum commitment.</li>
                                    <li>No Scope Restrictions.</li>
                                    <li>Predefine Efforts for all.</li>
                                    <li>Unlimited Development.</li>
                                    <li>Monthly Billed.</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="sap-support-child sap-support-child-3 p-3 d-flex justify-content-center align-items-center">
                            <h2 className='mt-4 text-center'>SAP SUPPORT SERVICES</h2>
                        </div>
                        <div className="sap-support-child sap-support-child-4 p-3">
                            <div className="sap-support-child-content p-3">
                                <img src={flex} alt="" />
                                {/* <h2>FLEX</h2> */}
                                <ul className='mt-3'>
                                    <li>Annual Commitment.</li>
                                    <li>Fixed Scope.</li>
                                    <li>Fixed Contract value.</li>
                                    <li>Monthly Billed.</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="sap-support-child sap-support-child-5 p-3">
                            <div className="sap-support-child-content p-3">
                                <img src={flex} alt="" />
                                {/* <h2>FLEX</h2> */}
                                <ul className='mt-3'>
                                    <li>Annual commitment.</li>
                                    <li>No Scope Restrictions.</li>
                                    <li>Fixed Contract value.</li>
                                    <li>Dedicated team.</li>
                                    <li>Unlimited Development.</li>
                                    <li>Monthly Billed.</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SapSupport