import { createSlice } from "@reduxjs/toolkit";
import { fetchCardsData } from "./API";

const cardsSlice = createSlice({
    name:"cardsData",
    initialState: {
        isLoading: false,
        data:[],
    },
    reducers:{
        clickHeart(state, {payload}) {
            const nevArr = state.data.map((shoes) => shoes.id === payload ? {...shoes, favorites: !shoes.favorites} : shoes)
            return{
                ...state,
                data:  nevArr
                
            }
        }
    },

    extraReducers:(builder) => {
        builder
        .addCase(fetchCardsData.pending, (state) => {
            return {
                ...state,
                isLoading: true
            }
        })
        .addCase(fetchCardsData.fulfilled, (state, {payload}) => {
            return{
                data: payload,
                isLoading: false
            }
        })
        .addCase(fetchCardsData.rejected, () => {
            console.log("error")
        })
    },
 })


export const  cardsReducer = cardsSlice.reducer
export const selectCardsData = state => state.cardsData
export const {clickHeart} = cardsSlice.actions