import { createSlice } from "@reduxjs/toolkit";
import {
  getBanner,
  getHeThongRap,
  getLichChieuHeThong,
  getListMovie,
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
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    getMaHeThongRapToFilter: (state, action) => {
      const cumRapTheoBrand = state.lichChieuHeThong.filter(
        (item) => item.maHeThongRap === action.payload
      );
      let brandCumRap = cumRapTheoBrand[0].lstCumRap;
      state.rapTheoBrand = brandCumRap;
    },
    getDSPhimTungRap: (state, action) => {
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
      .addCase(getBanner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
        state.isLoading = false;
      })
      .addCase(getBanner.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getListMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListMovie.fulfilled, (state, action) => {
        state.listMovie = action.payload;
        state.isLoading = false;
      })
      .addCase(getListMovie.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getHeThongRap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHeThongRap.fulfilled, (state, action) => {
        state.heThongRap = action.payload;
        state.isLoading = false;
      })
      .addCase(getHeThongRap.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getLichChieuHeThong.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLichChieuHeThong.fulfilled, (state, action) => {
        state.lichChieuHeThong = action.payload;
        state.isLoading = false;
      })
      .addCase(getLichChieuHeThong.rejected, (state, action) => {
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
