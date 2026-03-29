import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts1 = createAsyncThunk("ourHitProd/get", async () => {
  const res = await axios.get(`${BASE_URL}/top-hits-prods`);
  return res.data;
});
const initialState = {
  data: [],
  status: "idle",
};
const HitProdSlice = createSlice({
  name: "ourHitProd",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts1.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getProducts1.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts1.rejected, (state) => {
        state.status = "got error !";
      });
  },
});

export default HitProdSlice.reducer;
