"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {showIntro ? (
                    <motion.div
                        key="intro"
                        className="fixed inset-0 flex items-center justify-center bg-main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <DotLottieReact
                            src="/Hello.lottie"
                            autoplay
                            loop={false}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        className="flex flex-col lg:flex-row min-h-screen"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <LeftSection />
                        <RightSection />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* {!showIntro && (
                <div className="flex flex-col lg:flex-row min-h-screen">
                    <LeftSection />
                    <RightSection />
                </div>
            )} */}
        </>
    );
}
