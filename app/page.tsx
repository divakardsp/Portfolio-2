"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (showIntro) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-main">
                <DotLottieReact
                    src="/Hello.lottie"
                    autoplay
                    loop={false}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <LeftSection />
            <RightSection />
        </div>
    );
}
