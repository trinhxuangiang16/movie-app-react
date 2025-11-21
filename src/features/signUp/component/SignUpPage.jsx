import { useRef } from "react";
import { postUserAction } from "../redux/signUpAsyncThunk";
import { useDispatch } from "react-redux";

export default function SignUpPage() {
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const passWRef = useRef();
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
          {/* {error && error != "" && <div className="form-text">{error}</div>} */}
        </div>
        <div className="mb-3 form-check"></div>
        <button
          onClick={() => {
            // const tKDangNhap = {
            //   taiKhoan: "123456789T",
            //   matKhau: "123456",
            //   email: "sdgdfh",
            //   soDt: "dsfhg",
            //   maNhom: "GP01",
            //   hoTen: "jdsidshgai",
            // };
            // dispatch(postUserAction(tKDangNhap));
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
