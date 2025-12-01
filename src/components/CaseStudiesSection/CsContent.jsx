import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const CsContent = ({headline, desc}) => {
    return (
        <div className="cs-content d-flex gap-2 align-items-start justify-content-between p-2">
            
            <div className="content-div">
                <h4>{headline}</h4>
                <p>{desc}</p>
            </div>
            <div className="icon-div">
                <IoIosArrowForward />
            </div>
        </div>
    )
}

export default CsContent