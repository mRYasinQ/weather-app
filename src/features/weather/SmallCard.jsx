export const SmallCard = ({ label, icon, value, valueLabel }) => {
    return (
        <div className="flex h-fit w-full flex-col justify-between gap-2 rounded-3xl border border-neutral-500/40 bg-white/3 p-6">
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
