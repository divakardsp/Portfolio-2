import React from "react";

function LeftSection() {
    return (
        <>
            <section className="min-h-screen w-2/5 bg-sidebar text-muted relative overflow-hidden transition-colors duration-[700ms]">
                {/* Noise overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        opacity: 0.2,
                        backgroundImage: `url("/Noise.jpg")`,
                        backgroundRepeat: "repeat",
                    }}
                />

                {/* Sample text to preview against the matte bg */}
                <div className="relative z-10  h-full items-center justify-center p-8">
                   
                </div>
            </section>
        </>
    );
}

export default LeftSection;
