import { createSlice } from "@reduxjs/toolkit";
import { fetchAccessories } from "./API";

const accessoriesSlice = createSlice({
  name: "accessoriesData",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessories.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchAccessories.fulfilled, (state, { payload }) => {
        return { isLoading: false, data: payload };
      })
      .addCase(fetchAccessories.rejected, () => {
        console.log("error");
      });
  },
});

export const accessoriesReducer = accessoriesSlice.reducer;
export const selectAccessories = (state) => state.accessoriesData;
