import React from 'react'
import Card from './Card'
import "../styles/Services.css"
import modelling from "../assets/3dmodelling.avif"
import prototyping from "../assets/rapidproto.webp"
import miniature from "../assets/miniature.jpg"
import resinprinting from "../assets/resinprinting.webp"
const Services = () => {
  return (
    <div className='flex' id='services-section'>
      <h2 className='centre-text apply-brown'>Services</h2>
      <p className='centre-text'>Whether you're a hobbyist, student, or industry professional, we've got you covered.</p>
      <div className='card-grid'>
        <Card service_name={"3D Modelling"} img_source={modelling} description={"From simple designs to complex prototypes, we provide expert 3D modelling services tailored to your specifications."}></Card>
        <Card service_name={"Rapid Prototyping"} img_source={prototyping} description={"Need a quick prototype? We offer rapid prototyping services to bring your ideas to life in record time."}></Card>
        <Card service_name={"Custom Prints"} img_source={miniature} description={"From gifts and accessories to architectural models and beyond, we specialize in custom prints for various applications."}></Card>
        <Card service_name={"Resin Printing"} img_source={resinprinting} description={"Experience super high detail with our resin printing services, perfect for miniatures and intricate designs."}></Card>
      </div>
      <p className='centre-text materials'>Choose from a wide range of materials, including PLA, PETG, ABS, TPU/TPE, and more, to suit your specific needs.</p>
    </div>
  )
}

export default Services
