import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../../images/summerWomen.jpg";
import second from "../../images/unnamed.jpg";
import third from "../../images/unnamed2.jpg";
import fourth from "../../images/redwhite.jpg";
import fifth from "../../images/unamed3.jpg";
import sixth from "../../images/6th.jpg";
import "./slider.css";

const SaleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    adaptiveHeight:true,
    centerMode: true,
    centerPadding: "50px",
 
    mobileFirst: true,
    useTransform:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows:false
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  };
  return (
    <Slider {...settings}>
      <img className="first" alt="grid" src={first} />

      <img className="second" alt="grid" src={second} />

      <img className="third" alt="grid" src={third} />

      <img className="fourth" alt="grid" src={fourth} />

      <img className="fifth" alt="grid" src={fifth} />

      <img className="sixth" alt="grid" src={sixth} />
    </Slider>
  );
};
export default SaleSlider;
