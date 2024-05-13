import React from 'react'
import "../styles/About.css"

const LogoCreator = ({svg_name}) => {
  return (
    <div style={{  
        backgroundImage: "url(" + {svg_name} + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
    </div>
  )
}

export default LogoCreator
