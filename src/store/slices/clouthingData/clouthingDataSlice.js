import { createSlice } from "@reduxjs/toolkit";
import { fetchClouthing } from "./API";

const clouthingSlice = createSlice({
  name: "clouthing",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchClouthing.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchClouthing.fulfilled, (state, { payload }) => {
        return { isLoading: false, data: payload };
      })
      .addCase(fetchClouthing.rejected, () => {
        console.log("error");
      });
  },
});

export const clouthingReducer = clouthingSlice.reducer;
export const selectClouthing = (state) => state.clouthing;
