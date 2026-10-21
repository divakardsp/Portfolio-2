"use client";
import React from "react";
import { motion } from "motion/react";

function About() {
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-16 sm:scroll-mt-20 mx-2 sm:mx-4 lg:mx-8 mb-8 sm:mb-10 m-auto p-2 sm:p-3"
        >
            <h2 className="mb-4 text-2xl sm:text-3xl font-light text-foreground">
                About Me
            </h2>
            <div className="bg-surface/40 sm:bg-transparent border border-dashed border-border/70 sm:border-0 rounded-2xl p-4 sm:p-0 space-y-4 text-base sm:text-lg tracking-tight leading-relaxed sm:leading-7 text-muted">
                <p>
                    Hello! <span className="text-foreground font-medium">Divakar</span> here. 👋
                </p>
                <p>
                    I love building products that solve real problems—from clean and
                    simple user interfaces to the backend systems that make
                    everything work.
                </p>
                <p>
                    Even though I enjoy working on the backend the most, I like
                    building the whole product. For me, a good product isn&apos;t
                    just fast or scalable. It should be easy to use, reliable, and
                    something people actually enjoy using.
                </p>
                <p>
                    These days, I&apos;m spending a lot of time exploring{" "}
                    <span className="text-foreground">AI applications</span>,{" "}
                    <span className="text-foreground">authentication systems</span>,
                    and <span className="text-foreground">real-time architectures</span>. I also enjoy digging into
                    performance issues, understanding how things work behind the
                    scenes, and making them <span className="text-foreground">faster, cleaner, and more secure. </span>
                    Whether it&apos;s a database query, a protocol, or a small
                    security bug, I like figuring out what&apos;s happening and how
                    to make it better.
                </p>
            </div>
        </motion.div>
    );
}

export default About;
