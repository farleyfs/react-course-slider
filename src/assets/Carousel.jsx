import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { list, longList } from "../data";
import Buttons from "./Buttons";
import Loading from "./Loading";
import "../index.css";
import Dots from "./Dots";

const Carousel = () => {
  const [animate, setAnimate] = useState(true);
  const [people, setPeople] = useState(longList);
  const [activeSlide, setActiveSlide] = useState(0);

  function nextSlide() {
    if (activeSlide < people.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
    setAnimate(false);
  }

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(people.length - 1);
    }
    setAnimate(false);
  };

  const dotEvent = (index) => {
    setActiveSlide(index);
    setAnimate(false);
  };

  useEffect(() => {
    // when the slide moves to the next one, the animate value will be set to false, this will set it back on, reseting the countdown animation
    setAnimate(true);

    let sliderID = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(sliderID);
    };
  }, [activeSlide, dotEvent]);

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
      <Buttons nextSlide={nextSlide} prevSlide={prevSlide} />
      <Dots people={people} dotEvent={dotEvent} activeSlide={activeSlide} />
    </>
  );
};
export default Carousel;
