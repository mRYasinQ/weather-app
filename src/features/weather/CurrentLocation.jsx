import { WideCard } from './WideCard';
import { SmallCard } from './SmallCard';

import { WindHighIcon } from '../../icons/WindHighIcon';
import { HumidityIcon } from '../../icons/HumidityIcon';
import { ArrowBottomIcon } from '../../icons/ArrowBottomIcon';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';

export const CurrentLocation = ({
    weatherData: {
        location,
        current,
        forecast: { forecastday },
    },
}) => {
    return (
        <div className="h-fit w-full rounded-4xl border border-neutral-500/40 bg-gradient-to-t from-sky-600/25 from-45% to-sky-800/10 to-100% px-6 py-5 md:px-12 md:py-10">
            <div className="flex flex-col gap-1 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-1 py-4 lg:basis-1/3">
                    <h3 className="gap-2 text-sm font-light text-neutral-500">Your current location</h3>
                    <p className="flex flex-col text-4xl text-neutral-300">
                        {location.name},<span>{location.country}</span>
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2 lg:basis-2/3 lg:flex-row">
                    <WideCard
                        label={`Feels Like ${current.feelslike_c}°`}
                        leftData={{
                            icon: <ArrowBottomIcon />,
                            label: 'Min',
                            value: `${forecastday[0].day.mintemp_c}°`,
                        }}
                        rightData={{
                            icon: <ArrowUpIcon />,
                            label: 'Max',
                            value: `${forecastday[0].day.maxtemp_c}°`,
                        }}
                    />
                    <SmallCard label="Wind Speed" icon={<WindHighIcon />} value={current.wind_kph} valueLabel="km/h" />
                    <SmallCard label="Humidity" icon={<HumidityIcon />} value={current.humidity} valueLabel="%" />
                </div>
            </div>
        </div>
    );
};
