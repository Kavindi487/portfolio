"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kavindividusari@gmail.com",
    href: "mailto:kavindividusari@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Kavindi487",
    href: "https://github.com/Kavindi487",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kavindi-vidusari",
    href: "https://linkedin.com/in/kavindi-vidusari",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kadawatha, Sri Lanka",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I&apos;m actively looking for backend engineering internships and junior
            roles. If you&apos;re hiring for Spring Boot, microservices, or Docker
            positions, let&apos;s talk.
          </p>
        </motion.div>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-start gap-4 p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <link.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">
                      {link.label}
                    </div>
                    <div className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                  <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <link.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">
                      {link.label}
                    </div>
                    <div className="text-white font-medium">{link.value}</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl"
        >
          <p className="text-slate-300 text-center">
            <span className="text-emerald-400 font-semibold">
              Open to opportunities:
            </span>{" "}
            Backend engineering roles focusing on Java, Spring Boot,
            microservices, Docker, and cloud deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}