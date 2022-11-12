import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalog";
import { basketSlice } from "./basket";
import { bookSlice } from "./book";

export const store = configureStore({
    reducer: combineReducers({
        catalog: catalogSlice.reducer,
        book: bookSlice.reducer,
        basket: basketSlice.reducer
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})
