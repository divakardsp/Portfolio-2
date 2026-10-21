"use client";
import {
    BriefcaseIcon,
    CircleHalfTiltIcon,
    CodeIcon,
    FolderSimpleIcon,
    UserIcon,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";

function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();

    const isDark = resolvedTheme === "dark";
    return (
        <>
            {/* Desktop Navigation */}
            <nav className="m-4 lg:m-8 sticky top-4 z-50 opacity-90 hidden lg:block">
                <div className="w-xl m-auto bg-surface border border-1 border-border border-dashed rounded-4xl transition-colors duration-100">
                    <ul className="flex flex-1 justify-between items-center px-5 py-3">
                        <li>
                            <a
                                href="#skills"
                                className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg font-light tracking-tight"
                            >
                                Skills & Tools
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="list-none cursor-pointer hover:text-foreground transition-colors duration-[100ms] ease-in text-lg tracking-tight font-light"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <button
                                className="h-6 w-6 rounded-full cursor-pointer hover:scale-110 flex justify-center items-center transition-transform duration-[200ms] ease-in"
                                onClick={() =>
                                    setTheme(isDark ? "light" : "dark")
                                }
                                aria-label="Toggle Theme"
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

            {/* Mobile Floating Bottom Bar */}
            <div className="lg:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="pointer-events-auto flex items-center justify-between gap-1 px-3 py-2 bg-surface/90 backdrop-blur-md border border-dashed border-border rounded-full shadow-lg transition-all duration-300 max-w-sm w-full mx-auto">
                    <a
                        href="#skills"
                        className="flex flex-1 flex-col items-center justify-center py-1 px-1 rounded-full text-muted hover:text-foreground active:scale-95 transition-all text-[11px] font-light"
                    >
                        <CodeIcon size={18} />
                        <span className="mt-0.5 leading-none">Skills</span>
                    </a>
                    <a
                        href="#about"
                        className="flex flex-1 flex-col items-center justify-center py-1 px-1 rounded-full text-muted hover:text-foreground active:scale-95 transition-all text-[11px] font-light"
                    >
                        <UserIcon size={18} />
                        <span className="mt-0.5 leading-none">About</span>
                    </a>
                    <a
                        href="#projects"
                        className="flex flex-1 flex-col items-center justify-center py-1 px-1 rounded-full text-muted hover:text-foreground active:scale-95 transition-all text-[11px] font-light"
                    >
                        <FolderSimpleIcon size={18} />
                        <span className="mt-0.5 leading-none">Projects</span>
                    </a>
                    <a
                        href="#experience"
                        className="flex flex-1 flex-col items-center justify-center py-1 px-1 rounded-full text-muted hover:text-foreground active:scale-95 transition-all text-[11px] font-light"
                    >
                        <BriefcaseIcon size={18} />
                        <span className="mt-0.5 leading-none">Timeline</span>
                    </a>
                    <div className="h-4 w-[1px] bg-border mx-0.5" />
                    <button
                        className="p-2 rounded-full hover:bg-main/50 active:scale-90 flex justify-center items-center transition-all cursor-pointer text-foreground"
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        aria-label="Toggle Theme"
                    >
                        <CircleHalfTiltIcon size={20} className="rotate-[-45deg]" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
