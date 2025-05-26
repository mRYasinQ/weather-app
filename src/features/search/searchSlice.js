import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    query: '',
    searched: false,
    result: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch: (state, { payload }) => {
            state.query = payload;
        },
        setSearchResult: (state, { payload }) => {
            state.query = '';
            state.searched = true;
            state.result = payload;
        },
        resetSearch: () => initialState,
    },
});

export const { updateSearch, setSearchResult, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
