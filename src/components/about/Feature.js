import { BsHexagon } from 'react-icons/bs'
import React from 'react'
import './Feature.css'

const Feature = ({icons, heading, text}) => {
  return (
    <div className="feature">
        <div className='feature-icon'>
            <BsHexagon color="orangered" size={55} />
            <div className="inner-icon">
            {icons}
            </div>
        </div>
        <div className='feature-text'>
            <h3>{heading}</h3>
            <p className="u-text-small">
                {text}
                </p>
        </div>
    </div>
  )
}

export default Feature