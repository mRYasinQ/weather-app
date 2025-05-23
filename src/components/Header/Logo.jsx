import { CloudSunWindRainIcon } from '../../icons/CloudSunWindRainIcon';

export const Logo = () => {
    return (
        <h2 className="mx-auto text-2xl font-semibold text-neutral-200 transition-colors duration-200 hover:text-white hover:duration-200 lg:text-3xl">
            <a href="/" className="flex items-center">
                Wea
                <span className="size-9 lg:size-10">
                    <CloudSunWindRainIcon />
                </span>
                ther
            </a>
        </h2>
    );
};
