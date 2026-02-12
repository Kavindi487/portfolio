"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useRef } from "react";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 200, damping: 25 });
  const smy = useSpring(my, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(smy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-10, 10]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;

    mx.set(px);
    my.set(py);

    el.style.setProperty("--sx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--sy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.25 }}
        className="relative rounded-2xl p-8 h-full border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden will-change-transform"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(600px circle at var(--sx,50%) var(--sy,50%), rgba(16,185,129,0.18), transparent 45%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow:
              "0 0 0 1px rgba(16,185,129,0.35), 0 0 40px rgba(34,211,238,0.12)",
          }}
        />

        <div
          className="relative z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-sm font-semibold">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
                  Featured
                </span>
              )}
            </div>

            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 text-slate-400 hover:text-emerald-400 transition-colors" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5 text-slate-400 hover:text-emerald-400 transition-colors" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
            <Link href={`/projects/${project.slug}`} className="inline-block">
              {project.title}
            </Link>
          </h3>

          <p className="text-slate-300 mb-6 leading-relaxed">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-md border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="px-3 py-1 text-slate-400 text-sm">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all"
          >
            View details <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
