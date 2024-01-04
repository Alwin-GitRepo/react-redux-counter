import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

export const store = configureStore({
    reducer : {
        
        // reducers should be key/value pairs
        counter : CounterSlice
    }
})