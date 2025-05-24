import { TempCurrentLocation } from './TempCurrentLocation';
import { SingleBoxData } from './SingleBoxData';

import { WindHighIcon } from '../../icons/WindHighIcon';
import { HumidityIcon } from '../../icons/HumidityIcon';

export const DisplayCurrent = ({
    weatherData: {
        location,
        current,
        forecast: { forecastday },
    },
}) => {
    return (
        <div className="h-fit w-full rounded-4xl border border-neutral-500/40 bg-gradient-to-t from-sky-600/25 from-45% to-sky-800/10 to-100% px-6 py-5 md:px-12 md:py-10">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="flex flex-col gap-1 py-4 lg:basis-1/3">
                    <h3 className="gap-2 text-sm font-light text-neutral-500">Your current location</h3>
                    <p className="flex flex-col text-4xl text-neutral-300">
                        {location.name},<span>{location.country}</span>
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2 lg:basis-2/3 lg:flex-row">
                    <TempCurrentLocation
                        feelsLike={current.feelslike_c}
                        minTemp={forecastday[0].day.mintemp_c}
                        maxTemp={forecastday[0].day.maxtemp_c}
                    />
                    <SingleBoxData
                        label="Wind Speed"
                        icon={<WindHighIcon />}
                        data={current.wind_kph}
                        dataLabel="km/h"
                    />
                    <SingleBoxData label="Humidity" icon={<HumidityIcon />} data={current.humidity} dataLabel="%" />
                </div>
            </div>
        </div>
    );
};
