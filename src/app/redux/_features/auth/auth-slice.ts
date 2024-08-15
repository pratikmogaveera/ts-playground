import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ValueType = {
    username: string,
    userId: string,
    isAdmin: boolean,
    isAuth: boolean
}

type StateType = {
    value: ValueType
}

const initialState: StateType = {
    value: {
        username: "",
        userId: "",
        isAdmin: false,
        isAuth: false,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState
        },

        logIn: (state, action: PayloadAction<string>) => {
            state.value.username = action.payload
            state.value.userId = (Math.random() * 1000000).toFixed()
            state.value.isAuth = true
        },

        toggleIsAdmin: (state) => {
            state.value.isAdmin = !state.value.isAdmin
        }
    }
})


export default authSlice.reducer
export const { logIn, logOut, toggleIsAdmin } = authSlice.actions
