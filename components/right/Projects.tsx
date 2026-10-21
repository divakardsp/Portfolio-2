"use client";
import {
    ArrowSquareOutIcon,
    GithubLogoIcon,
} from "@phosphor-icons/react";
import React from "react";
import { motion } from "motion/react";

function Projects() {
    const projects = [
        {
            name: "Arbell",
            description:
                "An agentic commerce platform built for the Razorpay Buildathon that enables conversational product discovery, inventory management, and secure AI-driven payments.",
            highlights: [
                {
                    id: 1,
                    value: "Built an agentic shopping experience using MCP and A2UI, enabling AI agents to discover, compare, and recommend products through natural language.",
                },
                {
                    id: 2,
                    value: "Integrated Razorpay Standard Checkout and UPI Reserve Pay with payment authorization, pre-debit notifications, webhooks, and automated order creation.",
                },
                {
                    id: 3,
                    value: "Designed a scalable backend with Next.js, TypeScript, Drizzle ORM, PostgreSQL, and event logging for agent observability, inventory management, and order processing.",
                },
            ],
            live: "https://arbell-one.vercel.app/",
            repo: "https://github.com/divakardsp/arbell",
        },
        {
            name: "CodeDog",
            description:
                "An AI-powered GitHub application that reviews pull requests, manages repositories, and automates developer workflows.",
            highlights: [
                {
                    id: 1,
                    value: "Built asynchronous workflows using Inngest for GitHub webhooks and background processing.",
                },
                {
                    id: 2,
                    value: "Integrated AI-powered code reviews with OpenRouter and semantic repository search using Pinecone.",
                },
                {
                    id: 3,
                    value: "Implemented authentication, subscription billing, and a feature-based architecture for scalability.",
                },
            ],
            live: "https://code-dog-nvoq.vercel.app",
            repo: "https://github.com/divakardsp/CodeDog",
        },
        {
            name: "Fortify",
            description:
                "A production-ready OAuth2 and OpenID Connect authorization server for secure authentication and third-party integrations.",
            highlights: [
                {
                    id: 1,
                    value: "Implemented the complete OAuth2 Authorization Code Flow with OpenID Connect support.",
                },
                {
                    id: 2,
                    value: "Designed secure authentication using RSA-signed JWTs, JWKS, email verification, and password reset flows.",
                },
                {
                    id: 3,
                    value: "Built a modular backend with Express, Drizzle ORM, PostgreSQL, and reusable validation middleware.",
                },
            ],
            live: "https://fortify-3.onrender.com",
            repo: "https://github.com/divakardsp/Fortify",
        },
        {
            name: "TraceKaf",
            description:
                "A real-time location tracking application that securely streams live user locations on an interactive map.",
            highlights: [
                {
                    id: 1,
                    value: "Combined Socket.IO and Apache Kafka to build scalable real-time location updates.",
                },
                {
                    id: 2,
                    value: "Secured both REST APIs and WebSocket connections using OAuth2 authentication from Fortify.",
                },
                {
                    id: 3,
                    value: "Designed an event-driven architecture with authenticated sockets and message-driven communication.",
                },
            ],
            repo: "https://github.com/divakardsp/TraceKaf",
        },
        {
            name: "OMCB",
            description:
                "A real-time collaborative application inspired by One Million Checkboxes, where every connected user sees checkbox state changes instantly.",
            highlights: [
                {
                    id: 1,
                    value: "Used Redis as a persistent state store with Pub/Sub for real-time synchronization.",
                },
                {
                    id: 2,
                    value: "Built bidirectional communication using Socket.IO for instant updates across clients.",
                },
                {
                    id: 3,
                    value: "Designed a lightweight event-driven backend with efficient shared state management.",
                },
            ],
            repo: "https://github.com/divakardsp/One-Million-Checkboxes",
        },
    ];

    return (
        <div id="projects" className="scroll-mt-16 sm:scroll-mt-20 mx-2 sm:mx-4 lg:mx-8 m-auto p-2 sm:p-3">
            <h2 className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-light text-foreground">
                Projects
            </h2>

            {projects.map((project) => (
                <motion.div
                    key={project.repo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4 }}
                    className="bg-surface border border-border border-dashed p-4 sm:p-5 lg:px-5 lg:py-6 rounded-2xl mb-4 sm:mb-5 transition-all duration-300 shadow-sm"
                >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                            <h3 className="text-lg sm:text-xl font-medium sm:font-extralight text-foreground">
                                {project.name}
                            </h3>

                            <div className="flex items-center gap-1">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.name} repository`}
                                    className="p-1 rounded-md text-muted hover:text-foreground active:scale-90 transition-all cursor-pointer"
                                >
                                    <GithubLogoIcon
                                        size={20}
                                        className="transition-colors duration-150"
                                    />
                                </a>

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} live demo`}
                                        className="p-1 rounded-md text-muted hover:text-foreground active:scale-90 transition-all cursor-pointer"
                                    >
                                        <ArrowSquareOutIcon
                                            size={20}
                                            className="transition-colors duration-150"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>

                        {project.live && (
                            <div className="rounded-full border border-dashed border-emerald-500/80 bg-main px-2.5 py-0.5 flex items-center gap-1.5 shadow-xs">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                                </span>
                                <span className="text-xs font-light tracking-wide text-emerald-600">
                                    LIVE
                                </span>
                            </div>
                        )}
                    </div>

                    <p className="text-sm sm:text-base lg:text-lg tracking-tight leading-relaxed sm:leading-7 text-muted mb-3">
                        {project.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-dashed border-border/60">
                        {project.highlights.map((highlight) => (
                            <div
                                key={highlight.id}
                                className="flex items-start gap-2 text-xs sm:text-sm lg:text-base font-light tracking-normal leading-relaxed text-muted"
                            >
                                <span className="text-emerald-500/80 mt-1 select-none text-[9px]">◆</span>
                                <span>{highlight.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Projects;
