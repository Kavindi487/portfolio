"use client";

import { motion } from "framer-motion";
import { Code2, Database, Container, CloudCog } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Clean API Design",
    description:
      "Design REST APIs with clear contracts, proper HTTP methods, meaningful status codes, and comprehensive validation.",
  },
  {
    icon: Database,
    title: "Backend Data Modeling",
    description:
      "Structure databases with normalized schemas, proper indexing, and relationships that reflect real-world business logic.",
  },
  {
    icon: Container,
    title: "Docker for Consistency",
    description:
      "Containerize services to ensure identical environments across development, testing, and production deployments.",
  },
  {
    icon: CloudCog,
    title: "Production-Ready Thinking",
    description:
      "Consider scalability, observability, error handling, and failure scenarios from the start—not as afterthoughts.",
  },
];

export default function SystemsApproach() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
            Engineering Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            How I Build Systems
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I focus on designing backend services with clean API contracts,
            reliable data modeling, and deployment-ready setups. My work
            emphasizes structure, scalability, and real-world constraints.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}