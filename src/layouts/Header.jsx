import { Link, NavLink } from "react-router-dom";
import "./layout.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../features/signIn/redux/signInSlice";

function Header() {
  const acount = useSelector((state) => state.signInSlice.acount) || {};
  // const acount = JSON.parse(localStorage.getItem("CurrentAcount")) || {};

  const dispatch = useDispatch();
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
        {Object.keys(acount).length === 0 ? (
          <>
            <NavLink to="/sign-in">Sign In</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </>
        ) : (
          <>
            <NavLink className="wellcome" to="#">
              Wellcome Back! {acount.hoTen}
            </NavLink>
            <NavLink
              to="sign-in"
              onClick={() => {
                dispatch(logoutAction());
              }}
            >
              Log Out
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
