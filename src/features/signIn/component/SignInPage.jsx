/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAcountToSignIn } from "../redux/signInAsyncThunk";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const acount = useSelector((state) => state.signInSlice.acount) || {};
  const error = useSelector((state) => state.signInSlice.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passWRef = useRef();

  useEffect(() => {
    console.log(acount);
    if (Object.keys(acount).length > 0) navigate("/");
  }, [acount, navigate]);

  return (
    <div className="sign-in">
      <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Account
          </label>
          <input
            ref={usernameRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            ref={passWRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {error && error != "" && <div className="form-text">{error}</div>}
        </div>
        <div className="mb-3 form-check"></div>
        <button
          onClick={() => {
            const tKDangNhap = {
              taiKhoan: usernameRef.current.value,
              matKhau: passWRef.current.value,
              //  taiKhoan: "addUser",
              // matKhau: "123456789aA@",
            };
            console.log(typeof tKDangNhap.taiKhoan);
            dispatch(getAcountToSignIn(tKDangNhap));
          }}
          type="button"
          className="btn-sign-in"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
