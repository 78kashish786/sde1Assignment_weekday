import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice.js'
export const Store =configureStore({
    reducer:{
        filters: filterReducer,
    }
})