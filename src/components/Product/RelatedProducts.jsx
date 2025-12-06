import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Style.css";
import product1 from "../../assets/images/product-1.png"
import product2 from "../../assets/images/product-1.png"
import product3 from "../../assets/images/product-1.png"
import product4 from "../../assets/images/product-1.png"
import { Link } from "react-router-dom";
import { CartContext } from "@/context/CartContext";
import {
  Swiper,
  SwiperSlide
} from "swiper/react";
import { Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import { Heart } from "phosphor-react";


export default function RelatedProducts() {

  const { isFavorite, addToCart, toggleFav } = useContext(CartContext);
  const handleFav =(p, id)=>{
    isFavorite(id);
    toggleFav(p, id);
  }
  const products = [
    {
      id: 1,
      title: "Born Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img: product1,
      color: "#E9EEF3",
      btn: "#7da6c8"
    },
    {
      id: 2,
      title: "Granny Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img: product2,
      color: "#F5EEE5",
      btn: "#b59a78"
    },
    {
      id: 3,
      title: "He Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img: product3,
      color: "#DFE6EB",
      btn: "#7da6c8"
    },
    {
      id: 4,
      title: "She Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img: product4,
      color: "#FAECF0",
      btn: "#df87a8"
    },
    {
      id: 5,
      title: "She Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img: product4,
      color: "#FAECF0",
      btn: "#df87a8"
    }
  ];

  return (
    <div className="products-section py-5">
      <h2 className="products-title mb-5">Other Products of Mirakle</h2>
      {/* <p className="text-muted mb-5 text-center products-sub">Explore the Hygiene Products of Mirakle</p> */}

      <div className="container">
        <div className="row g-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            breakpoints={{
              1200: { slidesPerView: 4 },
              992: { slidesPerView: 2 },
              0: { slidesPerView: 1 }
            }}
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="" key={p.id}>
                  <Link to={'/products/name'}>
                    <div className="product-card " style={{ backgroundColor: p.color }}>
                      <img src={p.img} alt={p.title} className="product-img mb-3" />

                      <div className="product-cart">
                        <div className="product-title-new" >
                          <h2 className="product-name" style={{ color: p.btn }}>{p.title}</h2>
                          <div className="rating-badge">⭐ {p.rating}</div>
                        </div>

                        <p className="product-desc" style={{ color: p.btn }}>{p.desc}</p>
                        <div className="price-section my-2">
                          <span className="price">₹{p.price}.00</span>
                          <span className="old-price ms-2">₹{p.oldPrice}.00</span>
                        </div>

                        <div className="addtocart-new">
                          <button className="btn addtocartbtn text-white add-btn" style={{ backgroundColor: p.btn }} onClick={() => addToCart(p)}>
                            Add to Cart
                          </button>

                          <button onClick={() => handleFav(p, p.id)} className="wishlist-btn" style={{ border: `2px solid ${p.btn}`, color: p.btn }}>
                            {isFavorite(p.id) ? <Heart color="#DF2E2E" weight="fill" /> : <Heart /> }
                           
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
