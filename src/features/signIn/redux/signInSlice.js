import { createSlice } from "@reduxjs/toolkit";
import { getAcountToSignIn } from "./signInAsyncThunk";

const initialState = {
  isLoading: false,
  acount: [],
};

const signInSlice = createSlice({
  name: "signInSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAcountToSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAcountToSignIn.fulfilled, (state, action) => {
        state.acount = action.payload;
        state.isLoading = false;
      })
      .addCase(getAcountToSignIn.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = signInSlice.actions;

export default signInSlice.reducer;
