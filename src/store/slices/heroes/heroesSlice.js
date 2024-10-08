import { createSlice } from "@reduxjs/toolkit";


const heroesSlice = createSlice({
    name: "heroes",
    initialState: "jogger",
    reducers: {
        nextHero(action , {payload}) {
            return payload
        }
    }
})

export const selectHeroes = state => state.heroes
export const {nextHero} = heroesSlice.actions
export const heroesReducer = heroesSlice.reducer