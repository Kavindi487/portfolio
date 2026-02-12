"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300"
        >
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />

          <div className="relative z-10">
            {/* Category & Links */}
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

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-slate-300 mb-6 leading-relaxed">
              {project.tagline}
            </p>

            {/* Tech stack */}
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

            {/* View details link */}
            <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
              View details
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}