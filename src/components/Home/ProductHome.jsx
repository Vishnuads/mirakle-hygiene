// import React from "react";
// import "./Style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import product1 from "../../assets/images/product-1.png"
// import product2 from "../../assets/images/product-1.png"
// import product3 from "../../assets/images/product-1.png"
// import product4 from "../../assets/images/product-1.png"

// const products = [
//   {
//     title: "Born Care",
//     price: 695,
//     img: product1,
//     bg: "#E8F0F8",
//   },
//   {
//     title: "Granny Care",
//     price: 695,
//     img: product2,
//     bg: "#F5EFE5",
//   },
//   {
//     title: "He Care",
//     price: 695,
//     img: product3,
//     bg: "#E8F0F8",
//   },
//   {
//     title: "She Care",
//     price: 695,
//     img: product4,
//     bg: "#FBE9EF",
//   },
// ];

// export default function ProductHome() {
//   return (
//     <div className="container text-center my-5 products-section">
//       <h2 className="products-title">Products</h2>
//       <p className="products-sub">Explore the Hygiene Products of Mirakle</p>

//       <div className="row justify-content-center my-3">
//         {products.map((item, index) => (
//           <div className="col-lg-3 col-md-6 mb-4" key={index}>
//             <div className="product-card" style={{ background: item.bg }}>
//               <div className="product-img">
//                 <img src={item.img} alt={item.title} />
//               </div>

//               <h5 className="product-name">{item.title}</h5>
//               <p className="product-subtitle">
//                 Pre Diaper Oils Triple Comfort Action
//               </p>

//               <div className="stars">★★★★★</div>

//               <h4 className="price">₹{item.price}.00</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React,{ useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import { CartContext } from "@/context/CartContext";
import product1 from "../../assets/images/product-1.png"
import product2 from "../../assets/images/product-2.png"
import product3 from "../../assets/images/product-3.png"
import product4 from "../../assets/images/product-4.png"
import { Link } from "react-router-dom";
import { Heart } from "phosphor-react";


export default function ProductHome() {
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
       price: 650,
       oldPrice: 999,
       rating: 3.5,
       img: product4,
       color: "#F5EEE5",
       btn: "#b59a78"
     },
     {
       id: 3,
       title: "He Care",
       desc: "Pre Diaper Oils Triple Comfort Action",
       price: 600,
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
       price: 550,
       oldPrice: 999,
       rating: 3.5,
       img: product2,
       color: "#FAECF0",
       btn: "#df87a8"
     },
  
   ];
  const { isFavorite, addToCart, toggleFav } = useContext(CartContext);
  return (
    <div className="products-section py-5">
      <h1 className="products-title">Products</h1>
      <p className="text-muted mb-5 text-center products-sub">Explore the Hygiene Products of Mirakle</p>

      <div className="container">
        <div className="row g-4">
          {products.map((p) => (

            <div className="col-12 col-md-6 col-lg-3" key={p.id}>

              <div className="product-card " style={{ backgroundColor: p.color }}>
                <Link to={'/products/name'}>
                  <img src={p.img} alt={p.title} className="product-img mb-3" />
                </Link>
                <div className="product-cart">
                  <Link to={'/products/name'}>
                    <div className="product-title-new" >
                      <h2 className="product-name" style={{ color: p.btn }}>{p.title}</h2>
                      <div className="rating-badge">⭐ {p.rating}</div>
                    </div>
                  </Link>
                  <p className="product-desc" style={{ color: p.btn }}>{p.desc}</p>

                  <div className="price-section my-2">
                    <span className="price">₹{p.price}.00</span>
                    <span className="old-price ms-2">₹{p.oldPrice}.00</span>
                  </div>

                  <div className="addtocart-new">
                    <button onClick={() => addToCart(p)}
                      className="btn addtocartbtn text-white add-btn" style={{ backgroundColor: p.btn }}>
                      Add to Cart
                    </button>

                    <button
                      onClick={() => toggleFav(p, p.id)} className="wishlist-btn" style={{ border: `2px solid ${p.btn}`, color: p.btn }}>
                    {isFavorite(p.id)  ? <Heart color="#DF2E2E" weight="fill" /> : <Heart  /> }  
                    </button>
                  </div>
                </div>

              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
