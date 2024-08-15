import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import examplePosts from "../../posts/util"

export type Post = {
    id: string,
    title: string,
    content: string,
    createdAt: string,
}

type PostsList = { data: Post[] }

const initialState: PostsList = {
    data: examplePosts
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Omit<Post, "id" | "createdAt">>) => {
            return {
                data: [...state.data, { id: crypto.randomUUID(), createdAt: format(new Date(), "Pp"), ...action.payload }]
            }
        },
        deletePost: (state, action: PayloadAction<string>) => {
            return {
                data: state.data.filter(item => item.id !== action.payload)
            }
        },
        updatePost: (state, action: PayloadAction<Omit<Post, "createdAt">>) => {
            for (let i = 0; i < state.data.length; i++)
                if (state.data[i].id === action.payload.id) {
                    state.data[i].content = action.payload.content
                    state.data[i].title = action.payload.title
                    break
                }
        }
    }
})

export default postsSlice.reducer
export const { addPost, deletePost, updatePost } = postsSlice.actions