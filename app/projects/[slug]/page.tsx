import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/projects";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Project header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-emerald-400 font-semibold text-sm">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-slate-300 mb-8">{project.tagline}</p>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-semibold transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <p className="text-slate-300 leading-relaxed">{project.problem}</p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
          <p className="text-slate-300 leading-relaxed">{project.solution}</p>
        </section>

        {/* Architecture (if available) */}
        {project.architecture && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              System Architecture
            </h2>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="space-y-4">
                {project.architecture.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-slate-300 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* My Role */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">My Role</h2>
          <p className="text-slate-300 leading-relaxed">{project.role}</p>
        </section>

        {/* Key Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Key Highlights
          </h2>
          <div className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}