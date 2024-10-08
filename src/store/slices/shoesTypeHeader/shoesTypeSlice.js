import { createSlice } from "@reduxjs/toolkit";


const shoesTypeSlice = createSlice({
    name:"shoesType",
    initialState:{
    sizes:[
        {value:false,size:"30 EUR"},
        {value:false,size:"31 EUR"},
        {value:false,size:"32 EUR"},
        {value:false,size:"33 EUR"},
        {value:false,size:"34 EUR"},
        {value:false,size:"35 EUR"},
        {value:false,size:"36 EUR"},
        {value:false,size:"37 EUR"},
        {value:false,size:"38 EUR"},
        {value:false,size:"39 EUR"},
        {value:false,size:"40 EUR"},
        {value:false,size:"41 EUR"},
        {value:false,size:"42 EUR"},
        {value:false,size:"43 EUR"},
        {value:false,size:"44 EUR"},
        {value:false,size:"45 EUR"},
        {value:false,size:"46 EUR"},
    ],
    seasons:[
        {value:false, text:"Демисезон"},
        {value:false, text:"Зима"},
        {value:false, text:"Лето"},
    ],
    colors:[
        {value:false, color:"black"},
        {value:false, color:"white"},
        {value:false, color:"red"},
        {value:false, color:"beage"},
        {value:false, color:"blue"},
        {value:false, color:"violet"},
        {value:false, color:"green"},
        {value:false, color:"yellow"},
        {value:false, color:"grey"},
    ],
    categorys:[
        {value:false, category:"Баскетбол"},
        {value:false, category:"Бег"},
        {value:false, category:"Ботинки"},
        {value:false, category:"Кроссовки с мехом"},
        {value:false, category:"Сандалии и сланцы"},
        {value:false, category:"Сапоги"},
    ],
    brands:[
        {value:false, brand:"Adidas"},
        {value:false, brand:"Alexander-McQueen"},
        {value:false, brand:"Asics"},
        {value:false, brand:"Balenciaga"},
        {value:false, brand:"Caterpillar"},
        {value:false, brand:"Columbia"},
    ]
},
    reducers:{
        sizetype(state, {payload}){
            return {
                ...state,
                sizes: state.sizes.map((size) => {
                 if (size.size === payload) {
                    return{...size, value: !size.value}
                 }else{
                    return{...size, value:false}
                 }
            })
            }
        },
        seasontype(state, {payload}){
            return{
                ...state,
                seasons: state.seasons.map((season) => {
                    if (season.text === payload) {
                        return{...season, value: !season.value}
                    }else{
                        return{...season, value:false}
                    }
                })
            }
        },
        colortype(state, {payload}){
            return{
                ...state,
                colors: state.colors.map((color) => {
                    if (color.color === payload){
                        return{...color, value: !color.value}
                    }else{
                        return{...color, value:false}
                    }
                })
            }
        },
        categorytype(state, {payload}){
            return{
                ...state,
                categorys:state.categorys.map((category) => {
                    if (category.category === payload){
                        return{...category, value: !category.value}
                    }else{
                        return{...category, value:false}
                    }
                })
            }
        },
        brandtype(state, {payload}){
            return{
                ...state,
                brands:state.brands.map((brand) => {
                    if (brand.brand === payload) {
                        return{...brand, value: !brand.value}
                    }else{
                        return{...brand,value:false}
                    }
                })
            }
        }
    }
})


export const {sizetype, seasontype, colortype, categorytype, brandtype} = shoesTypeSlice.actions

export const shoesTypeReducer = shoesTypeSlice.reducer
