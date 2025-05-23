import { useRef } from 'react';

import { Header } from '../components/Header';

export default function Home() {
    const searchInputRef = useRef(null);

    async function searchHandler(e) {}

    return (
        <>
            <Header searchInputRef={searchInputRef} searchHandler={searchHandler} />
        </>
    );
}
