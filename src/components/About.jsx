import React from 'react'
import "../styles/About.css"
import LogoCreator from './LogoCreator'

const About = () => {
  return (
    <div id='about-section'>
        <h2 className='difference-header'>The Thyme3d Difference</h2>
        <div className='container'>
            <div className="grid-container">
                <div className="grid-item logo-0"></div>
                {/* <LogoCreator svg_name={"../assets/tick.svg"}></LogoCreator> */}
                <div className="grid-item logo-0 logo-2"></div>
                <div className="grid-item logo-0 logo-3"></div>
                <div className="grid-item">Pioneering excellence since 2016</div>
                <div className="grid-item">Experience and Expertise</div>
                <div className="grid-item">Quality Assurance</div>
                <div className="grid-item">OG service provider since 2016</div>
                <div className="grid-item">5000+ prints, Makers and Industrial, 7 years of experience</div>
                <div className="grid-item">Unmatched quality, highest ratings on Carousell</div>
            </div>
        </div>
    </div>
    
  )
}

export default About
