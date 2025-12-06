

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Style.css";
import { FaRegHeart } from "react-icons/fa";

import product1 from "../../assets/images/product-1.png"
import product2 from "../../assets/images/product-1.png"
import product3 from "../../assets/images/product-1.png"
import product4 from "../../assets/images/product-1.png"
import { Link } from "react-router-dom";

export default function ProductCategory() {
  const products = [
    {
      id: 1,
     category: "Born Care",
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
      category: "Granny Care",
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
      category: "He Care",
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
      category: "She Care",
      title: "She Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img:product4,
      color: "#FAECF0",
      btn: "#df87a8"
    },
    {
      id: 5,
     category: "Born Care",
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
      id: 6,
      category: "Granny Care",
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
      id: 7,
      title: "He Care",
      category: "He Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img: product3,
      color: "#DFE6EB",
      btn: "#7da6c8"
    },
    {
      id: 8,
      category: "She Care",
      title: "She Care",
      desc: "Pre Diaper Oils Triple Comfort Action",
      price: 695,
      oldPrice: 999,
      rating: 3.5,
      img:product4,
      color: "#FAECF0",
      btn: "#df87a8"
    }
  ];


    const tabs = ["Born Care", "Granny Care", "He Care", "She Care"];

  const [selectedTab, setSelectedTab] = useState("Born Care");

  const filteredProducts = products.filter(
    (prod) => prod.category === selectedTab
  );
  

  return (
    <div className="products-section" style={{paddingTop:"130px",paddingBottom:"100px"}}>
      <h1 className="products-title">Products</h1>
      <p className="text-muted mb-5 text-center products-sub">Explore the Products of Mirakle</p>


<div className="text-center mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 mx-2 product-tab-btn  ${
              selectedTab === tab ? "product-active-tab" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>


      <div className="container">
        <div className="row g-4">
          {filteredProducts.map((p) => (
                     
             <div className="col-12 col-md-6 col-lg-3" key={p.id}>
              <Link to={'/products/name'}>  
              <div className="product-card " style={{ backgroundColor: p.color }}>
                <img src={p.img} alt={p.title} className="product-img mb-3" />

    <div className="product-cart">
                              <div className="product-title-new" >
                                 <h2 className="product-name" style={{color:p.btn}}>{p.title}</h2>
                                  <div className="rating-badge">⭐ {p.rating}</div>
                             </div>
                
                <p className="product-desc" style={{color:p.btn}}>{p.desc}</p>
                <div className="price-section my-2">
                  <span className="price">₹{p.price}.00</span>
                  <span className="old-price ms-2">₹{p.oldPrice}.00</span>
                </div>

<div className="addtocart-new">
               <button className="btn addtocartbtn text-white add-btn" style={{ backgroundColor: p.btn }}>
                  Add to Cart
                </button>

                <button className="wishlist-btn" style={{border: `2px solid ${p.btn}`,color:p.btn}}>
                <FaRegHeart />
                </button>
               </div>
    </div>
 
              </div>
 </Link>
            </div>
           
          ))}
        </div>
      </div>
    </div>
  );
}
