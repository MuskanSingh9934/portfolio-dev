"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
    {
        title: "AI Resume Analyzer & Generator",
        subtitle: "Career insights and ATS-ready resume automation",
        points: [
            "Built an AI-powered resume analyzer that evaluates documents using ATS-style scoring and keyword matching.",
            "Implemented job-description comparison to surface missing skills and improve resume-job alignment.",
            "Developed an AI-based resume generator to create structured, ATS-friendly resumes from user inputs.",
            "Provided section-wise AI feedback and improvement suggestions for summary, skills, experience, and education.",
        ],
        icon: <Sparkles className="w-12 h-12 text-sky-400" />, 
        tags: ["AI", "Next.js", "TypeScript", "Prompt Engineering"],
        gradient: "from-cyan-500/20 to-blue-500/10",
        live: "",
        border: "border-cyan-500/20",
        hoverBorder: "group-hover:border-cyan-500/50"
    },
    {
        title: "AI Color Palette Generator & Tailwind Exporter",
        subtitle: "Gemini-powered branding toolkit",
        points: [
            "Built an AI-powered web tool that generates brand color palettes based on website type, design style, and branding preferences.",
            "Integrated the Gemini API to dynamically generate multiple palette combinations using generative prompts.",
            "Implemented Tailwind CSS export so developers can copy palette values directly into UI projects.",
            "Designed an interactive UI with palette previews, copy-to-clipboard controls, and responsive layouts for comparing multiple palettes.",
        ],
        icon: <div className="text-3xl">🎨</div>,
        tags: ["Gemini", "Tailwind CSS", "Next.js", "Design Systems"],
        gradient: "from-amber-500/20 to-orange-500/10",
        live: "",
        border: "border-amber-500/20",
        hoverBorder: "group-hover:border-amber-500/50"
    },
];

const ProjectsSection = ({ className }: { className?: string }) => {
    return (
        <section className={`py-32 px-6 bg-black relative overflow-hidden ${className}`}>
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-full h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 space-y-4 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        <Sparkles size={14} />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-slate-100">
                        Projects
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto" />
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`group relative p-8 md:p-12 rounded-[2.5rem] border ${project.border} ${project.hoverBorder} bg-slate-900/30 backdrop-blur-xl transition-all duration-500 overflow-hidden`}
                        >
                            {/* Refined Glow Effects */}
                            <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                                {/* Left Side: Icon & Meta */}
                                <div className="lg:w-1/3 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="p-5 w-fit rounded-3xl bg-slate-800/50 border border-slate-700/50 group-hover:scale-110 group-hover:border-slate-500/30 transition-all duration-500">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-slate-100 group-hover:text-white transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-blue-400 font-medium mt-2 leading-tight">
                                                {project.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden lg:flex flex-wrap gap-2 mt-auto pt-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 border border-slate-700/50 rounded-xl group-hover:border-slate-500/50 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Description Points */}
                                <div className="lg:w-2/3 flex flex-col justify-between">
                                    <ul className="space-y-4">
                                        {project.points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 + (i * 0.1) }}
                                                className="flex gap-4 text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed tracking-wide"
                                            >
                                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 shrink-0 transition-all" />
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap lg:hidden gap-2 mt-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-semibold text-slate-400 bg-slate-800/50 border border-slate-700/50 rounded-lg"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-slate-800/50 flex items-center justify-end">
                                        <div className="flex gap-6">
                                            {project.live !== "" && <button className="flex items-center gap-2 text-slate-500 hover:text-slate-100 transition-colors group/btn">
                                                <ExternalLink className="w-5 h-5" />
                                                <a className="text-sm font-medium" href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                                            </button>}
                                        </div>
                                        {/* <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-all group/see">
                                            View Case Study
                                            <span className="transform group-hover/see:translate-x-1 transition-transform text-lg">→</span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
