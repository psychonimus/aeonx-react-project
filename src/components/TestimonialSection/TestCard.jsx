import React from 'react'

const TestCard = ({testimonial, profile, name, designation}) => {
    return (
        <div className='test-card'>
            <p>“{testimonial}"</p>
            <div className="testimonial-person d-flex gap-2 align-items-center">
                <div className="person-img">
                    <img src={profile} alt="" />
                </div>
                <div className="person-details">
                    <h4>{name}</h4>
                    <h6>{designation}</h6>
                </div>
            </div>
        </div>
    )
}

export default TestCard