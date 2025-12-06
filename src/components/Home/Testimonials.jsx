import React from "react";
import {
  Swiper,
  SwiperSlide
} from "swiper/react";
import { Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import "swiper/css";
import { BsQuote } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import user1 from "../../assets/images/man-user-circle-icon.webp";
import user2 from "../../assets/images/man-user-circle-icon.webp";
import user3 from "../../assets/images/man-user-circle-icon.webp";
import user4 from "../../assets/images/man-user-circle-icon.webp";

const data = [
  {
    title: "Born Care",
    img: user1,
    name: "Aisha R.",
    text: "My baby’s skin stays soft and protected even during long hours of wearing diapers. The oil absorbs quickly and has reduced rashes completely.",
    bg: "#E8F0F8",
    rating: 5
  },
  {
    title: "Adult Care",
    img: user2,
    name: "Suresh M.",
    text: "This oil has made life so much more comfortable. I use it before wearing adult diapers and it prevents irritation.",
    bg: "#F5EFE5",
    rating: 5
  },
  {
    title: "He Care",
    img: user3,
    name: "Aravind P.",
    text: "I was worried about sensitivity, but this oil worked surprisingly well. It completely stops friction and discomfort.",
    bg: "#E8F0F8",
    rating: 5
  },
  {
    title: "She Care",
    img: user4,
    name: "Lakshmi R.",
    text: "Gentle and effective! It prevents irritation and keeps my skin moisturized during long office hours.",
    bg: "#FBE9EF",
    rating: 5
  },
  {
    title: "She Care",
    img: user4,
    name: "Lakshmi R.",
    text: "Gentle and effective! It prevents irritation and keeps my skin moisturized during long office hours.",
    bg: "#F5EFE5",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="testimonials-wrapper w-100 position-relative py-5 text-center">

      {/* White overlays */}
      <div className="overlay-left"></div>
      <div className="overlay-right"></div>

      <h2 className="test-title">Testimonials</h2>
      <p className="test-sub mb-3">We Care About Customers Experience Too</p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <div className="test-card" style={{ background: item.bg }}>
                <div className="quote-bg">
                  <BsQuote />
                </div>
                <h5 className="test-header">{item.title}</h5>
                <div className="align-items-center gap-3 mt-2 justify-content-center">
                  <img src={item.img} alt={item.name} className="user-img" />
                  <div className="user-name mt-2">{item.name}</div>

                  <div className="rating-stars d-flex ">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        <IoMdStar className="text-warning" />
                      </span>
                    ))}
                  </div>
                </div>

                <p className="test-text mt-1">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
