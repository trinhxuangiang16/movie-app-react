// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getAcountToSignIn = createAsyncThunk(
//   "signInSlice/getAcountToSignIn",
//   async (loginCredentials, { rejectWithValue }) => {
//     try {
//       const result = await axios.post(
//         "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
//         loginCredentials,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       return result.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Đổi tên biến payload thành loginCredentials để rõ ràng hơn
export const getAcountToSignIn = createAsyncThunk(
  "signInSlice/getAcountToSignIn",
  // Payload sẽ chứa { taiKhoan, matKhau }
  async (loginCredentials, { rejectWithValue }) => {
    try {
      // SỬA LỖI QUAN TRỌNG: Truyền loginCredentials (chứa tài khoản/mật khẩu) vào body
      const result = await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        // THAM SỐ THỨ HAI: Dữ liệu (payload) cần gửi đi
        loginCredentials,
        {
          headers: {
            "Content-Type": "application/json",
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNTMiLCJIZXRIYW5TdHJpbmciOiIxMi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODEyMjI0MDAwMDAiLCJuYmYiOjE3NjI4ODQwMDAsImV4cCI6MTc4MTM3MzYwMH0.ZxhiMsctm3eKMVBpn81V6ioC1EwaG05VEeMMv-ReXVA",
          },
        }
      );

      // API DangNhap trả về đối tượng Người Dùng đã đăng nhập thành công (token, thongTinNguoiDung)
      // Nếu thành công (200), bạn nên trả về result.data.content
      return result.data.content;
    } catch (err) {
      // SỬA LỖI REDUX: Chỉ trả về chuỗi lỗi (serializable) thay vì toàn bộ đối tượng AxiosError
      // Lấy thông báo lỗi cụ thể từ server (ví dụ: "Tài khoản không tồn tại")
      const errorMessage = err.response?.data?.content || err.message;
      return rejectWithValue(errorMessage);
    }
  }
);
