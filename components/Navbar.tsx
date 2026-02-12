"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/75 backdrop-blur-lg border-b border-slate-800/50"
    >
      {/* Progress bar */}
      <motion.div
        className="h-[2px] w-full origin-left bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Kavindi Vidusari
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-slate-300 hover:text-emerald-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Kavindi487"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/kavindi-vidusari"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
