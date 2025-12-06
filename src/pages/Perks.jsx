import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

export default function Perks() {
  return (
    <div className="perks-section text-center py-5">
      <h2 className="fw-bold mb-1">Perks</h2>
      <p className="text-muted mb-5">We Take Care of Our Customers</p>

      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src="/icons/delivery.png" alt="Free Delivery" className="perk-icon mb-3" />
              <h6 className="fw-bold">Free Delivery</h6>
              <p className="text-muted small">Get Your Orders Delivered For Free</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src="/icons/support.png" alt="24/7 Customer Support" className="perk-icon mb-3" />
              <h6 className="fw-bold">24/7 Customer Support</h6>
              <p className="text-muted small">Always available for help and guidance</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src="/icons/deals.png" alt="Exclusive Deals" className="perk-icon mb-3" />
              <h6 className="fw-bold">Exclusive Deals & Offers</h6>
              <p className="text-muted small">Grab discounts, bundles & rewards!</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="perk-item p-3">
              <img src="/icons/shipping.png" alt="Fast Shipping" className="perk-icon mb-3" />
              <h6 className="fw-bold">Fast & Reliable Shipping</h6>
              <p className="text-muted small">Quick delivery with live tracking!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
