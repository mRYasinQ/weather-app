import { useGetForecastDataQuery } from '../../app/services/weatherApi';

import { DisplayCurrent } from './DisplayCurrent';

export const CurrentLocation = ({ ip }) => {
    const { data, error, isSuccess } = useGetForecastDataQuery(ip);

    return <>{!error && isSuccess && <DisplayCurrent weatherData={data} />}</>;
};
