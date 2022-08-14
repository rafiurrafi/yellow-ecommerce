import "./slider.style.scss";
import SLIDER_ITEMS from "../../service/slider-service.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const HeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <BsArrowRightCircle />,
    prevArrow: <BsArrowLeftCircle />,
  };
  return (
    <div className="sliders">
      <Slider {...settings}>
        {SLIDER_ITEMS.map((slide) => (
          <div key={slide.id} className="slider">
            <img src={slide.imageUrl} alt="" />
            <div className="slider-content">
              <p>{slide.subtitle}</p>
              <h2 className="display-1">
                {" "}
                <span className="d-block">{slide.title[0]}</span>{" "}
                {slide.title[1]}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
