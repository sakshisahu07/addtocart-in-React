import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const store=configureStore({
    reducers:{
        mycart:cartReducer;
    }
})
export default store;