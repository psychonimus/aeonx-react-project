import React from 'react'
import './Implementation.css'
import sapRight from '/images/sap-implementation-right.webp'
import Header from '../Header/Header'

import ImplementationServices from './ServCar'

const ImplementationSection = () => {
    return (
        <>
            <section className="implementation" id="implementation">
                <div className="container">
                    <Header
                        
                        highlight="SAP Implementation Services"
                        // headline="Services"
                        desc="Business models are evolving faster than ever, and the real differentiator today is how quickly your systems can adapt. At AeonX Digital, we enable this shift by implementing SAP S/4HANA and SAP Business Suite as the digital backbone of your operations, making enterprises data-driven, future-ready, and operationally agile."
                    />

                    <div>
                        <ImplementationServices />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImplementationSection