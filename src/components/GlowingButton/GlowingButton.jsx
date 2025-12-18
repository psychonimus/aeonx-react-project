import React from 'react'
import './GlowingButton.css'

const GlowingButton = () => {
    return (
        <div
            className="glowing-box glowing-box-active"
            style={{ "--animation-speed": "2s" }}
        >
            <div className="glowing-box-animations">
                <div className="glowing-box-glow"></div>

                <div className="glowing-box-stars-masker">
                    <div className="glowing-box-stars"></div>
                </div>
            </div>

            <div className="glowing-box-borders-masker">
                <div className="glowing-box-borders"></div>
            </div>

            <button className="glowing-box-button">
                <span className="glowing-span">EXPLORE OPEN POSITIONS</span>
            </button>
        </div>
    )
}

export default GlowingButton