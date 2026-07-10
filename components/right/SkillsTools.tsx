"use client";

import { useTheme } from "next-themes";

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
    ];


    const dark = ["Next.js", "Express", "Drizzle", "Kafka", "Socket.IO"];

    const { theme, resolvedTheme } = useTheme();
    const isDarkMode = resolvedTheme === "dark";

    return (
        <div className="mt-15 mx-8 m-auto p-3">
            <div className="mb-8" >
                <h1 className="text-3xl font-light text-foreground">Skills & Tools</h1>
                <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((item) => {
                        const source =
                            dark.includes(item.name) && isDarkMode
                                ? `/${item.name}-Light.svg`
                                : item.logo;

                        return (
                            <div
                                key={item.name}
                                className="flex items-center gap-2 rounded-2xl border border-dashed border-border bg-surface px-4 py-3 text-foreground "
                            >
                                <img
                                    src={source}
                                    alt={`${item.name} logo`}
                                    className="w-6 h-6 object-contain"
                                />
                                <span className="text-sm font-light">
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
