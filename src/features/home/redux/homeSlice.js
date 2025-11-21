import { createSlice } from "@reduxjs/toolkit";
import {
  getBanner,
  getHeThongRap,
  getLichChieuHeThong,
  getListMovie,
  getMovieDetail, // Import mới
  getBookingBox,  // Import mới
} from "./homeAsyncThunk";

const initialState = {
  isLoading: false,
  banner: [],
  error: null,
  listMovie: [],
  heThongRap: [],
  lichChieuHeThong: [],
  rapTheoBrand: [],
  dSPhimTungRap: [],
  schedule: [],
  lichChieuMotPhimClick: [],
  
  // State mới
  movieDetail: null,
  bookingBox: null,
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    getMaHeThongRapToFilter: (state, action) => {
      // ... (giữ nguyên code cũ)
      const cumRapTheoBrand = state.lichChieuHeThong.filter(
        (item) => item.maHeThongRap === action.payload
      );
      // Kiểm tra lỗi nếu api chưa trả về kịp
      if(cumRapTheoBrand.length > 0) {
          let brandCumRap = cumRapTheoBrand[0].lstCumRap;
          state.rapTheoBrand = brandCumRap;
      }
    },
    getDSPhimTungRap: (state, action) => {
        // ... (giữ nguyên code cũ)
       let filterPhimDangChieu = action.payload.filter(
        (item) => item.dangChieu == true
      );
      state.dSPhimTungRap = filterPhimDangChieu;
    },
    getLichChieuTheoPhimClick: (state, action) => {
      state.lichChieuMotPhimClick = action.payload;
    },
    getLichCuaMotPhim: (state, action) => {
      state.schedule = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // ... (Các case cũ giữ nguyên)
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
        state.isLoading = false;
      })
      .addCase(getListMovie.fulfilled, (state, action) => {
        state.listMovie = action.payload;
        state.isLoading = false;
      })
      .addCase(getHeThongRap.fulfilled, (state, action) => {
        state.heThongRap = action.payload;
        state.isLoading = false;
      })
      .addCase(getLichChieuHeThong.fulfilled, (state, action) => {
        state.lichChieuHeThong = action.payload;
        state.isLoading = false;
      })

      // Case mới cho Chi Tiết Phim
      .addCase(getMovieDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovieDetail.rejected, (state) => {
        state.isLoading = false;
      })

      // Case mới cho Phòng Vé
      .addCase(getBookingBox.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookingBox.fulfilled, (state, action) => {
        state.bookingBox = action.payload;
        state.isLoading = false;
      })
      .addCase(getBookingBox.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  getMaHeThongRapToFilter,
  getDSPhimTungRap,
  getLichChieuTheoPhimClick,
  getLichCuaMotPhim,
} = homeSlice.actions;

export default homeSlice.reducer;