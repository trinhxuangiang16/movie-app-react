import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBanner = createAsyncThunk(
  "homeSlice/getBanner",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNTMiLCJIZXRIYW5TdHJpbmciOiIxMi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODEyMjI0MDAwMDAiLCJuYmYiOjE3NjI4ODQwMDAsImV4cCI6MTc4MTM3MzYwMH0.ZxhiMsctm3eKMVBpn81V6ioC1EwaG05VEeMMv-ReXVA",
          },
        }
      );

      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getListMovie = createAsyncThunk(
  "homeSlice/getListMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNTMiLCJIZXRIYW5TdHJpbmciOiIxMi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODEyMjI0MDAwMDAiLCJuYmYiOjE3NjI4ODQwMDAsImV4cCI6MTc4MTM3MzYwMH0.ZxhiMsctm3eKMVBpn81V6ioC1EwaG05VEeMMv-ReXVA",
          },
        }
      );

      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getHeThongRap = createAsyncThunk(
  "homeSlice/getHeThongRap",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNTMiLCJIZXRIYW5TdHJpbmciOiIxMi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODEyMjI0MDAwMDAiLCJuYmYiOjE3NjI4ODQwMDAsImV4cCI6MTc4MTM3MzYwMH0.ZxhiMsctm3eKMVBpn81V6ioC1EwaG05VEeMMv-ReXVA",
          },
        }
      );

      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getLichChieuHeThong = createAsyncThunk(
  "homeSlice/getLichChieuHeThong",
  async (payload, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNTMiLCJIZXRIYW5TdHJpbmciOiIxMi8wNi8yMDI2IiwiSGV0SGFuVGltZSI6IjE3ODEyMjI0MDAwMDAiLCJuYmYiOjE3NjI4ODQwMDAsImV4cCI6MTc4MTM3MzYwMH0.ZxhiMsctm3eKMVBpn81V6ioC1EwaG05VEeMMv-ReXVA",
          },
        }
      );

      return result.data.content;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
