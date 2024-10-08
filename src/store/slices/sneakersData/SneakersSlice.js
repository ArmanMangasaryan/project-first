import { createSlice } from "@reduxjs/toolkit";
import { fetchSneakers } from "./API";

const SneakersSlice = createSlice({
    name: "sneakersData",
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchSneakers.pending, (state) => {
                return { ...state, isLoading: true }
            })
            .addCase(fetchSneakers.fulfilled, (state, { payload }) => {

                return { isLoading: false, data: payload }
            })
            .addCase(fetchSneakers.rejected, () => {
                console.log("error")

            })
    }
})

export const productReducer = SneakersSlice.reducer
export const selectSneakers = state => state.sneakersData
