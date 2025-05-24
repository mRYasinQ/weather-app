export const IconButton = ({ onClick, children }) => {
    return (
        <button
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-neutral-500/40 bg-neutral-700 p-4 text-neutral-500 transition-colors duration-300 hover:border-neutral-300/40 hover:text-neutral-300 hover:duration-300"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
