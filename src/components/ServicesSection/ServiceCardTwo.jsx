import React from 'react'
import GlassButtonLight from '../GlassButton/GlassButtonLight'
import GlassButton from '../GlassButton/GlassButton'
const ServiceCardTwo = ({image, title, description, buttonText, buttonIcon, descColor, url}) => {
  return (
    <div className="service-card">
                    <div>
                      <img src={image} alt="" />
                    <h3>{title}</h3>
                    <p style={{color: `${descColor}`}}>{description}</p>
                    </div>
                    <GlassButton href={url} title={buttonText} icon={buttonIcon} />

    </div>
  )
}

export default ServiceCardTwo