import { useRef } from 'react';

import useIp from '../hooks/useIp';
import { useGetForecastDataQuery, useLazyGetForecastDataQuery } from '../app/services/weatherApi';

import { Header } from '../components/Header';
import { CurrentLocation } from '../features/weather/CurrentLocation';
import { DisplayWeather } from '../features/weather/DisplayWeather';

export default function Home() {
    const searchInputRef = useRef(null);

    const { ip } = useIp();
    const { data: currentWeatherData, isSuccess: currentWeatherDataSuccess } = useGetForecastDataQuery(ip, {
        skip: !ip,
    });
    const [getForecastData, { data: weatherData, isSuccess: weatherDataSuccess }] = useLazyGetForecastDataQuery();

    function searchHandler(e) {
        getForecastData(searchInputRef.current.value.trim());
    }

    return (
        <>
            <Header searchInputRef={searchInputRef} searchHandler={searchHandler} />
            <main className="container flex flex-col gap-6">
                {currentWeatherDataSuccess && <CurrentLocation weatherData={currentWeatherData} />}
                {weatherDataSuccess && <DisplayWeather weatherData={weatherData} />}
            </main>
        </>
    );
}
