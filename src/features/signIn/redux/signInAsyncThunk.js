import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAcountToSignIn = createAsyncThunk(
  "signInSlice/getAcountToSignIn",
  async (loginCredentials, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        loginCredentials,
        {
          headers: {
            "Content-Type": "application/json",
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNTMiLCJIZXRIYW5TdHJpbmciOiIxMi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODEyMjI0MDAwMDAiLCJuYmYiOjE3NjI4ODQwMDAsImV4cCI6MTc4MTM3MzYwMH0.ZxhiMsctm3eKMVBpn81V6ioC1EwaG05VEeMMv-ReXVA",
          },
        }
      );

      return result.data.content;
    } catch (err) {
      const errorMessage = err.response?.data?.content || err.message;
      return rejectWithValue(errorMessage);
    }
  }
);
