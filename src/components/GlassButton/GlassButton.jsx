import React from 'react'
import '../../index.css'




const GlassButton = ({ title, icon: Icon, href }) => {
    return (
        <>
            <a href={href} style={{ textDecoration: "none" }}>
                <button className='slide-button d-flex items-center align-items-center gap-2'>
                    {title} {Icon && <Icon />}</button>
            </a>
        </>
    )
}

export default GlassButton