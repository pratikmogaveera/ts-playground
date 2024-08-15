import { createSlice } from "@reduxjs/toolkit";

type StateType = {
    count: number
}

const initialState: StateType = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        clear: (state) => {
            state.count = 0
        },
    }
})

export default counterSlice.reducer
export const { increment, decrement, clear } = counterSlice.actions