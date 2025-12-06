import React from "react";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import layer1 from  "../../assets/images/layer1.png"
import layer2 from  "../../assets/images/layer2.png"
import layer3 from  "../../assets/images/layer3.png"
import layer4 from  "../../assets/images/layer4.png"


const features = [
  {
    img: layer1,
    title: "Triple Comfort Action",
    desc: "Soothes, protects, and prevents rashes effectively"
  },
  {
    img:layer2,
    title: "Safe for All Ages",
    desc: "Gentle on baby skin, reliable for adult care"
  },
  {
    img: layer3,
    title: "Fast Absorbing & Non-Greasy",
    desc: "Comfort without the mess"
  },
  {
    img:layer4,
    title: "Natural & Chemical-Free",
    desc: "Made with skin-friendly herbal oils"
  }
];

export default function WhyChoose() {
  return (
    <div className="container text-center my-5 why-section">
      <h2 className="why-title">Why Choose Mirakle Pre-Diaper Oil?</h2>
      <p className="why-sub">Gentle Nourishment for both Baby and Adult Skin</p>

      <div className="row justify-content-center mt-5">
        {features.map((item, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="why-card">
              <img src={item.img} alt={item.title} className="why-icon w-30 h-28" />

              <h5 className="why-name">{item.title}</h5>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
