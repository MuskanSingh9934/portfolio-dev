"use client";

import { motion } from "framer-motion";
import { Tooltip } from "./tooltip-card";
import Image from "next/image";
const About = ({ className }: { className?: string }) => {
    return (
        <section className={`flex flex-col justify-center px-6 bg-black ${className}`}>
            <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-slate-100 mb-8"
                >
                    About
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl leading-relaxed text-slate-400 font-medium space-y-6"
                >
                    <div>
                        I completed my bachelor’s degree from{" "}
                        <Tooltip content={<Image src="/lpu.jpg" alt="lpu" height={200} width={400} />}>

                            <span className="text-slate-100 border-b-2 border-slate-700 pb-0.5">
                                Lovely Professional University
                            </span>
                        </Tooltip>
                        , where my interest in startups and product building grew stronger.
                    </div>

                    <div>
                        I like studying problems, breaking them down, and{" "}
                        <Tooltip content={<InterestingProblems />}>
                            <span className="text-slate-100 border-b-2 border-slate-700 pb-0.5">
                                creating practical solutions
                            </span>{" "}
                        </Tooltip>
                        through software. My mindset toward any task is simple: either I already know how to do it, or I learn and figure it out.
                    </div>

                    <div>
                        I spend most of my time building projects, experimenting with new technologies, and working on ideas that can become useful tools or products. For me, the most exciting part of technology is the ability to{" "}
                        <Tooltip content={<Creation />}>
                            <span className="text-slate-100 border-b-2 border-slate-700 pb-0.5">
                                create something from nothing
                            </span>
                        </Tooltip>
                        {" "}
                        and see people use it.
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export function InterestingProblems() {
    const problems = [
        "Managing private keys securely",
        "Real time audio translation",
        "Capturing system audio on macOS",
    ];

    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <ul>
                {problems.map((problem, index) => (
                    <li key={index} style={{ marginBottom: "8px", font: 'bold' }}>
                        {problem}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export function Creation() {
    const problems = [
        "AI Copilot for Meetings",
        "Realtime Office Room for Agents",
        "DePin based Wallet Monitoring",
    ];

    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <ul>
                {problems.map((problem, index) => (
                    <li key={index} style={{ marginBottom: "8px", font: 'bold' }}>
                        {problem}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default About;
