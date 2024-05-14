import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "../styles/Carousel.css"

const Carousell = () => {
   let images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg']
  return (
    <div id='carousel' className='carousel-outer-align'> 
      <Carousel>
        {images.map((image, index)=>{
            return (
            <Carousel.Item interval={3000} className='container' key={index}> 
            <img 
              className="d-block w-100"
              src={`src/assets/carousel/${image}`}
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