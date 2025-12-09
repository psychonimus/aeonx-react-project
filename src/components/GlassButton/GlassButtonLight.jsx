import React from 'react'
import '../../index.css'
import { NavLink } from 'react-router-dom'




const GlassButtonLight = ({ title, icon: Icon, href }) => {
    return (
        <>
            <NavLink to={href} style={{textDecoration:"none"}}>
                <button className='slide-button-light d-flex items-center align-items-center gap-2'>
                    {title} {Icon && <Icon />}</button>
            </NavLink>
        </>
    )
}

export default GlassButtonLight