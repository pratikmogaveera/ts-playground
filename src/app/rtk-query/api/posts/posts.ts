import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => 'posts/',
            transformResponse: (data) => {
                return data as Post[]
            }
        }),
        getPostById: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            transformResponse: (data) => {
                return data as Post;
            }
        }),

    })
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi