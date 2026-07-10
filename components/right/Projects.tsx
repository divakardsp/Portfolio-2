"use client";
import { LinkIcon } from "@phosphor-icons/react";
import React from "react";

function Projects() {
    const projects = [
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
            name: "One Million Checkboxes",
            description:
                "A collaborative real-time checkbox application where every connected user sees state changes instantly.",
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
        <div className="mx-8 m-auto p-3">
            <h1 className="mb-4 text-3xl font-light text-foreground">
                Projects
            </h1>

            {projects.map((project) => (
                <div
                    key={project.repo}
                    className="bg-surface border border-border border-dashed px-5 py-6 rounded-2xl text-light mb-4"
                >
                    <div className="flex gap-3 items-start">
                        <h1 className="text-xl font-extralight text-foreground mb-1">
                            {project.name}
                        </h1>
                        <a href={project.repo} target="_blank">
                            <LinkIcon
                                size={25}
                                className="text-muted cursor-pointer hover:text-foreground transition-colors duration-150 ease-in"
                            />
                        </a>
                    </div>

                    <p className="text-lg tracking-tight leading-7">
                        {project.description}
                    </p>
                    <br />

                    {project.highlights.map((highlight) => (
                        <p key={highlight.id} className="font-light tracking-normal leading-7">{`- ${highlight.value}`}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Projects;
