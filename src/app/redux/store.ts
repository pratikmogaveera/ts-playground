import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from '@/app/redux/_features/auth/auth-slice'
import counterSlice from '@/app/redux/_features/counter/counter-slice'
import postsSlice from '@/app/redux/_features/posts/posts-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { postsApi } from '../rtk-query/api/posts/posts'

export const store = configureStore({
    reducer: {
        authSlice,
        counterSlice,
        postsSlice,
        [postsApi.reducerPath]: postsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
