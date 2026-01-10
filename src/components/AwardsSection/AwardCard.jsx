import React from 'react'

const AwardCard = ({image, awardTitle, awardDesc, width}) => {
    return (
        <div className='award-card d-flex flex-column justify-content-between' style={{backdropFilter: 'blur(16px)'}}>
            <div className="award-img mb-3">
                <img src={image}  alt="" style={{width: width}} />
            </div>
            <div className="award-desc">
                <h3>{awardTitle}</h3>
                <p>{awardDesc}</p>
            </div>
        </div>
    )
}

export default AwardCard