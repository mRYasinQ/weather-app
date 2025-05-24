import { ArrowBottomIcon } from '../../icons/ArrowBottomIcon';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';

export const TempCurrentLocation = ({ feelsLike, minTemp, maxTemp }) => {
    return (
        <div className="flex h-full w-full flex-col justify-between gap-2 rounded-3xl border border-neutral-500/40 bg-white/3 p-6">
            <h4 className="text-md font-light text-orange-400/70">Feels Like {feelsLike}°</h4>
            <div className="flex items-center gap-2">
                <div className="flex gap-2">
                    <div className="flex h-full items-start">
                        <div className="rounded-full border border-neutral-500 bg-white/5 p-1.5 text-neutral-300">
                            <ArrowBottomIcon />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-md font-normal whitespace-nowrap text-neutral-500">Min</span>
                        <span className="text-4xl font-semibold text-neutral-300">{minTemp}°</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex h-full items-start">
                        <div className="rounded-full border border-neutral-500 bg-white/5 p-1.5 text-neutral-300">
                            <ArrowUpIcon />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-md font-normal whitespace-nowrap text-neutral-500">Max</span>
                        <span className="text-4xl font-semibold text-neutral-300">{maxTemp}°</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
