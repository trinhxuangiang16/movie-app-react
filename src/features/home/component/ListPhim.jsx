import { useDispatch, useSelector } from "react-redux";
import { getListMovie } from "../redux/homeAsyncThunk";
import { useEffect } from "react";
import "./style.css";
import { BsCaretLeftSquareFill } from "react-icons/bs";

export default function ListPhim() {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.homeSlice.listMovie);

  useEffect(() => {
    dispatch(getListMovie());
  }, []);

  return (
    <div className="list-movie mt-5">
      <div className="container">
        <h2 className="border border-light text-light fw-bold text-uppercase d-inline-block px-4 py-2 custom-rounded-heading rounded-4">
          Movie is showing
        </h2>
      </div>
      <div className="container mt-3">
        <div className="row">
          {listData.slice(3, 15).map((item) => {
            return (
              <div className="col-2 mb-5">
                <div className="card card-movie h-100 border-0">
                  <div style={{ position: "relative" }}>
                    <img
                      src={item.hinhAnh}
                      className="card-img-top"
                      alt={item.tenPhim}
                      style={{
                        objectFit: "cover",
                        height: "250px",
                        width: "100%",
                      }}
                    />
                    <a
                      href={item.trailer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="trailer-overlay"
                    >
                      <BsCaretLeftSquareFill className="play-icon" />
                    </a>
                  </div>

                  <div className="card-body p-1">
                    <div className="d-flex align-items-center mb-1">
                      <span
                        className="badge bg-danger text-uppercase me-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        Hot
                      </span>
                      <span
                        className="badge bg-secondary me-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        SUBTITLES
                      </span>
                      <span
                        className="badge bg-success"
                        style={{ fontSize: "0.75rem" }}
                      >
                        2D
                      </span>
                    </div>
                    <h6
                      className="card-title fw-bold text-success mb-1 single-line-ellipsis"
                      style={{ fontSize: "1rem", cursor: "pointer" }}
                    >
                      {item.tenPhim}
                    </h6>
                    <p
                      className="card-text text-muted"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Category: <span className="text-dark">Lorem</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
