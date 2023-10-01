// import { list, longList } from "..data";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { list, longList } from "../data";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
// import Loading from "/Loading";
import Buttons from "./Buttons";
import Loading from "./Loading";
import "../index.css";
import Dots from "./Dots";

const Carousel = () => {
  const [animate, setAnimate] = useState(true);
  const [people, setPeople] = useState(list);
  const [activeSlide, setActiveSlide] = useState(0);

  function nextSlide() {
    if (activeSlide < people.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
    resetAnimation();
  }

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(people.length - 1);
    }
    resetAnimation();
  };

  const dotEvent = (index) => {
    setActiveSlide(index);
    resetAnimation();
  };

  useEffect(() => {
    setAnimate(true);
    let sliderID = setInterval(() => {
      nextSlide();
      resetAnimation();
    }, 4000);
    return () => {
      clearInterval(sliderID);
    };
  }, [nextSlide, dotEvent]);

  const resetAnimation = () => {
    setAnimate(false);
    // sets animations off, then useeffect will set it back on, resetting the animation
  };

  return (
    <>
      {people.map((person, index) => {
        const slide = index === activeSlide;
        const prevSlide = index < activeSlide;
        const { id, image, name, quote, title } = person;
        return (
          <article
            key={id}
            className={
              slide
                ? "slide"
                : prevSlide
                ? "slide prev-slide"
                : "slide next-slide"
            }
          >
            <img src={image} alt="" className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <Loading animate={animate} />
      <Buttons
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        resetAnimation={resetAnimation}
      />
      <Dots people={people} dotEvent={dotEvent} activeSlide={activeSlide} />
    </>
  );
};
export default Carousel;
