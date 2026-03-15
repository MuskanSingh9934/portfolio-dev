"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const experiences = [
    {
        company: "Clever AI & OctaClaw",
        role: "Founder & Developer",
        date: "Dec 2025 - Present",
        icon: <Image src="/clever_ai.png" alt="Clever AI" width={60} height={60} />,
        bgColor: "bg-blue-500/10",
    },
    {
        company: "OmniqAI",
        role: "Software Engineer",
        date: "Aug 2025 - Dec 2025",
        icon: <Image src="/omniqai_logo.jpeg" alt="omniqai" width={60} height={60} />,
        bgColor: "bg-green-500/10",
    },
    {
        company: "OmniqAI",
        role: "Software Engineer Intern",
        date: "May 2025 - Aug 2025",
        icon: <Image src="/omniqai_logo.jpeg" alt="omniqai" width={60} height={60} />,
        bgColor: "bg-lime-500/10",
    },
    {
        company: "Capgemini",
        role: "Intern",
        date: "Jan 2025 - May 2025",
        icon: <Image src="/capgemini_logo.jpeg" alt="capgemini" width={60} height={60} />,
        bgColor: "bg-slate-900",
    },
];

const ExperienceSection = ({ className }: { className?: string }) => {
    return (
        <section className={`py-20 px-6 bg-black ${className}`}>
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-slate-100 mb-12"
                >
                    Work Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-3xl hover:bg-slate-900/50 transition-colors group border border-transparent hover:border-slate-800"
                        >
                            <div className="flex items-center gap-6">
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-xl overflow-hidden shrink-0 ${exp.bgColor}`}
                                >
                                    {exp.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                                        {exp.company}
                                        {exp.company === "Splunk" && <span className="text-slate-500 font-normal group-hover:text-blue-300 transition-colors"> &gt;</span>}
                                    </h3>
                                    <p className="text-slate-400 font-medium">{exp.role}</p>
                                </div>
                            </div>
                            <div className="text-slate-500 font-semibold md:text-right">
                                {exp.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
