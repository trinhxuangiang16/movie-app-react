import { createSlice } from "@reduxjs/toolkit";
import { postUserAction } from "./signUpAsyncThunk";

const initialState = {
  isLoading: false,
  user: {},
  error: null,
};

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {
    removeCurrentUserAction: (state, action) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUserAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postUserAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { removeCurrentUserAction } = signUpSlice.actions;

export default signUpSlice.reducer;
