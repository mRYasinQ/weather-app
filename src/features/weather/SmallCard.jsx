import clsx from 'clsx';

export const SmallCard = ({ label, icon, value, valueLabel, hoverStyle = false }) => {
    return (
        <div
            className={clsx(
                'flex h-fit w-full flex-col justify-between gap-2 rounded-3xl border border-neutral-500/40 bg-white/3 p-6',
                hoverStyle &&
                    'duration-300 hover:border-neutral-300/40 hover:bg-white/10 hover:shadow-md hover:shadow-neutral-300/20 hover:duration-300',
            )}
        >
            <h4 className="text-md font-light text-orange-400/70">{label}</h4>
            <div className="flex items-end gap-1">
                <div className="flex h-full items-center">
                    <div className="rounded-full border border-neutral-500 bg-white/5 p-1.5 text-neutral-300">
                        {icon}
                    </div>
                </div>
                <span className="text-4xl font-semibold text-neutral-300">{value}</span>
                <span className="text-lg font-normal whitespace-nowrap text-neutral-500">{valueLabel}</span>
            </div>
        </div>
    );
};
