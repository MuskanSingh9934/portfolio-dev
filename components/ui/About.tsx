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
                        I am pursuing a Master of Computer Applications at <Tooltip content={<Image src="/lpu.jpg" alt="lpu" height={200} width={400} />}>
                            <span className="text-slate-100 border-b-2 border-slate-700 pb-0.5">Lovely Professional University</span>
                        </Tooltip> while building AI-powered products that help people present their skills clearly and confidently.
                    </div>

                    <div>
                        I like studying problems, breaking them down, and <Tooltip content={<InterestingProblems />}>
                            <span className="text-slate-100 border-b-2 border-slate-700 pb-0.5">designing practical workflows</span>
                        </Tooltip> that mix front-end polish with AI prompts.
                    </div>

                    <div>
                        I spend most of my time building projects, experimenting with new technologies, and working on ideas that can become useful tools or products. For me, the most exciting part of technology is the ability to <Tooltip content={<Creation />}>
                            <span className="text-slate-100 border-b-2 border-slate-700 pb-0.5">ship something that helps others</span>
                        </Tooltip> and see people use it in their careers.
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export function InterestingProblems() {
    const problems = [
        "Aligning resumes with job description requirements",
        "Turning brand direction into usable palettes",
        "Blending generative AI with responsive UI",
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
        "AI Resume Analyzer & Generator",
        "AI Color Palette Generator & Tailwind Exporter",
        "Prompt-first career tooling",
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
