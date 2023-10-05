import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('_lang') || 'en'

const langSlice = createSlice({
    initialState,
    name: 'lang',
    reducers: {
        switchLang: (state, action) => {
            console.log("state", state, " action", action);
            localStorage.setItem('_lang', action.payload?.lang)
            const lang = action.payload?.lang || 'en'
            return lang;
        }
    }

})

export const langReducer = langSlice.reducer;
export const {switchLang} = langSlice.actions;