import { Logo } from './Logo';
import { SearchBar } from '../SearchBar';

export const Header = ({ searchInputRef, searchHandler }) => {
    return (
        <header className="container flex flex-col gap-6 py-6">
            <Logo />
            <SearchBar searchInputRef={searchInputRef} searchHandler={searchHandler} />
        </header>
    );
};
