import { Logo } from './Logo';
import { SearchBar } from '../../features/search/SearchBar';

export const Header = () => {
    return (
        <header className="container flex flex-col gap-6 py-6">
            <Logo />
            <SearchBar />
        </header>
    );
};
