"use client";
import React from "react";
import { motion } from "motion/react";

const workHistory = [
    {
        company: "ChaiCode Cohort 26",
        role: "Student",
        date: "Dec 2025 - July 2026",
    },
    {
        company: "EaseCommerce",
        role: "Full Stack Developer Intern (On-Site)",
        date: "Jun 2025 - Aug 2025",
    },
    {
        company: "Bennett University",
        role: "Student (Btech in Computer Science)",
        date: "Aug 2023 - present",
    },
];

export default function Experience() {
    return (
        <div id="experience" className="scroll-mt-16 sm:scroll-mt-20 mx-2 sm:mx-4 lg:mx-8 my-8 sm:my-10 p-2 sm:p-3">
            <h2 className="mb-6 text-2xl sm:text-3xl font-light text-foreground">
                Timeline
            </h2>

            <div className="relative text-light mx-auto py-4 sm:py-6">
                {/* The continuous dashed vertical line */}
                <div className="absolute left-5 sm:left-6 lg:left-1/2 top-0 bottom-0 w-[1px] bg-border border-l border-dashed border-border -translate-x-1/2 z-0" />
                {workHistory.map((job, index) => {
                    const isEven = index % 2 === 0;
                    const isActive = index === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] gap-3.5 sm:gap-5 items-center mb-6 sm:mb-8 relative z-10"
                        >
                            {/* Left Column (Desktop) */}
                            <div
                                className={`hidden lg:block text-right ${isEven ? "invisible" : "visible"}`}
                            >
                                <h3 className="text-foreground text-lg">
                                    {job.company}
                                </h3>
                                <p className="text-muted text-sm md:text-base">
                                    {job.role}
                                </p>
                                <span className="text-emerald-600 text-sm font-medium">
                                    {job.date}
                                </span>
                            </div>

                            {/* Center Column (The Node Dot) */}
                            <div className="flex justify-center items-center px-0 lg:px-2 z-10">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex justify-center items-center shadow-xs bg-surface border border-dashed border-border transition-all duration-300"
                                >
                                    <div
                                        className={`rounded-full transition-all ${
                                            isActive
                                                ? "w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse"
                                                : "w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-muted/50"
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Right Column (Mobile & Desktop) */}
                            <div
                                className={`text-left ${!isEven ? "lg:invisible" : "visible"} bg-surface/60 sm:bg-transparent border border-dashed border-border/70 sm:border-0 rounded-xl p-3 sm:p-0 transition-all`}
                            >
                                <h3 className="text-foreground text-base sm:text-lg font-medium lg:font-normal">
                                    {job.company}
                                </h3>
                                <p className="text-muted text-xs sm:text-sm md:text-base mt-0.5">
                                    {job.role}
                                </p>
                                <span className="inline-block text-emerald-600 text-xs sm:text-sm font-medium mt-1">
                                    {job.date}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
