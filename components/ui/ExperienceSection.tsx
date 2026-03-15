"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const experiences = [
    {
        company: "Clever AI and OctaClaw",
        role: "Frontend Developer",
        date: "December 2025 – Present",
        icon: <Image src="/clever.png" alt="aminurus" height={200} width={400} />,
        bgColor: "bg-blue-500/10",
        bullets: [
            "Performed market research to understand user needs and guide product UI decisions.",
            "Designed intuitive UX flows and converted design mockups into responsive frontend interfaces.",
            "Developed scalable UI components using Nextjs, Tailwind CSS, and shadcn/ui.",
            "Leveraged AI tools to accelerate UI development and improve workflow productivity.",
            "Collaborated in Agile sprints with cross-functional teams while managing code with Git."
        ]

    },
    {
        company: "Aminurus Technology",
        role: "Frontend Developer Intern",
        date: "Aug 2024 – Feb 2025",
        icon: <Image src="/aminurmus.jpeg" alt="aminurus" height={200} width={400} />,
        bgColor: "bg-blue-500/10",
        bullets: [
            "Developed a reusable React component architecture to improve UI scalability and maintainability.",
            "Integrated REST APIs and implemented dynamic data rendering with React Hooks and local state.",
            "Performed manual testing and debugging through Chrome DevTools to reduce front-end defects before deployment.",
            "Optimized page performance by trimming unnecessary re-renders and improving load efficiency.",
            "Collaborated in Agile sprints with daily stand-ups and maintained version control through Git."
        ],
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
                            className="flex flex-col gap-4 p-4 rounded-3xl hover:bg-slate-900/50 transition-colors group border border-transparent hover:border-slate-800"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-center gap-6">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-xl overflow-hidden shrink-0 ${exp.bgColor}`}
                                    >
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors flex items-center gap-2">
                                            {exp.company}
                                        </h3>
                                        <p className="text-slate-400 font-medium">{exp.role}</p>
                                    </div>
                                </div>
                                <div className="text-slate-500 font-semibold md:text-right">
                                    {exp.date}
                                </div>
                            </div>
                            {exp.bullets && (
                                <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
                                    {exp.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="flex gap-2">
                                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
