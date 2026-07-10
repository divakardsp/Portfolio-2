import React from "react";

function About() {
    return (
        <div className="mx-8 mb-8 m-auto p-3">
            <h1 className="mb-3 text-3xl font-light text-foreground">
                About Me
            </h1>
            <p className="text-lg tracking-tight leading-7">
                Hello! <span className="text-foreground">Divakar</span> here. 👋
            </p>
            <br />
            <p className="text-lg tracking-tight leading-7">
                I love building products that solve real problems—from clean and
                simple user interfaces to the backend systems that make
                everything work.
            </p>
            <br />
            <p className="text-lg tracking-tight leading-7">
                Even though I enjoy working on the backend the most, I like
                building the whole product. For me, a good product isn&apos;t
                just fast or scalable. It should be easy to use, reliable, and
                something people actually enjoy using.
            </p>
            <br />
            <p className="text-lg tracking-tight leading-7">
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
    );
}

export default About;
