import React from "react";

const workHistory = [
    {
        company: "ChaiCode Cohort 26",
        role: "Student",
        date: "Dec 2025 - present",
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
        <div className="mx-8 my-8 m-auto p-3 ">
            <h1 className="mb-5 text-3xl font-light text-foreground">
                Timeline
            </h1>

            <div className="relative  px-5 py-6  text-light mx-auto px-4">
                {/* The continuous vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-foreground -translate-x-1/2 z-0"></div>
                {workHistory.map((job, index) => {
                    // Logic to determine sides and active state
                    const isEven = index % 2 === 0;
                    const isActive = index === 0;

                    return (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_auto_1fr] gap-5 items-center mb-8 relative z-10 "
                        >
                            {/* Left Column */}
                            <div
                                className={`text-right ${isEven ? "invisible" : "visible"}`}
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

                            {/* Center Column (The Dot) */}
                            <div className="flex justify-center items-center px-2 ">
                                <div
                                    className={`w-14 h-14 rounded-full flex justify-center items-center shadow-sm ${
                                        isActive
                                            ? "bg-[#444444]"
                                            : "bg-gray-300 bg-opacity-60"
                                    }`}
                                >
                                    <div
                                        className={`w-3.5 h-3.5 rounded-full ${
                                            isActive
                                                ? "bg-yellow-400"
                                                : "bg-white"
                                        }`}
                                    ></div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div
                                className={`text-left ${isEven ? "visible" : "invisible"}`}
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
