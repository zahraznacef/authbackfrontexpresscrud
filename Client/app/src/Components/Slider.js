import React from 'react'
import {Carousel} from "react-bootstrap"


const Slider = () => {
   return (
      <>
         <Carousel>
            <Carousel.Item interval={5000}>
               <img
                  className="d-block w-100 mainimgs"
                  alt="" src="https://news.automobile.tn/2021/12/nouveau-chery-tiggo-3x-1869_max_home.webp?t=1638456490"
               />
               <Carousel.Caption className="slider-box">
                  <h3 className="slider-h3">Actu</h3>
                  <p className="slider-p">Nouveau Chery Tiggo 3X</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
               <img
                  className="d-block w-100 mainimgs"
                  src="https://news.automobile.tn/2021/12/kia-clinic-days-pre-winter-1866_max_home.webp?t=1638353387"
                  alt="Second slide"
               />
               <Carousel.Caption className="slider-box">
                  <h3 className="slider-h3">Actu</h3>
                  <p className="slider-p">Kia Clinic Days Pre-Winter.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
               <img
                  className="d-block w-100 mainimgs"
                  src="https://news.automobile.tn/2021/11/car-of-the-year-2022-1865_max_home.webp?t=1638287654"
                  alt="Third slide"
               />
               <Carousel.Caption className="slider-box">
                  <h3 className="slider-h3">Actu</h3>
                  <p className="slider-p">Car Of The Year 2022.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </>
   )
}

export default Slider
