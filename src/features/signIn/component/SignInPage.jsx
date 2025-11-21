import { useDispatch } from "react-redux";
import "./style.css";
import { getAcountToSignIn } from "../redux/signInAsyncThunk";

export default function SignInPage() {
  const dispatch = useDispatch();

  return (
    <div className="sign-in">
      <form className="form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Account
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            Please
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          {/* <div id="emailHelp" className="form-text">
            Please
          </div> */}
        </div>
        <div className="mb-3 form-check"></div>
        <button
          onClick={() => {
            const credentials = {
              taiKhoan: "addUser",
              matKhau: "123456789aA@",
            };
            dispatch(getAcountToSignIn(credentials));
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
