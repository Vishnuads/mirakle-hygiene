import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import perks1 from "../../assets/images/group-1.png"
import perks2 from "../../assets/images/group-2.png"
import perks3 from "../../assets/images/group-3.png"
import perks4 from "../../assets/images/group-4.png"


export default function Perks() {
  return (
    <div className="perks-section text-center py-5">
      <h2 className="fw-bold mb-1 why-title">Perks</h2>
      <p className=" mb-5 why-sub">We Take Care of Our Customers</p>

      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-6 col-md-3">
            <div className="perk-item pt-4 mt-1">
              <img src={perks1} alt="Free Delivery" className="perk-icon mb-3" />
              <h6 className="fw-bold perk-title">Free Delivery</h6>
              <p className="text-muted small perk-p">Get Your Orders Delivered For Free</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src={perks2} alt="24/7 Customer Support" className="perk-icon mb-3" />
              <h6 className="fw-bold perk-title">24/7 Customer Support</h6>
              <p className="text-muted small perk-p">Always available for help and guidance</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src={perks3} alt="Exclusive Deals" className="perk-icon mb-3" />
              <h6 className="fw-bold perk-title">Exclusive Deals & Offers</h6>
              <p className="text-muted small perk-p">Grab discounts, bundles & rewards!</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src={perks4} alt="Fast Shipping" className="perk-icon mb-3" />
              <h6 className="fw-bold perk-title">Fast & Reliable Shipping</h6>
              <p className="text-muted small perk-p">Quick delivery with live tracking!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
