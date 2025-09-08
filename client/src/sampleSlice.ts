import { createSlice } from '@reduxjs/toolkit';

const searchCarSlice = createSlice({
    name: 'sampleSlice',
    initialState: { value: '' },
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload;
        },
        clearSearch: (state) => {
            state.value = '';
        },
    },
});

export const { setSearch, clearSearch } = searchCarSlice.actions;
export default searchCarSlice.reducer;
