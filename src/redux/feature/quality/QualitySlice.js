import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts4 = createAsyncThunk("quality/get", async () => {
  const res = await axios.get(`${BASE_URL}/quality`);
  return res.data;
});
const initialState = {
  data: [],
  status: "idle",
};
const QualitySlice = createSlice({
  name: "quality",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts4.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getProducts4.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts4.rejected, (state) => {
        state.status = "got error !";
      });
  },
});

export default QualitySlice.reducer;
