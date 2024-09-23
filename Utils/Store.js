import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import themeReducer from "./themeSlice";


const store = configureStore({
    reducer:{
        app: appSlice,
        theme: themeReducer,
    }
})

export default store;