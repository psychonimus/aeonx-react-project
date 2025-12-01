import React from 'react'

const AwardCard = ({image, awardTitle, awardDesc}) => {
    return (
        <div className='award-card'>
            <div className="award-img mb-3">
                <img src={image} alt="" />
            </div>
            <div className="award-desc">
                <h3>{awardTitle}</h3>
                <p>{awardDesc}</p>
            </div>
        </div>
    )
}

export default AwardCard