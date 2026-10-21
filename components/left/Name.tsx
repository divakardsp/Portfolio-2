import React from "react";

function Name() {
    return (
        <>
            <div className="mx-auto w-full max-w-full px-2 sm:px-4 lg:p-3 my-2 sm:my-4 lg:m-8 flex flex-col items-start">
                <div className="flex flex-col w-fit gap-1">
                    <h1 className="pl-2 sm:pl-4 lg:pl-8 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-foreground transition-colors duration-[100ms]">
                        Divakar Singh Purva
                    </h1>

                    {/* self-end now aligns this to the right side of the "w-fit" box (your name), instead of the whole screen */}
                    <h3 className="self-end pr-2 sm:pr-4 mt-1 text-lg sm:text-xl lg:text-[22px] font-light tracking-normal text-muted">
                        ~ Software Engineer
                    </h3>
                </div>

                <div
                    className="inline-flex self-start items-center justify-center gap-2 
                    ml-2 sm:ml-4 lg:ml-8 mt-4 sm:mt-6 px-3 py-1.5 
                    rounded-full border border-dashed border-border bg-surface 
                    text-xs sm:text-sm font-extralight text-foreground 
                    transition-colors duration-100 shadow-sm
    "
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-700"></span>
                    </span>
                    Available for new opportunities
                </div>
            </div>
        </>
    );
}

export default Name;
