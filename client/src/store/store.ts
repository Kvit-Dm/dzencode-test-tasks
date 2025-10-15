import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './sampleSlice'


export const store = configureStore({
    reducer: {
        sampleSlice: searchReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});