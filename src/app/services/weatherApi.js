import api from './api';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const weatherApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getForecastData: builder.query({
            query: (searchQuery, days = 3) => ({
                url: '/forecast.json',
                params: {
                    q: searchQuery,
                    days,
                    key: WEATHER_API_KEY,
                },
            }),
        }),
    }),
});

export default weatherApi;
export const { useGetForecastDataQuery, useLazyGetForecastDataQuery } = weatherApi;
