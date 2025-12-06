import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";
import banner1 from "../../assets/images/carousel1.webp";
import banner2 from "../../assets/images/carousel1.webp";
import banner3 from "../../assets/images/carousel1.webp";
import { Link } from "react-router-dom";


function HomeBanner() {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Gentle Protection for Sensitive Skin",
      text: "Experience soothing comfort and long-lasting care, designed specially for grown-ups.",
    },
    {
      id: 2,
      image: banner2,
      title: "Gentle Protection for Sensitive Skin",
      text: "Experience soothing comfort and long-lasting care, designed specially for grown-ups.",
    },
    {
      id: 3,
      image: banner3,
      title: "Gentle Protection for Sensitive Skin",
      text: "Experience soothing comfort and long-lasting care, designed specially for grown-ups.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 2000,
    arrows: false,
    fade: false, // 👈 set to true for fade effect
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipeToSlide: true,
    cssEase: "ease-in-out",
  };

  return (
    <div className="banner-slider mt-0">
      
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            
            <div
              className="banner-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              
              {/* <div className="banner-overlay"></div> */}
              <div className="banner-content text-start text-light">
                <h1 className="banner-text">{slide.title}</h1>
                <p className="banner-para mt-3">{slide.text}</p>
                <Link to='/'>
                <button className="shop-now-new mt-3">
                  <span> Shop Now </span>
                </button> </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeBanner;
