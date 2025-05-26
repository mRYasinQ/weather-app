import { configureStore } from '@reduxjs/toolkit';

import api from './services/api';
import searchSlice from '../features/search/searchSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        search: searchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
