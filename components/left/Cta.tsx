"use client";
import React from "react";
import { PaperPlaneTiltIcon, ReadCvLogoIcon } from "@phosphor-icons/react";

function Cta() {
    return (
        <div className="m-8 border border-1 ">
            <div className="p-8 flex flex-1 items-center justify-around">
                <button
                    className="
    group
    flex items-center gap-2
    rounded-xl
    border border-dashed bordercta
    bg-cta
    px-5 py-3
    transition-all duration-300
    hover:scale-[1.02]
    active:translate-y-0
    active:shadow-none
    cursor-pointer
    relative
  "
                >
                    <div
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-10"
                        style={{
                            backgroundImage: "url('/Noise.jpg')",
                            backgroundRepeat: "repeat",
                        }}
                    />
                    <ReadCvLogoIcon
                        size={24}
                        className="
      transition-transform
      duration-300
      rotate-[-11deg]
      group-hover:rotate-3
    "
                    />

                    <span>View Resume / CV</span>
                </button>
                <button
                    className="
    group
    flex items-center gap-2
    rounded-xl
    border border-dashed bordercta
    bg-cta
    px-5 py-3
    transition-all duration-300
    hover:scale-[1.02]
    active:translate-y-0
    active:shadow-none
    cursor-pointer
    relative
  "
                >
                    <div
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-10"
                        style={{
                            backgroundImage: "url('/Noise.jpg')",
                            backgroundRepeat: "repeat",
                        }}
                    />

                    <PaperPlaneTiltIcon
                        size={20}
                        className="
      transition-transform
      duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
                    />

                    <span>Get in Touch</span>
                </button>
            </div>
        </div>
    );
}

export default Cta;
