import React from "react";
import "../Home/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import layer1 from  "../../assets/images/howtouse1.png"
import layer2 from  "../../assets/images/howtouse2.png"
import layer3 from  "../../assets/images/howtouse3.png"
import layer4 from  "../../assets/images/howtouse4.png"


const features = [
  {
    img: layer1,
    step:"Step 1",
    title: "Cleanse with Care",
    desc: "Use warm water and a soft cloth to freshen up your baby’s bottom"
  },
  {
    img:layer2,
    step:"Step 2",
    title: "Mist the Love",
    desc: "Spray a light mist of Mirakle Pre diaper oil"
  },
  {
    img: layer3,
    step:"Step 3",
    title: "Diaper Up with Confidence",
    desc: "Slip on the diaper knowing there’s a nourishing shield working underneath"
  },
  {
    img:layer4,
    step:"Step 4",
    title: "Repeat with Every Change",
    desc: "Spray before every change to keep rashes away and smiles intact!"
  }
];

export default function HowToUse() {
  return (
    <div className="container text-center my-5 why-section">
      <h2 className="why-title">How to Use</h2>
      <p className="why-sub">Easy Steps for Daily Comfort and Protection</p>

      <div className="row justify-content-center mt-5">
        {features.map((item, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="howtouse-card">
              <img src={item.img} alt={item.title} className="howtouse-icon" />
               <p className="product-dec-howtouse-step"> {item.step}</p>
              <h5 className="howtouse-name">{item.title}</h5>
              <p className="why-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
