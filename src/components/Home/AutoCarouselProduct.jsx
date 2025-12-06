import React from "react";
// import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import product1 from "../../assets/images/carousel4.png";
import product2 from "../../assets/images/carousel2.png";
import product3 from "../../assets/images/carousel3.png";
import product4 from "../../assets/images/carousel4.png";

const products = [
  { img: product1 },
  { img: product2 },
  { img: product3 },
  { img: product4 },
//   { img: product2 },
];

export default function AutoCarouselProduct() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">  
        {products.map((item, index) => (
          <div className="col-6 col-md-3 col-lg-3" key={index}>
            <img src={item.img} alt="" className="w-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
