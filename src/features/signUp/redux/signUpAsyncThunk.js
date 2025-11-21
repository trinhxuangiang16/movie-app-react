import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserAction = createAsyncThunk(
  "signUpSlice/postUserAction",
  async (signUpUser, { rejectWithValue }) => {
    try {
      console.log(signUpUser);
      const result = await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        signUpUser,
        {
          headers: {
            "Content-Type": "application/json",
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4NiIsIkhldEhhblN0cmluZyI6IjIyLzA0LzIwMjYiLCJIZXRIYW5UaW1lIjoiMTc3NjgxNjAwMDAwMCIsIm5iZiI6MTc0OTkyMDQwMCwiZXhwIjoxNzc2OTYzNjAwfQ.4PAmLYuTxEprwX1py09tjOLNQcwTPq9TCwLUXHwfwSY",
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
