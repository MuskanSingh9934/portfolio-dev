"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Target, Zap, MapPin } from "lucide-react";
import { Tooltip } from "./tooltip-card";
import Image from "next/image";

const hackathons = [
    {
        title: "Smart India Hackathon",
        location: "National Level Hackathon",
        date: "2024",
        description: "Qualified for Smart India Hackathon after University level elimination round. Participated in a 36-hour intense hackathon solving real-world government problems.",
        icon: <Target className="w-6 h-6 text-orange-400" />,
        color: "from-orange-500/20 to-amber-500/10",
        image: "/sih.jpeg"
    },
    {
        title: "HackVerse",
        location: "Lovely Professional University",
        date: "2024",
        description: "Won second prize at HackVerse where we built a code translation optimizer that translates algorithms into different programming languages seamlessly.",
        icon: <Trophy className="w-6 h-6 text-yellow-400" />,
        color: "from-yellow-500/20 to-amber-500/10",
        image: "/hackverse.jpeg"
    },
    {
        title: "SAP Hackfest",
        location: "National Level Hackathon",
        date: "2024",
        description: "Qualified for the Regional Round of SAP Hackfest, a prestigious National Level Hackathon, showcasing enterprise-grade solution prototypes.",
        icon: <Code className="w-6 h-6 text-blue-400" />,
        color: "from-blue-500/20 to-indigo-500/10",
        image: "/hackfest.jpeg"
    },
    {
        title: "Concoction Web Master",
        location: "Lovely Professional University",
        date: "2023",
        description: "Secured runner-up position in a solo 90-minute fast-paced web development competition, demonstrating rapid prototyping and coding skills.",
        icon: <Zap className="w-6 h-6 text-purple-400" />,
        color: "from-purple-500/20 to-pink-500/10",
        image: "/concoction.jpeg"
    },
    {
        title: "Ideathon 2023",
        location: "Lovely Professional University",
        date: "2023",
        description: "Completed phase 1 of the Ideathon organised by LPU School of Computer Science Engineering and secured our spot in the finals!",
        icon: <Zap className="w-6 h-6 text-purple-400" />,
        color: "from-purple-500/20 to-pink-500/10",
        image: "/ideathon.jpeg"
    },
];

const HackathonSection = ({ className }: { className?: string }) => {
    return (
        <section className={`py-32 px-6 bg-black relative overflow-hidden ${className}`}>
            <div className="max-w-4xl mx-auto relative z-10 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 text-sm font-bold mb-8 shadow-2xl"
                >
                    Hackathons
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-6xl font-bold text-slate-100 mb-8 tracking-tight"
                >
                    I like building things
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    During my time in university, I attended numerous hackathons. It was eye-opening to see the endless possibilities.
                </motion.p>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800/50 hidden md:block" />

                <div className="space-y-16">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={hack.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col md:flex-row gap-8 items-start group"
                        ><Tooltip content={<Image src={hack.image} alt={hack.title} width={200} height={200} />}>
                                {/* Icon Circle */}
                                <div className="relative z-10 w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center shrink-0 shadow-2xl group-hover:border-slate-600 transition-colors duration-300">
                                    <div className={`absolute inset-0 rounded-full bg-linear-to-br ${hack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="relative z-10">{hack.icon}</div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3 pt-2">
                                    <div className="text-slate-500 font-medium text-sm flex items-center gap-2">
                                        <span>{hack.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            {hack.location}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
                                        {hack.title}
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors">
                                        {hack.description}
                                    </p>
                                </div>
                            </Tooltip>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonSection;
