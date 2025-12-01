import React from 'react'

const NumberCard = ({metric, desc, icon: Icon}) => {
  return (
    <>
        <div className="metric-container text-start">
                  <h2>{metric}</h2>
                  <div className="metric-desc d-flex gap-2">
                     <div className='icon-div'>{Icon && <Icon />}</div>
                     <div className=''><p>{desc}</p></div>
                  </div>
        </div>
    </>
  )
}

export default NumberCard