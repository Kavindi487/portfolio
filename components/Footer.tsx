"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-slate-400 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Kavindi Vidusari • Built with Next.js,
            Tailwind CSS & Framer Motion
          </p>
          <p className="mt-2 text-slate-500">
            Focused on backend engineering, microservices, and production-ready
            systems
          </p>
        </motion.div>
      </div>
    </footer>
  );
}