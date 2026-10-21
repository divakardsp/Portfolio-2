"use client";
import React from "react";
import Link from "next/link";

interface ColorfulSocialButtonProps {
    href: string;
    label: string;
    iconSrc: string;
}

function ColorfulSocialButton({
    href,
    label,
    iconSrc,
}: ColorfulSocialButtonProps) {
    return (
        <div className="relative group inline-block">
            {/* The Tooltip (Desktop hover) */}
            <div
                className="
                hidden sm:block
                absolute -top-10 left-1/2 -translate-x-1/2 
                px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap
                bg-foreground text-main
                opacity-0 group-hover:opacity-100
                transition-all duration-300 ease-out
                pointer-events-none z-50
            "
            >
                {label}
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
            </div>

            {/* The Button Container */}
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                    flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14
                    rounded-full 
                    bg-surface border border-dashed border-border
                    transition-all duration-300 hover:scale-105 active:scale-90 cursor-pointer shadow-sm
                "
            >
                {/* The Standard HTML img Tag for colorful SVGs */}
                <img
                    src={iconSrc}
                    alt={`${label} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
            </Link>
        </div>
    );
}

// How to use it in your layout
export default function SocialLinks() {
    const socialLinks = [
        {
            name: "X",
            logo: "/X.svg",
            link: "https://x.com/DSP__dev",
        },
        {
            name: "LinkedIn",
            logo: "/Linkedin.svg",
            link: "https://www.linkedin.com/in/divakarsinghpurva/",
        },
        {
            name: "Github",
            logo: "/Github.svg",
            link: "https://github.com/divakardsp",
        },
        {
            name: "Hashnode",
            logo: "/Hashnode.svg",
            link: "https://divakar29.hashnode.dev/",
        },
    ];

    return (
        <div className="mx-auto mt-3 sm:mt-4 mb-6 sm:mb-8 w-full">
            <div className="flex justify-center items-center gap-3.5 sm:gap-6">
                {socialLinks.map((social) => {
                    return (
                        <ColorfulSocialButton
                            key={social.link}
                            href={social.link}
                            iconSrc={social.logo}
                            label={social.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}
