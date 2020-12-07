import React from "react";
import "./Slider.css";
import SliderPik1 from "../../assets/Slider1.jpg";
import SliderPik2 from "../../assets/Slider2.jpg";
import Carousel from 'react-bootstrap/Carousel'
import {useState} from "react";

const Slider = (props) => {
const [hover, setHover] = useState(false);
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

const slider_image_hover = hover ? "slider-image" : "slider-image-off" ;

  return <div className="slider_general">
 <Carousel indicators={true} activeIndex={index} onSelect={handleSelect} slide={true}>
      <Carousel.Item onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={SliderPik1} className={`w-100 ${slider_image_hover}`}   />
        <Carousel.Caption className="caption-head">
       
          <div className="heading-head">
          <div className="heading-head-top">Come with us!</div>

              Explore and travel.</div>
          {/* <div className="heading-sub-head">First slide label</div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={SliderPik2} className={`w-100 ${slider_image_hover}`}   />

        <Carousel.Caption onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
       
          <div className="heading-head">
          <div className="heading-head-top">Let's go!</div>
 
              Take a tour now.
              </div>
          {/* <div className="heading-sub-head">First slide label</div> */}
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>

      {/* <img src={sliderState} className={slider_image_hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/> */}
  </div>;
};

export default Slider;
