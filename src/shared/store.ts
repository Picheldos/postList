import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/postSlice';
import { api } from './api';

const store = configureStore({
    reducer: {
        posts: postReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
