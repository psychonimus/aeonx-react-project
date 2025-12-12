import React from 'react'
import '../../index.css'
import { NavLink } from 'react-router-dom'




const GlassButtonLight = ({ title, icon: Icon, href, onClick }) => {
    return (
        <>
            <NavLink to={href} style={{textDecoration:"none"}}>
                <button onClick={onClick} className='slide-button-light d-flex items-center align-items-center gap-2'>
                    {title} {Icon && <Icon />}</button>
            </NavLink>
        </>
    )
}

export default GlassButtonLight