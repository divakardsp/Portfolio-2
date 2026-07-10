import Image from "next/image";

function SkillsTools() {
    const skills = [
        { name: "JavaScript", logo: "/Javascript.svg" },
        { name: "TypeScript", logo: "/Typescript.svg" },
        { name: "React", logo: "/React.svg" },
        { name: "Next.js", logo: "/Next.svg" },
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

    return (
        <div className="mt-15 mx-8 m-auto p-3 flex flex-col gap-5">
            <div className="rounded-3xl border border-dashed border-border bg-surface/50 p-6">
                <h1 className="text-3xl font-light text-foreground">Skills</h1>
                <div className="mt-6 flex flex-wrap gap-3">
                    {skills.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-3 rounded-2xl border border-dashed border-border bg-main px-4 py-3 text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                        >
                            <Image
                                src={item.logo}
                                alt={item.name}
                                width={28}
                                height={28}
                                className="h-7 w-7 object-contain"
                            />
                            <span className="text-sm font-medium">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsTools;
