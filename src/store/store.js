import { configureStore } from "@reduxjs/toolkit";
import { directionReducer } from "./slices/direction/directionSlice";
import { productReducer } from "./slices/sneakersData/SneakersSlice";
import { accessoriesReducer } from "./slices/accessories/accessoriesSlice";
import { heroesReducer } from "./slices/heroes/heroesSlice";
import { directionLogoReducer } from "./slices/directionLogo/directionLogoSlice";
import { clouthingReducer } from "./slices/clouthingData/clouthingDataSlice";
import { shoesTypeReducer } from "./slices/shoesTypeHeader/shoesTypeSlice";

const store = configureStore({
  reducer: {
    direction: directionReducer,
    sneakersData: productReducer,
    accessoriesData: accessoriesReducer,
    heroes: heroesReducer,
    logo: directionLogoReducer,
    clouthing: clouthingReducer,
    shoesType: shoesTypeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware([...getDefaultMiddleware()]),
});

export default store;
