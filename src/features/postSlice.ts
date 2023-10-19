import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Post from '../entities/post';

interface PostState {
    posts: Post[];
    isLoading: boolean;
    hasMore: boolean;
    error: string | null;
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    hasMore: true,
    error: null
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFail: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getPostsStart, getPostsSuccess, getPostsFail } = postSlice.actions;

export default postSlice.reducer;
