"use client";
import React, { useEffect, useState } from "react";
import { CircleHalfTiltIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isDark = resolvedTheme === "dark";
    return (
        <>
            <nav className="m-4 lg:m-8 sticky top-4 z-50 opacity-90 flex justify-end lg:block">
                <div className=" hidden lg:block w-xl m-auto bg-surface border border-1 border-border border-dashed rounded-4xl transition-colors duration-100">
                    <ul className="flex flex-1 justify-between items-center px-5 py-3">
                        <li>
                            <a className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg font-light tracking-tight  ">
                                Skills & Tools
                            </a>
                        </li>
                        <li>
                            <a className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light ">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light ">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light ">
                                Projects
                            </a>
                        </li>
                        <li>
                            <button
                                className="h-6 w-6 rounded-full cursor-pointer hover:scale-110 flex justify-center items-center transition-transform duration-[200ms] ease-in"
                                onClick={() =>
                                    setTheme(isDark ? "light" : "dark")
                                }
                            >
                                <CircleHalfTiltIcon
                                    size={32}
                                    className="rotate-[-45deg]"
                                />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
