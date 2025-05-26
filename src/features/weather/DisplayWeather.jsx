import { WideCard } from './WideCard';
import { SmallCard } from './SmallCard';

import { ArrowUpIcon } from '../../icons/ArrowUpIcon';
import { ArrowBottomIcon } from '../../icons/ArrowBottomIcon';
import { WindHighIcon } from '../../icons/WindHighIcon';
import { HumidityIcon } from '../../icons/HumidityIcon';
import { CloudWindIcon } from '../../icons/CloudWindIcon';

export const DisplayWeather = ({ weatherData: { location, current, forecast } }) => {
    const { name, country } = location;
    const {
        temp_c,
        feelslike_c,
        wind_kph,
        humidity,
        pressure_mb,
        gust_mph,
        condition: { text, icon },
    } = current;
    const {
        forecastday: [
            {
                day: { mintemp_c, maxtemp_c, daily_chance_of_rain },
                astro: { sunrise, sunset, moonrise, moonset },
            },
        ],
    } = forecast;

    return (
        <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-0">
                <div className="md:basis-1/2">
                    <div className="flex flex-col gap-2">
                        <h5 className="text-sm font-normal text-neutral-500">Location:</h5>
                        <h3 className="text-5xl text-neutral-300">
                            {name}, {country}
                        </h3>
                    </div>
                </div>
                <div className="flex justify-end md:basis-1/2">
                    <div className="flex items-center">
                        <div className="size-40">
                            <img className="h-full w-full" src={icon} alt={text} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-6xl font-semibold text-neutral-300">{temp_c}°</span>
                            <p className="text-sm font-medium text-neutral-500">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                    <WideCard
                        label="Sunrise/Sunset"
                        leftData={{
                            icon: <ArrowUpIcon />,
                            value: sunrise.split(' ')[0],
                            label: sunrise.split(' ')[1],
                        }}
                        rightData={{
                            icon: <ArrowBottomIcon />,
                            value: sunset.split(' ')[0],
                            label: sunset.split(' ')[1],
                        }}
                        hoverStyle={true}
                    />
                    <WideCard
                        label={`Feels Like ${feelslike_c}°`}
                        leftData={{
                            icon: <ArrowBottomIcon />,
                            label: 'Min',
                            value: `${mintemp_c}°`,
                        }}
                        rightData={{
                            icon: <ArrowUpIcon />,
                            label: 'Max',
                            value: `${maxtemp_c}°`,
                        }}
                        hoverStyle={true}
                    />
                    <WideCard
                        label="Moonrise/Moonset"
                        leftData={{
                            icon: <ArrowUpIcon />,
                            value: moonrise.split(' ')[0],
                            label: moonrise.split(' ')[1],
                        }}
                        rightData={{
                            icon: <ArrowBottomIcon />,
                            value: moonset.split(' ')[0],
                            label: moonset.split(' ')[1],
                        }}
                        hoverStyle={true}
                    />
                </div>
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                    <SmallCard
                        label="Wind Speed"
                        icon={<WindHighIcon />}
                        value={wind_kph}
                        valueLabel="km/h"
                        hoverStyle={true}
                    />
                    <SmallCard
                        label="Humidity"
                        icon={<HumidityIcon />}
                        value={humidity}
                        valueLabel="%"
                        hoverStyle={true}
                    />
                    <SmallCard
                        label="Pressure"
                        icon={<WindHighIcon />}
                        value={pressure_mb}
                        valueLabel="mb"
                        hoverStyle={true}
                    />
                    <SmallCard
                        label="Gusts"
                        icon={<CloudWindIcon />}
                        value={gust_mph}
                        valueLabel="mph"
                        hoverStyle={true}
                    />
                    <SmallCard
                        label="Chance of Rain"
                        icon={<HumidityIcon />}
                        value={daily_chance_of_rain}
                        valueLabel="%"
                        hoverStyle={true}
                    />
                </div>
            </div>
        </div>
    );
};
