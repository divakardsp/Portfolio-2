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
                <button
                    className="lg:hidden p-3 bg-surface border border-dashed border-border rounded-full flex justify-center items-center z-50 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
                </button>
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

            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-main flex flex-col items-center justify-center lg:hidden">
                    <ul className="flex flex-col items-center gap-8 text-2xl">
                        <li>
                            <a
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                Skills & Tools
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="mt-8">
                            <button
                                className="flex items-center gap-3 bg-surface px-6 py-3 rounded-full border border-dashed border-border"
                                onClick={() =>
                                    setTheme(isDark ? "light" : "dark")
                                }
                            >
                                <CircleHalfTiltIcon
                                    size={24}
                                    className="rotate-[-45deg]"
                                />
                                <span>Toggle Theme</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
