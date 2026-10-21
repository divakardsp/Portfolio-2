"use client";
import React from "react";
import { CircleHalfTiltIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

function Initial() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    return (
        <>
            <div className="mx-2 sm:mx-4 lg:m-8 my-2 sm:my-3 flex justify-between items-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 lg:h-15 lg:w-15 p-2 text-xl sm:text-2xl font-medium text-foreground border border-dashed border-border rounded-full flex justify-center items-center transition-all duration-200">
                    DP
                </div>

                <button
                    className="lg:hidden h-10 w-10 rounded-full border border-dashed border-border bg-surface cursor-pointer hover:scale-110 active:scale-90 flex justify-center items-center transition-all duration-200 shadow-sm"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label="Toggle Theme"
                >
                    <CircleHalfTiltIcon
                        size={22}
                        className="rotate-[-45deg] text-foreground transition-transform duration-300"
                    />
                </button>
            </div>
        </>
    );
}

export default Initial;
