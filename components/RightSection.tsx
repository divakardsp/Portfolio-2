import React from "react";
import Navbar from "./right/Navbar";
import SkillsTools from "./right/SkillsTools";

function RightSection() {
    return (
        <>
            <section className="min-h-screen w-3/5 bg-main transition-colors duration-[700ms] bg-main text-muted">
                <div className="p-4">
                    <Navbar />
                    <SkillsTools/>
                </div>
            </section>
        </>
    );
}

export default RightSection;
