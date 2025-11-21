import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../home/redux/homeAsyncThunk";
import { getDateAndTime } from "../../home/hook/useGetDateAndTime";

export default function DetailPage() {
  const { id } = useParams(); // Lấy id từ URL
  const dispatch = useDispatch();
  const { movieDetail, isLoading } = useSelector((state) => state.homeSlice);

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetail(id));
    }
  }, [id, dispatch]);

  if (isLoading) return <div className="text-white text-center mt-5">Loading...</div>;
  if (!movieDetail) return null;

  return (
    <div className="container mt-5 text-light">
      <div className="row">
        {/* Hình ảnh phim */}
        <div className="col-md-4">
          <img
            src={movieDetail.hinhAnh}
            alt={movieDetail.tenPhim}
            className="img-fluid rounded shadow"
            style={{ width: "100%" }}
          />
        </div>
        {/* Thông tin phim */}
        <div className="col-md-8">
          <h2 className="fw-bold text-warning">{movieDetail.tenPhim}</h2>
          <p>{movieDetail.moTa}</p>
          <p>
            <strong>Ngày khởi chiếu:</strong>{" "}
            {getDateAndTime(movieDetail.ngayKhoiChieu).date}
          </p>
          <p>
            <strong>Đánh giá:</strong> {movieDetail.danhGia}/10
          </p>
          
          {/* Lịch chiếu */}
          <div className="mt-5">
            <h3 className="border-bottom pb-2 mb-3">Lịch Chiếu</h3>
            <div className="bg-dark p-3 rounded">
              {movieDetail.heThongRapChieu && movieDetail.heThongRapChieu.length > 0 ? (
                movieDetail.heThongRapChieu.map((heThong) => (
                  <div key={heThong.maHeThongRap} className="mb-4">
                    <h5 className="text-success fw-bold">
                      <img src={heThong.logo} alt="" width="30" className="me-2 bg-white rounded-circle" />
                      {heThong.tenHeThongRap}
                    </h5>
                    {heThong.cumRapChieu.map((cumRap) => (
                      <div key={cumRap.maCumRap} className="ms-4 mb-3">
                        <h6 className="fw-bold">{cumRap.tenCumRap}</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {cumRap.lichChieuPhim.map((lich) => {
                             const { date, time } = getDateAndTime(lich.ngayChieuGioChieu);
                             return (
                                <Link
                                  to={`/ticketroom/${lich.maLichChieu}`}
                                  key={lich.maLichChieu}
                                  className="btn btn-outline-info btn-sm"
                                >
                                  {date} - {time}
                                </Link>
                             );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <p>Chưa có lịch chiếu cho phim này.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}