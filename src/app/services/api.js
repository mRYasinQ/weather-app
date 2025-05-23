import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: WEATHER_API_URL,
});

const baseQueryWithTry = retry(baseQuery, { maxRetries: 3 });

const api = createApi({
    reducerPath: 'weatherApi',
    baseQuery: baseQueryWithTry,
    endpoints: () => ({}),
});

export default api;
export { baseQuery, baseQueryWithTry };
