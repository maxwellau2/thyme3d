import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "../styles/Carousel.css"
import img1 from '../assets/carousel/1.jpeg'
import img2 from '../assets/carousel/2.jpeg'
import img3 from '../assets/carousel/3.jpeg'
import img4 from '../assets/carousel/4.jpeg'
import img5 from '../assets/carousel/5.jpeg'
import img6 from '../assets/carousel/6.jpeg'
import img7 from '../assets/carousel/7.jpeg'
import img8 from '../assets/carousel/8.jpeg'

const Carousell = () => {
   let images = [img1, img2, img3, img4, img5, img6, img7, img8]
  return (
    <div id='carousel' className='carousel-outer-align'> 
      <Carousel>
        {images.map((image, index)=>{
            return (
            <Carousel.Item interval={3000} className='container' key={index}> 
            <img 
              className="d-block w-100"
              src={image}
              alt={image}
            /> 
            <Carousel.Caption> 
            </Carousel.Caption> 
          </Carousel.Item> )
        })}
      </Carousel> 
    </div> 
  )
}

export default Carousell