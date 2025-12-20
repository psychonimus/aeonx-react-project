import React from 'react'
import GlassButtonLight from '../GlassButton/GlassButtonLight'
import GlassButton from '../GlassButton/GlassButton'

const ServiceTitleCardTwo = ({image, title, description, buttonText, buttonIcon, titleColor, descColor, url}) => {
  return (
    <div className="service-card service-title-card">
                    <img style={{ width: "100px" }} src={image} alt="" />
                    <h5 className="mt-3" style={{color: `${titleColor}`}}>{title}</h5>
                    <h2 style={{color: `${descColor}`}}>{description}</h2>
                    <GlassButton href={url} title={buttonText} icon={buttonIcon} />
    </div>
  )
}

export default ServiceTitleCardTwo