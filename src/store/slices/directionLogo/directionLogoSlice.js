import { createSlice } from "@reduxjs/toolkit";

const directionLogoSlice = createSlice({
    name:"directionLogo",
    initialState:0,
    reducers:{
        rightLeftLogo(state, {payload}){
            if(payload.A === true){
                if(state === payload.B - 6){
                    return 0
                }else{
                    return state + 1
                }
            }
        
            if(payload.A === false){     
              if(state === 0){
                    return payload.B - 6
                     }else{
                        return state - 1 
                     }    
                } 
        }
    }

})


export const directionLogoReducer = directionLogoSlice.reducer
export const {rightLeftLogo} = directionLogoSlice.actions