import React from "react";
import Image from "next/image";

function Photo() {
    return (
        <div className="my-4 sm:my-6 lg:m-8 flex justify-center">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full bg-surface border border-dashed transition-colors duration-100">
                <div
                    className="absolute inset-0 rounded-full pointer-events-none opacity-10"
                    style={{
                        backgroundImage: "url('/Noise.jpg')",
                        backgroundRepeat: "repeat",
                    }}
                />
                <div className="absolute right-6 sm:right-8 lg:right-10 h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-full">
                    <Image
                        src="/Divakar.jpeg"
                        alt="Divakar Singh Purva"
                        width={256}
                        height={256}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default Photo;
