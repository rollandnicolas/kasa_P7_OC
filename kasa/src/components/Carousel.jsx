import React from "react";
import { useState } from "react";
import { ReactComponent as ArrowLeft} from "../utils/arrowSlideLeft.svg";
import { ReactComponent as ArrowRight} from "../utils/arrowSlideRight.svg";

import "../styles/carousel.css";


function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const arrayLenght = props.pictures.flatMap(el => el.pictures).length;

  function prevSlide() {
    let newSlide = currentSlide === 0 ? arrayLenght - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  }
  function nextSlide() {
    let newSlide = currentSlide === arrayLenght - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  }
  return (
    <section className="carouselStyle">
      <div className="carouselSlide">
        <ArrowLeft className="arrowCarousel" onClick={() => {prevSlide()}} />
        <ArrowRight className="arrowCarousel" onClick={() => {nextSlide()}} />
      </div>
      {props.pictures.map((picture, index) => {
        return (
          <img src={picture} alt="" key={index} className={index === currentSlide ? "carouselImg" : "carouselHiddenImg"} />
        )
      })}
      <div className="carouselPageNumber">{currentSlide + 1}/{props.pictures.length}</div>
    </section>
  )
}

export default Carousel;