import { createSlice } from "@reduxjs/toolkit";

const directionSlice = createSlice({
    name:"direction",
    initialState: 0,
    reducers:{
        rightLeft(state, {payload}){
            
            if(payload.A === true){
                if(state === payload.B - 4){
                    return 0
                }else{
                    return state + 1
                }
            }
        
            if(payload.A === false){     
              if(state === 0){
                    return payload.B - 4
                     }else{
                        return state - 1 
                     }    
                } 
        }
    }
    
})

export const directionReducer = directionSlice.reducer
export const {rightLeft} = directionSlice.actions 