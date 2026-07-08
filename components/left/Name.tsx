import React from "react";

function Name() {
    return (
        <>
            <div className="m-8 inline-block  p-3 flex flex-col ">
                <h1 className=" relative pl-8 text-5xl font-medium tracking-tighter text-foreground">
                    Divakar Singh Purva
                </h1>

                <h3 className="absolute right-1  pr-4 text-[22px] font-light tracking-normal text-muted">
                    ~ Software Engineer
                </h3>

                <div
                    className="ml-8 mt-4
        inline-flex items-center justify-center gap-2 mt-4 px-3 py-1.5 
        rounded-full border border-dashed border-border bg-surface 
        text-sm font-extralight text-foreground
    "
                >
                    {/* Blinking Dot */}
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Available for new opportunities
                </div>
            </div>
        </>
    );
}

export default Name;
