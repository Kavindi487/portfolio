const projects = [
  {
    title: "Library Management System",
    desc: "Java Swing based system with MySQL",
    tech: ["Java", "MySQL"],
    link: "https://github.com/Kavindi487",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {projects.map(p => (
          <div key={p.title} className="bg-slate-800 p-6 rounded border border-slate-700">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-slate-400 my-2">{p.desc}</p>
            <a href={p.link} className="text-cyan-400">GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
