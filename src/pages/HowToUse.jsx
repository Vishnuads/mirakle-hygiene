import React from "react";
import "../components/Home/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HowToUse({ use, accent }) {
    return (
        <div className="container text-center mb-5 why-section">
            <h2 className="why-title">How to Use</h2>
            <p className="why-sub">Easy Steps for Daily Comfort and Protection</p>

            <div className="row justify-content-center mt-5">
                {use.map((item, index) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="howtouse-card" style={{
                            backgroundImage: `linear-gradient(to bottom, ${accent.secondray}, #f8f8f8, #ffffff)`
                        }}>
                            <img src={item.img} alt={item.title} className="howtouse-icon w-auto h-24" />
                            <p className="product-dec-howtouse-step" style={{ color: accent.primary }}> {item.step}</p>
                            <h5 className="howtouse-name">{item.title}</h5>
                            <p className="why-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
