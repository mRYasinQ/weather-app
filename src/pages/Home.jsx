import { useRef } from 'react';

import useIp from '../hooks/useIp';

import { Header } from '../components/Header';
import { CurrentLocation } from '../features/weather/CurrentLocation';

export default function Home() {
    const searchInputRef = useRef(null);

    const { ip, isLoading: isLoadingIp, ipError } = useIp();

    async function searchHandler(e) {}

    return (
        <>
            <Header searchInputRef={searchInputRef} searchHandler={searchHandler} />
            <main className="container flex flex-col gap-6">
                {!isLoadingIp && !ipError && <CurrentLocation ip={ip} />}
            </main>
        </>
    );
}
