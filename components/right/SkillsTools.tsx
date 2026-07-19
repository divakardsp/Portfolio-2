"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

function SkillsTools() {
    const skills = [
        { name: "JavaScript", logo: "/Javascript.svg" },
        { name: "TypeScript", logo: "/Typescript.svg" },
        { name: "React", logo: "/React.svg" },
        { name: "Next.js", logo: "/Next.js.svg" },
        { name: "Tailwind CSS", logo: "/Tailwind.svg" },
        { name: "Node.js", logo: "/Node.svg" },
        { name: "Express", logo: "/Express.svg" },
        { name: "NestJS", logo: "/Nest.svg" },
        { name: "MongoDB", logo: "/Mongo.svg" },
        { name: "PostgreSQL", logo: "/Postgres.svg" },
        { name: "Redis", logo: "/Redis.svg" },
        { name: "Prisma", logo: "/Prisma.svg" },
        { name: "Drizzle", logo: "/Drizzle.svg" },
        { name: "Kafka", logo: "/Kafka.svg" },
        { name: "Socket.IO", logo: "/Socketio.svg" },
        { name: "Docker", logo: "/Docker.svg" },
        { name: "AWS", logo: "/Aws.svg" },
        { name: "Git", logo: "/Git.svg" },
        { name: "Linux", logo: "/Linux.svg" },
        { name: "Github", logo: "/Github.svg" },
        { name: "Gitlab", logo: "/Gitlab.svg" },
        { name: "Postman", logo: "/Postman.svg" },
        { name: "Requestly", logo: "/Requestly.svg" },
    ];

    const dark = [
        "Next.js",
        "Express",
        "Drizzle",
        "Kafka",
        "Socket.IO",
        "Linux",
    ];

    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        console.log("Not mounted yet");
        return null;
    }

    const isDarkMode = resolvedTheme === "dark";

    return (
        <div
            id="skills"
            className="mt-12 lg:mt-15 mx-3 lg:mx-8 m-auto p-2 lg:p-3"
        >
            <div className="mb-8">
                <h1 className="text-3xl font-light text-foreground">
                    Skills & Tools
                </h1>
                <div className="mt-5 flex flex-wrap gap-1.5 lg:gap-2">
                    {skills.map((item) => {
                        const source =
                            dark.includes(item.name) && isDarkMode
                                ? `/${item.name}-Light.svg`
                                : item.logo;
                        console.log(`${item.name} : ${source}`);
                        return (
                            <div
                                key={item.name}
                                className="flex items-center gap-1.5 lg:gap-2 rounded-xl lg:rounded-2xl border border-dashed border-border bg-surface px-3 py-2 lg:px-4 lg:py-3 text-foreground"
                            >
                                <img
                                    src={source}
                                    alt={`${item.name} logo`}
                                    className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
                                />
                                <span className="text-xs lg:text-sm font-light">
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsTools;
