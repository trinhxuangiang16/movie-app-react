import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookingBox } from "../../home/redux/homeAsyncThunk";

export default function BookingPage() {
  const { id } = useParams(); // Đây là maLichChieu
  const dispatch = useDispatch();
  const { bookingBox, isLoading } = useSelector((state) => state.homeSlice);

  useEffect(() => {
    if (id) {
      dispatch(getBookingBox(id));
    }
  }, [id, dispatch]);

  if (isLoading) return <div className="text-white text-center mt-5">Loading...</div>;
  if (!bookingBox) return null;

  const { thongTinPhim, danhSachGhe } = bookingBox;

  return (
    <div className="container mt-5 text-light">
      <h2 className="text-center mb-4 text-warning">ĐẶT VÉ XEM PHIM</h2>
      <div className="row">
        {/* Danh sách ghế */}
        <div className="col-md-8">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {danhSachGhe.map((ghe, index) => {
              // Xác định loại ghế để style
              let gheClass = "btn btn-secondary"; // Ghế thường
              if (ghe.loaiGhe === "Vr") gheClass = "btn btn-warning"; // Ghế VIP (Ví dụ data trả về là Vip)
              if (ghe.loaiGhe === "Vip") gheClass = "btn btn-warning";
              if (ghe.daDat) gheClass = "btn btn-danger disabled"; // Ghế đã đặt

              return (
                <button
                  key={index}
                  className={`p-2 ${gheClass}`}
                  style={{ width: "40px", height: "40px", fontSize: "10px" }}
                  disabled={ghe.daDat}
                >
                  {ghe.daDat ? "X" : ghe.tenGhe}
                </button>
              );
            })}
          </div>
          <div className="mt-4 d-flex justify-content-center gap-4">
             <div className="d-flex align-items-center"><span className="btn btn-secondary p-2 me-2"></span> Thường</div>
             <div className="d-flex align-items-center"><span className="btn btn-warning p-2 me-2"></span> VIP</div>
             <div className="d-flex align-items-center"><span className="btn btn-danger p-2 me-2"></span> Đã đặt</div>
          </div>
        </div>

        {/* Thông tin vé */}
        <div className="col-md-4">
          <div className="card bg-dark text-light shadow p-3">
            <h3 className="text-center border-bottom pb-2 text-success">{thongTinPhim.tenPhim}</h3>
            <div className="mt-3">
              <p><strong>Cụm rạp:</strong> {thongTinPhim.tenCumRap}</p>
              <p><strong>Địa chỉ:</strong> {thongTinPhim.diaChi}</p>
              <p><strong>Rạp:</strong> {thongTinPhim.tenRap}</p>
              <p><strong>Ngày giờ chiếu:</strong> {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
            </div>
            <hr />
            <div className="d-grid">
                <button className="btn btn-success fs-5">ĐẶT VÉ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}