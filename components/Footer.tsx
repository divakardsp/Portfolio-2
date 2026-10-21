"use client";
import { HandshakeIcon } from "@phosphor-icons/react";
import React from "react";

function Footer() {
    return (
        <footer className="flex flex-col text-muted mt-8 sm:mt-10 pb-24 sm:pb-28 lg:pb-8 pt-6 justify-center items-center gap-1 text-xs sm:text-sm">
            <div className="flex justify-center items-center leading-5 text-center">
                That&apos;s all from my side. 
            </div>
            <div className="text-muted/70 text-center">
                © 2026 • Built from scratch.
            </div>
        </footer>
    );
}

export default Footer;
