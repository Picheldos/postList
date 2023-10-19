import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Post  from '../entities/post';

const POSTS_LIMIT = 10;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Array<Post>, number>({
            query: (page) => `posts?_page=${page}&_limit=${POSTS_LIMIT}`,
            providesTags: ['Post'],
        }),
        getPost: builder.query<Post, number>({
            query: (id) => `posts/${id}`,
            providesTags: (id) => [{ type: 'Post', id: id!.toString() }],
        }),
        getAllPost: builder.query({
            query: () => `posts`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostQuery, useGetAllPostQuery } = api;