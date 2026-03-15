import { motion } from "framer-motion";
import { Bot, Code2, Layers, Link } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden ${className} bg-black`}
    >
      <BackgroundBeamsWithCollision className="bg-transparent h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center gap-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-lg font-medium text-slate-400"
          >
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-full shadow-sm">
              <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center">
                <Bot size={14} className="text-white" />
              </div>
              <span className="text-slate-200 font-semibold">AI-first career tools</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 flex flex-wrap justify-center items-center gap-4 md:gap-6 leading-tight"
          >
            <span className="text-blue-300">Hey, </span>
            <span>I'm</span>

            <div className="relative group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-b from-slate-800 to-slate-900 rounded-3xl border-4 border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Muskan&backgroundColor=b6e3f4"
                  alt="Muskan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <span>Muskan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Crafting AI-enabled products that help people stand out.
          </motion.p>

          {/* 4. Bottom Row: "Full Stack [Icon] / Part-Time [Icon]" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-lg font-medium text-slate-400"
          >
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-2xl border border-slate-800/50">
              <span className="text-slate-300">Front-End Systems</span>
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 border border-slate-700">
                <Code2 size={18} />
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-2xl border border-slate-800/50">
              <span className="text-slate-300">AI Product</span>
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 border border-slate-700">
                <Layers size={18} />
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-2xl border border-slate-800/50">
              <span className="text-slate-300">Career Tools</span>
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-purple-400 border border-slate-700">
                <Link size={18} />
              </div>
            </div>
          </motion.div>
          <div className="w-[100] h-[100]" />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default HeroSection;
