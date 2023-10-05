import { configureStore } from "@reduxjs/toolkit";
import { langReducer, switchLang } from "./langSlice";

const store = configureStore({
    reducer: {
        lang: langReducer
    }
})

export {store, switchLang }
