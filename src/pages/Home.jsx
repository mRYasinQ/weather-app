import { useRef } from 'react';

import useIp from '../hooks/useIp';
import { useGetForecastDataQuery } from '../app/services/weatherApi';

import { Header } from '../components/Header';
import { CurrentLocation } from '../features/weather/CurrentLocation';

export default function Home() {
    const searchInputRef = useRef(null);

    const { ip } = useIp();
    const { data: weatherData, isSuccess: weatherDataSuccess } = useGetForecastDataQuery(ip, { skip: !ip });

    function searchHandler(e) {}

    return (
        <>
            <Header searchInputRef={searchInputRef} searchHandler={searchHandler} />
            <main className="container flex flex-col gap-6">
                {weatherDataSuccess && <CurrentLocation weatherData={weatherData} />}
            </main>
        </>
    );
}
