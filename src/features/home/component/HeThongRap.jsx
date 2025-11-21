import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeThongRap, getLichChieuHeThong } from "../redux/homeAsyncThunk";
import {
  getDSPhimTungRap,
  getLichChieuTheoPhimClick,
  getLichCuaMotPhim,
  getMaHeThongRapToFilter,
} from "../redux/homeSlice";
import { getDateAndTime } from "../hook/useGetDateAndTime";
import Slider from "react-slick";

export default function HeThongRap() {
  const rapPhim = useSelector((state) => state.homeSlice.heThongRap);
  const cumRap = useSelector((state) => state.homeSlice.rapTheoBrand) || [];
  const dsPhim = useSelector((state) => state.homeSlice.dSPhimTungRap) || [];
  const cardLichPhim = useSelector((state) => state.homeSlice.schedule) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeThongRap());
    dispatch(getLichChieuHeThong());
  }, []);

  let handlePhimClickToGetInfo = (item) => {
    let data = item.lstLichChieuTheoPhim;
    dispatch(getLichChieuTheoPhimClick(item.lstLichChieuTheoPhim));
    let ten = item.tenPhim;
    let imag = item.hinhAnh;

    const result = [
      {
        tenPhim: ten,
        hinhAnh: imag,
        time: data.map((item) => getDateAndTime(item.ngayChieuGioChieu)),
      },
    ];

    dispatch(getLichCuaMotPhim(result));
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1, // Giữ nguyên 1 nếu bạn có thể cần nút điều hướng
    swipeToSlide: true, // **QUAN TRỌNG:** Cho phép dừng chính xác tại slide kết thúc vuốt
    draggable: true,
    touchThreshold: 20,
    focusOnSelect: true,
  };

  return (
    <div className="movie-section">
      <div className="container">
        <h4 className="border border-light bg-black text-light fw-bold text-uppercase d-inline-block px-4 py-2 custom-rounded-heading rounded-4 mb-5">
          CHOOSE ONE BRAND TO SEARCH
        </h4>
        <div className="row  mb-5">
          {rapPhim.map((item) => {
            return (
              <div className="col-2">
                <div
                  className="nameCinema"
                  onClick={() => {
                    dispatch(getMaHeThongRapToFilter(item.maHeThongRap));
                    console.log(item.maHeThongRap);
                  }}
                >
                  <img src={item.logo} alt="name of cinema" />
                  <p>{item.tenHeThongRap}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-5">
        {cumRap && cumRap.length > 0 ? (
          <div>
            <div>
              <h4 className="bg-black border border-light text-light fw-bold text-uppercase d-inline-block px-4 py-2 custom-rounded-heading rounded-4 mb-5">
                please choose a movie theater!
              </h4>
            </div>

            <div className="row gap-3 justify-content-center">
              {cumRap.map((item) => {
                return (
                  <div
                    onClick={() => {
                      dispatch(getDSPhimTungRap(item.danhSachPhim));
                    }}
                    className="card-rap col-3 p-3"
                  >
                    <h5>{item.tenCumRap}</h5>
                    <p>Địa chỉ: {item.diaChi}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="container mt-5">
        <div className="row">
          {dsPhim.map((item) => {
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
                  </div>

                  <div className="card-body text-center">
                    <h6
                      className="card-title fw-bold text-success mb-1 single-line-ellipsis fs-5"
                      style={{ fontSize: "1rem", cursor: "pointer" }}
                    >
                      {item.tenPhim}
                    </h6>
                    <a
                      href="#lich-phim"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePhimClickToGetInfo(item);

                        document.getElementById("lich-phim")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      <span
                        className="btn badge bg-secondary me-2 fs-6"
                        style={{ fontSize: "0.75rem" }}
                      >
                        See movie schedule
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {cardLichPhim && cardLichPhim.length > 0 ? (
        <div id="lich-phim" className="container movie-wrap-has-time">
          <h4 className="border border-light bg-black text-light fw-bold text-uppercase d-inline-block px-4 py-2 custom-rounded-heading rounded-4 mb-5">
            Please select date and time
          </h4>
          <div className="row">
            <div className="col-12 movie-and-time mb-5">
              <div>
                <img
                  className="img-movie-time"
                  src={cardLichPhim[0].hinhAnh}
                  alt=""
                  width="50px"
                />

                <div className="title-movie">
                  <h3>{cardLichPhim[0].tenPhim}</h3>
                  <div className="wrap-time-box">
                    {cardLichPhim[0].length <= 6 ? (
                      cardLichPhim[0].time.map((item, index) => (
                        <div key={index} className="time-item">
                          <div className="time-box">
                            <div className="date">{item.date}</div>
                            <div className="hour">{item.time}</div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <Slider {...settings}>
                        {cardLichPhim[0].time.map((item, index) => (
                          <div key={index} className="time-item">
                            <div className="time-box">
                              <div className="date">{item.date}</div>
                              <div className="hour">{item.time}</div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
