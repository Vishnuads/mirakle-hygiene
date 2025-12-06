import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Style.css";
import { Link } from "react-router-dom";
import { CartContext } from "@/context/CartContext";
import { LucideSquareArrowOutUpRight } from 'lucide-react'
import { Heart } from "phosphor-react";

export default function FavouriteProduct() {
  const { favItems, addToCart, isFavorite, toggleFav } = useContext(CartContext);

  return (
    <div className="products-section" style={{ paddingTop: "130px", paddingBottom: "100px" }}>
      <h1 className="products-title">Wishlist</h1>
      <p className="text-muted mb-5 text-center products-sub">Let’s see your Favourites</p>

      <div className="container">
        {favItems.length > 0 ?
          <div className="row g-4">
            {favItems.map((p) => (

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
                      <button
                        onClick={() => addToCart(p)}
                        className="btn addtocartbtn text-white add-btn" style={{ backgroundColor: p.btn }}>
                        Add to Cart
                      </button>
                      <button onClick={() => toggleFav(p, p.id)} className="wishlist-btn" style={{ border: `2px solid ${p.btn}`, color: p.btn }}>
                       {isFavorite(p.id)  ? <Heart color="#DF2E2E" weight="fill" /> : <Heart  /> }  
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          :
          <div className='min-h-[60vh] flex  justify-center items-center  '>
            <div className='text-center md:flex  items-center gap-5'>
              <p className='text-xl text-gray-500  py-6 '>Your Wishlist is Empty</p>
              <div className='h-10 w-[1px] bg-black/50 hidden md:block'></div>
              <Link to="/products">
                <p className='flex items-center gap-3 underline text-xl font-bold text-black rounded-3'>Countinue Shoping <LucideSquareArrowOutUpRight /> </p>
              </Link>
            </div>
          </div>
        }

      </div>
    </div>
  );
}
