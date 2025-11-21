import { createSlice } from "@reduxjs/toolkit";
import { getAcountToSignIn } from "../../signIn/redux/signInAsyncThunk";

const initialState = {
  isLoading: false,
  user: {},
  error: null,
};

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAcountToSignIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAcountToSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        // localStorage.setItem("CurrentAcount", JSON.stringify(action.payload));
      })
      .addCase(getAcountToSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = signUpSlice.actions;

export default signUpSlice.reducer;
