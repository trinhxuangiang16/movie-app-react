import { useEffect, useRef } from "react";
import { postUserAction } from "../redux/signUpAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { removeCurrentUserAction } from "../redux/signUpSlice";

export default function SignUpPage() {
  const error = useSelector((state) => state.signInSlice.error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const user = useSelector((state) => state.signUpSlice.user) || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRef = useRef();
  const passWRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length > 0) {
      navigate("/sign-in");
      dispatch(removeCurrentUserAction());
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="sign-up">
      <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Account
          </label>
          <input
            ref={userRef}
            type="text"
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
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone number
          </label>
          <input
            ref={phoneRef}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {error && error != "" && <div className="form-text">{error}</div>}
        </div>
        <button
          onClick={() => {
            const tKDangKy = {
              taiKhoan: userRef.current.value,
              matKhau: passWRef.current.value,
              email: emailRef.current.value,
              soDt: phoneRef.current.value,
              maNhom: "GP01",
              hoTen: nameRef.current.value,
            };
            dispatch(postUserAction(tKDangKy));
          }}
          type="button"
          className="btn-sign-in"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
