import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "../../assets/images/logo-main.png"
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer-section text-white pt-5">
        <div className="container pb-4">
          <div className="row">
            {/* Logo Section */}
            <div className="col-md-4 mb-4">
              <Link to="/">
              <img src={logo} alt="Mirakle Logo" className="footer-logo mb-3" /></Link>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold mb-3 footer-h">Quick Links</h6>
              <ul className="list-unstyled footer-links">
                <Link to="/">
                <li>Home</li></Link>
                <Link to="/product/name">
                <li>Baby Care</li>
                <li>Adult Care</li>
                <li>He Care</li>
                <li>She Care</li></Link>
              </ul>
            </div>

            {/* Support */}
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold mb-3 footer-h">Support</h6>
              <ul className="list-unstyled footer-links">
                <Link to="/contact">
                <li>Contact Us</li></Link>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold mb-3 footer-h">Get in Touch</h6>
              <ul className="list-unstyled footer-contact">
                <li className="d-flex mb-2">
                  <span className="me-2"><MdLocationPin /></span>
                  Meenas Health Care NO.2/66, RR Nagar Annex Srinivaspuram Ayyappan Thangal , Chennai - 600056
                </li>
                <li className="d-flex mb-2 footer-mail">
                  <span className="me-2"><IoMdMail /></span>
                  mirakleproducts@gmail.com
                </li>
                <li className="d-flex mb-2">
                  <span className="me-2"><BsFillTelephoneFill /></span>
                  +91 8056915668
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom text-center py-3">
          <div className="social-links">
            <ul className="social-list">
              <li><FaWhatsapp /></li>
              <li><RiLinkedinBoxLine /></li>
              <li><FaXTwitter /></li>
              <li><FaInstagram /></li>
              <li><CiFacebook /></li>
            </ul>
          </div>

          <p className="m-0 small">Developed by Vishnu Ads & Ventures Pvt Ltd</p>
        </div>

      </footer>
    </>
  );
}
