import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts3 = createAsyncThunk("essential/get", async () => {
  const res = await axios.get(`${BASE_URL}/essential`);
  return res.data;
});
const initialState = {
  data: [],
  status: "idle",
};
const EssentialSlice = createSlice({
  name: "essential",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getProducts3.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getProducts3.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts3.rejected, (state) => {
        state.status = "got error !";
      });
  },
});

export default EssentialSlice.reducer;
