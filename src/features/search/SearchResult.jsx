import { useDispatch } from 'react-redux';

import { setSearchResult } from './searchSlice';

export const SearchResult = ({ weatherData }) => {
    const dispatch = useDispatch();

    const searchHandler = () => dispatch(setSearchResult(weatherData));

    const {
        location: { name, country },
        current: { temp_c },
    } = weatherData;

    return (
        <div className="absolute mt-1.5 h-fit w-full overflow-hidden rounded-4xl border border-neutral-500/40 bg-neutral-700/10 backdrop-blur-xs">
            <div
                className="flex cursor-pointer items-center justify-between bg-transparent px-12 py-4 duration-300 hover:bg-neutral-700 hover:duration-300"
                onClick={searchHandler}
            >
                <span className="text-md font-medium whitespace-nowrap text-neutral-300">
                    {name}, {country}
                </span>
                <span className="text-md font-medium text-neutral-300">{temp_c}°</span>
            </div>
        </div>
    );
};
