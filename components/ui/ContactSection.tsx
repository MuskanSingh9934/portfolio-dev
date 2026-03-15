"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function ContactSection() {
    return (
        <section className="bg-black w-full py-24 relative overflow-hidden border-t border-slate-900">
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
                <DottedGlowBackground
                    className="pointer-events-none mask-radial-to-[90%] mask-radial-at-center opacity-30"
                    opacity={1}
                    gap={12}
                    radius={1.8}
                    colorLightVar="--color-slate-500"
                    glowColorLightVar="--color-slate-600"
                    colorDarkVar="--color-slate-700"
                    glowColorDarkVar="--color-blue-600"
                    backgroundOpacity={0}
                    speedMin={0.3}
                    speedMax={1.2}
                    speedScale={1}
                />

                <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-10 px-8 py-20 md:flex-row md:space-y-0 text-white">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Ready to <span className="text-blue-500">Collaborate</span>
                        </h2>
                        <p className="max-w-xl text-lg text-slate-400 leading-relaxed mx-auto md:mx-0">
                            I am happy to talk about AI, front-end experiments, or career tooling. Email me at <span className="text-blue-300">muskansinghusa22@gmail.com</span> or call <span className="text-blue-300">+91 7782061632</span>, and let&apos;s build something useful.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <a
                            href="mailto:muskansinghusa22@gmail.com"
                            className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-slate-200 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Get in Touch
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex items-center justify-center gap-4 px-4 py-4 rounded-2xl border border-slate-800 backdrop-blur-xl bg-slate-900/50">
                            <a href="https://github.com/MuskanSingh9934" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/muskan-singh99/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}

export default ContactSection;
