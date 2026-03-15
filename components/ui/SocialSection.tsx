"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Linkedin, Quote } from "lucide-react";

const posts = [
    {
        name: "Alex Rivera",
        username: "@arivera",
        body: "Clever AI is actually insane. The meeting summaries are so precise it feels like I have a second brain.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
        name: "Sarah Chen",
        username: "@schen_dev",
        body: "Just saw OctaClaw running local agents... this is the future of automation. Sameer is onto something big here.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
        name: "Michael Smith",
        username: "@msmith_crypto",
        body: "SushiCoins trade execution is lightning fast. Best P2P experience I've had in a while.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
        name: "Jessica Wu",
        username: "@jwu_ai",
        body: "The privacy focus on Clever AI is exactly what enterprise teams need. Great work on the architecture!",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    },
    {
        name: "David Miller",
        username: "@dmiller_tech",
        body: "OctaClaw makes local agent orchestration so simple. Love the real-time state sync features.",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
];

const PostCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-colors",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-slate-500">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-slate-300">{body}</blockquote>
        </figure>
    );
};

export function SocialSection() {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                            <Linkedin className="w-8 h-8 text-blue-400" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Social Footprint</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Updates and shoutouts from the community and building in public.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LinkedIn Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center bg-slate-900/40 p-4 rounded-3xl border border-slate-800 backdrop-blur-sm"
                    >
                        <div className="w-full max-w-[504px] overflow-hidden rounded-xl shadow-2xl">
                            <iframe
                                src="https://www.linkedin.com/posts/20-sameershaik_hackathon-hackverse-lpu-activity-7179511245895585793-RkSA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABcIaNMBMx_VBzfmkOcYuxAmg4HC55vofy0"
                                height="600"
                                width="100%"
                                allowFullScreen
                                title="Embedded LinkedIn Post"
                                className="bg-white"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Marquee and Additional Context */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-blue-400 font-semibold uppercase tracking-wider text-sm">
                                <Quote size={16} />
                                <span>What people are saying</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                                Building in public, <br />
                                <span className="text-slate-500">shipping with velocity.</span>
                            </h3>
                        </div>

                        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/20 md:shadow-xl">
                            <Marquee pauseOnHover vertical className="[--duration:20s]">
                                {posts.map((post) => (
                                    <PostCard key={post.username} {...post} />
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-black"></div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialSection;
