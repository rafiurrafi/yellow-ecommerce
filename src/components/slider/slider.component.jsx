import "./slider.style.scss";
import SLIDER_ITEMS from "../../service/slider-service.json";
import { useEffect, useState } from "react";
const Slider = () => {
  const [slides, setSlides] = useState(SLIDER_ITEMS);
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  useEffect(() => {
    let i = 0;
    setTimeout(() => {
      if (i > 3) i = 0;

      setActiveSlide(slides[i++]);
    }, 1000);
  }, []);
  return (
    <div className="sliders">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`${slide.id === activeSlide.id ? "active" : ""} slider`}
        >
          <img src={slide.imageUrl} alt="" />
          <div className="slider-content">
            <p>{slide.subtitle}</p>
            <h2 className="display-1">
              {" "}
              <span className="d-block">{slide.title[0]}</span> {slide.title[1]}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
