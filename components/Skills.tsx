"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Backend & APIs",
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Laravel"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Data Modeling", "SQL"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Git", "Cloud Deployment", "CI/CD Awareness"],
  },
  {
    category: "Frontend & IoT",
    skills: ["React", "TypeScript", "Tailwind CSS", "Arduino"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-950">
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
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Backend-focused tech stack with experience in microservices, Docker,
            cloud deployment, and IoT integration.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}