import { Link, NavLink } from "react-router-dom";
import "./layout.css";

function Header() {
  return (
    <div className="header">
      <Link to={"/"} className="logo">
        Movi<div>.E</div>
      </Link>
      <div className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;
