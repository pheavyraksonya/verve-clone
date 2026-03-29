import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProducts5 = createAsyncThunk("allProd/get", async () => {
  const res = await axios.get(`${BASE_URL}/allProd`);
  return res.data;
});
const initialState = {
  data: [],
  status: "idle",
};
const AllProdSlice = createSlice({
  name: "allProd",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getProducts5.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(getProducts5.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getProducts5.rejected, (state) => {
        state.status = "got error !";
      });
  },
});

export default AllProdSlice.reducer;
