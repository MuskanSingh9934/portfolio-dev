"use client";

import { motion } from "framer-motion";
import {
    SiTypescript,
    SiCplusplus,
    SiNodedotjs,
    SiRabbitmq,
    SiPostgresql,
    SiRedis,
    SiPrisma,
    SiDocker,
    SiGithubcopilot,
    SiGo
} from "react-icons/si";
import {
    LuGlobe,
    LuZap,
    LuGitBranch,
    LuActivity,
    LuBoxes,
    LuBrain,
    LuListTree
} from "react-icons/lu";
import { FaAws } from "react-icons/fa6";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
            { name: "GoLang", icon: <SiGo className="text-[#00599C]" /> },

        ],
    },
    {
        title: "Backend & Systems",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
            { name: "REST APIs", icon: <LuGlobe className="text-[#E91E63]" /> },
            { name: "WebSockets", icon: <LuZap className="text-[#FFC107]" /> },
            { name: "RabbitMQ", icon: <SiRabbitmq className="text-[#FF6600]" /> },
            { name: "System Design", icon: <LuBoxes className="text-[#795548]" /> },
            { name: "LLMs", icon: <LuBrain className="text-[#607D8B]" /> },
            { name: "Copilot", icon: <SiGithubcopilot className="text-black" /> },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
            { name: "PrismaORM", icon: <SiPrisma className="text-black" /> },
        ],
    },
    {
        title: "Cloud",
        skills: [
            { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
            { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
            { name: "CI/CD", icon: <LuGitBranch className="text-[#F05032]" /> },
            { name: "Infrastructure Monitoring", icon: <LuActivity className="text-[#4CAF50]" /> },
        ],
    },

];

const SkillsSection = ({ className }: { className?: string }) => {
    return (
        <section className={`py-20 px-6 bg-black ${className}`}>
            <div className="max-w-4xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-slate-100 mb-16"
                >
                    Technical Skills
                </motion.h2>

                <div className="space-y-12">
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title} className="space-y-4">
                            <motion.h3
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                className="text-xl font-bold text-slate-400 uppercase tracking-widest"
                            >
                                {category.title}
                            </motion.h3>

                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: (catIndex * 0.1) + (skillIndex * 0.05)
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default"
                                    >
                                        <span className="text-2xl">{skill.icon}</span>
                                        <span className="text-black font-semibold text-lg">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
