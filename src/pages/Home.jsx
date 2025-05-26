import { useSelector } from 'react-redux';

import useIp from '../hooks/useIp';

import { useGetForecastDataQuery } from '../app/services/weatherApi';

import { Header } from '../components/Header';
import { CurrentLocation } from '../features/weather/CurrentLocation';
import { DisplayWeather } from '../features/weather/DisplayWeather';

export default function Home() {
    const { searched, result: weatherData } = useSelector((state) => state.search);

    const { ip } = useIp();

    const { data: currentWeatherData, isSuccess: currentWeatherDataSuccess } = useGetForecastDataQuery(ip, {
        skip: !ip,
    });

    return (
        <>
            <Header />
            <main className="container flex flex-col gap-6">
                {!searched && currentWeatherDataSuccess && <CurrentLocation weatherData={currentWeatherData} />}
                {searched && weatherData && <DisplayWeather weatherData={weatherData} />}
            </main>
        </>
    );
}
