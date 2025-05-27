export const CurrentLocationError = () => {
    return (
        <div className="h-fit w-full rounded-4xl border border-neutral-500/40 bg-gradient-to-t from-rose-600/25 from-45% to-rose-800/10 to-100% px-6 py-5 md:px-12 md:py-10">
            <div className="flex flex-col gap-1">
                <h3 className="text-sm font-light text-neutral-500">Error</h3>
                <p className="flex flex-col text-4xl text-neutral-300">Cannot get current location weather data.</p>
            </div>
        </div>
    );
};
