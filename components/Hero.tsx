"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Award } from "lucide-react";
import Link from "next/link";

const techStack = ["Java", "Spring Boot", "Docker", "Microservices", "REST APIs", "Cloud"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -35, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Optional tiny magenta accent for uniqueness */}
      <motion.div
        aria-hidden
        className="absolute top-[35%] right-[18%] h-[260px] w-[260px] rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ y: [0, 25, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay (keep yours) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />

      {/* Moving light sweep */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, rgba(16,185,129,0.10) 30%, rgba(34,211,238,0.10) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8"
        >
          <Award className="w-4 h-4" />
          National Winner • Hackathon Winner
        </motion.div>

        {/* Headline with subtle shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building reliable{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300 bg-[length:200%_100%] animate-[gradientMove_3.5s_linear_infinite]">
              backend systems
            </span>
          </span>
        </motion.h1>

        {/* rest of your component stays same... */}
        {/* ... */}
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </section>
  );
}
