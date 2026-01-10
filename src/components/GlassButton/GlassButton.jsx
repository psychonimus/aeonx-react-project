import React from 'react'
import '../../index.css'
import { NavLink } from 'react-router-dom'




const GlassButton = ({ title, icon: Icon, href, url, color, bg, onClick, target }) => {
    return (
        <>
            <NavLink to={url ? url : href} target={target} style={{ textDecoration: "none" }} onClick={onClick}>
                <button className='slide-button d-flex items-center align-items-center gap-2 text-start' style={{color : `${color}`, background : `${bg}`}}>
                    {title} {Icon && <Icon />}</button>
            </NavLink>
        </>
    )
}

export default GlassButton