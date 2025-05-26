import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearch, resetSearch } from './searchSlice';

import { useLazyGetForecastDataQuery } from '../../app/services/weatherApi';

import { IconButton } from '../../components/IconButton';
import { SearchResult } from './SearchResult';

import { SearchIcon } from '../../icons/SearchIcon';
import { HomeIcon } from '../../icons/HomeIcon';

export const SearchBar = () => {
    const lastRequestRef = useRef(null);

    const [showResult, setShowResult] = useState(false);

    const { query, searched } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const [searchWeather, { data: weatherData, isSuccess: weatherDataSuccess, isFetching: weatherDataFetching }] =
        useLazyGetForecastDataQuery();

    useEffect(() => {
        if (query.length < 3) return;

        const timerId = setTimeout(() => {
            const { abort } = searchWeather(query);
            lastRequestRef.current = abort;

            setShowResult(true);
        }, 500);

        return () => {
            if (lastRequestRef.current) lastRequestRef.current();
            clearTimeout(timerId);
        };
    }, [query]);

    const chnageQueryHandler = (e) => {
        setShowResult(false);
        dispatch(updateSearch(e.target.value.trim()));
    };
    const resetHandler = () => dispatch(resetSearch());

    return (
        <div className="flex h-13 w-full items-center gap-2">
            {searched && (
                <div className="h-full w-13">
                    <IconButton onClick={resetHandler}>
                        <div>
                            <HomeIcon />
                        </div>
                    </IconButton>
                </div>
            )}
            <div className="relative h-full w-full">
                <div className="group relative h-full w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-500 transition-colors duration-300 group-focus-within:text-neutral-300 group-focus-within:duration-300">
                        <SearchIcon />
                    </div>
                    <input
                        onChange={chnageQueryHandler}
                        className="h-full w-full rounded-full border border-neutral-500/40 bg-neutral-700 py-2 pr-4 pl-12 text-sm text-neutral-500 transition-colors duration-300 outline-none group-focus-within:border-neutral-300/40 group-focus-within:text-neutral-300 group-focus-within:duration-300 placeholder:text-neutral-500 md:text-base"
                        type="text"
                        name="search"
                        placeholder="Search for cities or countries..."
                        value={query}
                    />
                </div>
                {query && showResult && weatherDataSuccess && !weatherDataFetching && (
                    <SearchResult weatherData={weatherData} />
                )}
            </div>
        </div>
    );
};
