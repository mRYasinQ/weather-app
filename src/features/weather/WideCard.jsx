import clsx from 'clsx';

export const WideCard = ({ label, leftData, rightData, hoverStyle = false }) => {
    return (
        <div
            className={clsx(
                'flex h-full w-full flex-col justify-between gap-2 rounded-3xl border border-neutral-500/40 bg-white/3 p-6',
                hoverStyle &&
                    'duration-300 hover:border-neutral-300/40 hover:bg-white/10 hover:shadow-md hover:shadow-neutral-300/20 hover:duration-300',
            )}
        >
            <h4 className="text-md font-light text-orange-400/70">{label}</h4>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex gap-2">
                    <div className="flex h-full items-start">
                        <div className="rounded-full border border-neutral-500 bg-white/5 p-1.5 text-neutral-300">
                            {leftData.icon}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-md font-normal whitespace-nowrap text-neutral-500">{leftData.label}</span>
                        <span className="text-4xl font-semibold text-neutral-300">{leftData.value}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex h-full items-start">
                        <div className="rounded-full border border-neutral-500 bg-white/5 p-1.5 text-neutral-300">
                            {rightData.icon}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-md font-normal whitespace-nowrap text-neutral-500">
                            {rightData.label}
                        </span>
                        <span className="text-4xl font-semibold text-neutral-300">{rightData.value}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
