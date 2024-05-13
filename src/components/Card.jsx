import React from 'react'
import "../styles/Services.css"

const Card = ({service_name, description, img_source}) => {
  return (
    <div className='border'>
      <img src={img_source} alt="" className='image'/>
      <div className='card-text apply-brown card-header'>{service_name}</div>
      <p className='card-text'>{description}</p>
    </div>
  )
}

export default Card
