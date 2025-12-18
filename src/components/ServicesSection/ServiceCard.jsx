import React from 'react'
import GlassButtonLight from '../GlassButton/GlassButtonLight'
import GlassButton from '../GlassButton/GlassButton'
const ServiceCard = ({ image, title, description, buttonText, buttonIcon, href }) => {
  return (
    <div className="service-card" style={{backdropFilter: 'blur(16px)'}}>
      <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <GlassButton href={href} title={buttonText} icon={buttonIcon} />

    </div>
  )
}

export default ServiceCard