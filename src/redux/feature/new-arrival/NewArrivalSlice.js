import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts2 = createAsyncThunk("newArrival/get", async () => {
  const res = await axios.get(`${BASE_URL}/new-arrival`);
  return res.data;
});
const initialState = {
  data: [],
  status: "idle",
};
const NewArrivalSlice = createSlice({
  name: "newArrival",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts2.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getProducts2.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts2.rejected, (state) => {
        state.status = "got error !";
      });
  },
});

export default NewArrivalSlice.reducer;
