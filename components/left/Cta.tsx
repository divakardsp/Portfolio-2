"use client";
import React from "react";
import { PaperPlaneTiltIcon, ReadCvLogoIcon } from "@phosphor-icons/react";

function Cta() {
    return (
        <div className="mx-2 sm:mx-4 lg:mx-8 mt-4 sm:mt-6 mb-2">
            <div className="flex items-center justify-center gap-3 sm:gap-6 w-full">
                <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        group
                        flex-1 sm:flex-initial
                        flex items-center justify-center gap-2
                        rounded-xl
                        border border-dashed border-border
                        bg-cta
                        px-3.5 py-2.5 sm:px-5 sm:py-3
                        text-sm sm:text-base font-medium
                        text-foreground
                        transition-all duration-200
                        hover:scale-[1.02]
                        active:scale-95
                        cursor-pointer
                        relative
                        shadow-sm
                    "
                >
                    {/* Noise Overlay */}
                    <div
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-10"
                        style={{
                            backgroundImage: "url('/Noise.jpg')",
                            backgroundRepeat: "repeat",
                        }}
                    />
                    <ReadCvLogoIcon
                        size={22}
                        className="
                            transition-transform
                            duration-300
                            rotate-[-11deg]
                            group-hover:rotate-3
                        "
                    />
                    <span>View Resume</span>
                </a>
                <a
                    href="mailto:divakarpurva04@gmail.com"
                    className="
                        group
                        flex-1 sm:flex-initial
                        flex items-center justify-center gap-2
                        rounded-xl
                        border border-dashed border-border
                        bg-cta
                        px-3.5 py-2.5 sm:px-5 sm:py-3
                        text-sm sm:text-base font-medium
                        text-foreground
                        transition-all duration-200
                        hover:scale-[1.02]
                        active:scale-95
                        cursor-pointer
                        relative
                        shadow-sm
                    "
                >
                    {/* Noise Overlay */}
                    <div
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-10"
                        style={{
                            backgroundImage: "url('/Noise.jpg')",
                            backgroundRepeat: "repeat",
                        }}
                    />

                    <PaperPlaneTiltIcon
                        size={19}
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                        "
                    />
                    <span>Get in Touch</span>
                </a>
            </div>
        </div>
    );
}

export default Cta;
