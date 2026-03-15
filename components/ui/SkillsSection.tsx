"use client";

import { motion } from "framer-motion";
import {
    SiTypescript,
    SiCplusplus,
    SiJavascript,
    SiPython,
    SiNextdotjs,
    SiTailwindcss,
    SiGithub,
    SiGithubcopilot,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
    LuListTree,
    LuGitBranch,
    LuActivity,
    LuBoxes,
    LuTextCursor,
    LuZap,
    LuClipboardList,
    LuBrain,
} from "react-icons/lu";

const skillCategories = [
    {
        title: "Programming",
        skills: [
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
            { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
            { name: "Data Structures", icon: <LuListTree className="text-[#22D3EE]" /> },
        ],
    },
    {
        title: "Frontend & AI",
        skills: [
            { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
            { name: "Generative AI", icon: <LuBrain className="text-[#8B5CF6]" /> },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <LuGitBranch className="text-[#F97316]" /> },
            { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
            { name: "Copilot", icon: <SiGithubcopilot className="text-black" /> },
            { name: "ChatGPT", icon: <LuZap className="text-[#22D3EE]" /> },
            { name: "Cursor", icon: <LuTextCursor className="text-[#F43F5E]" /> },
        ],
    },
    {
        title: "Methodologies",
        skills: [
            { name: "Agile", icon: <LuActivity className="text-[#7C3AED]" /> },
            { name: "Version Control", icon: <LuBoxes className="text-[#0EA5E9]" /> },
            { name: "Clean Code Practices", icon: <LuClipboardList className="text-[#F97316]" /> },
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
