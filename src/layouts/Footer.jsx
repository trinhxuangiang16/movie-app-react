import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <Link to={"/"} className="footer-item">
          Home
        </Link>
        <Link to={"/"} className="footer-item">
          Features
        </Link>
        <Link to={"/"} className="footer-item">
          Pricing
        </Link>
        <Link to={"/"} className="footer-item">
          FAQs
        </Link>
        <Link to={"/"} className="footer-item">
          About
        </Link>
      </div>
      <p className="text-center">© 2025 Movi.E, Inc</p>
    </div>
  );
}
