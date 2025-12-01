import { div } from 'framer-motion/client';
import React from 'react'


const ValueData = [
    {
        title: "Innovation",
        desc : "We constantly explore new ideas and embrace creative thinking to build solutions that shape the future.",
    },
    {
        title: "Integrity",
        desc : "We act with honesty, transparency, and accountability in everything we do — no exceptions.",
    },
    {
        title: "Collaboration",
        desc : "We believe the best results come from teamwork, open communication, and shared success.",
    },
    {
        title: "Excellence",
        desc : "We strive for quality in every detail, delivering work that exceeds expectations and creates real impact.",
    },
    {
        title: "Ownership",
        desc : "We take responsibility, lead with initiative, and commit to delivering results we are proud of.",
    },
    
];

const CoreValuesSection = () => {
    return (
        <>
            <section className='core-values py-5'>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h2>Our Core  Values</h2>
                            <h4>Principles That Guide Every Step We Take</h4>
                        </div>
                        <div className="col-md-6">
                            <p>At AeonX Digital, our core values shape the way we think, build, and collaborate. They reflect our commitment to excellence, integrity, and innovation. These principles guide our decisions, strengthen our culture, and help us deliver meaningful impact for our clients, partners, and team.</p>
                        </div>
                    </div>

                    <div className="value-grid">

                        {ValueData.map((value, index) => (
                                <div key={index} className={`value-card value-${index + 1}`}>
                                <div className="value-overlay p-3">
                                    <div className="content-div">
                                    <h3>{value.title}</h3>
                                    <p>{value.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoreValuesSection