import React from 'react'
import '../../index.css'
import { NavLink } from 'react-router-dom'




const GlassButton = ({ title, icon: Icon, href, url }) => {
    return (
        <>
            <NavLink to={url ? url : href} style={{ textDecoration: "none" }}>
                <button className='slide-button d-flex items-center align-items-center gap-2 text-start'>
                    {title} {Icon && <Icon />}</button>
            </NavLink>
        </>
    )
}

export default GlassButton