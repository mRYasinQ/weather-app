import { IconButton } from './IconButton';

import { SearchIcon } from '../icons/SearchIcon';
import { ArrowRightIcon } from '../icons/ArrowRightIcon';

export const SearchBar = ({ searchInputRef, searchHandler }) => {
    return (
        <div className="flex h-13 w-full items-center gap-4">
            <div className="group relative h-full w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-500 transition-colors duration-300 group-focus-within:text-neutral-300 group-focus-within:duration-300">
                    <SearchIcon />
                </div>
                <input
                    ref={searchInputRef}
                    className="h-full w-full rounded-full border border-neutral-500/40 bg-neutral-700 py-2 pr-4 pl-12 text-sm text-neutral-500 transition-colors duration-300 outline-none group-focus-within:border-neutral-300/40 group-focus-within:text-neutral-300 group-focus-within:duration-300 placeholder:text-neutral-500 md:text-base"
                    type="text"
                    name="search"
                    placeholder="Search for cities or countries..."
                />
            </div>
            <div className="h-full w-13">
                <IconButton onClick={searchHandler}>
                    <div>
                        <ArrowRightIcon />
                    </div>
                </IconButton>
            </div>
        </div>
    );
};
