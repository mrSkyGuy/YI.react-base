import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: "basket",
    initialState: {},
    reducers: {
        addBook: (state, action) => {
            state[action.payload] = (state[action.payload] || 0) + 1
        },
        removeBook: (state, action) => {
            state[action.payload] = (state[action.payload] || 0) - 1
            console.log(state[action.payload])
            if (state[action.payload] <= 0) {
                delete state[action.payload]
            }
        }
    }
})
