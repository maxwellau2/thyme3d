import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className='navbar-bg'>
        <div className='logo'></div>
        <button className='button'>Projects</button>
        <button className='button' onClick={()=>{
          let element = document.getElementById("about-section");
          element.scrollIntoView({behavior:'smooth'});

        }}>About</button>
        <button className='button' onClick={()=>{
          let element = document.getElementById("services-section");
          element.scrollIntoView({behavior:'smooth'});
        }}>Services</button>
        <button className='button' onClick={()=>{
          let element = document.getElementById("contact-section");
          element.scrollIntoView({behavior:'smooth'});
        }}>Contact</button>
      </div>
    </div>
  )
}

export default Navbar
