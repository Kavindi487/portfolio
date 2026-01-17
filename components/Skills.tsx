const skills = {
  Languages: ["Java", "JavaScript", "C++", "Python"],
  Frontend: ["React", "Next.js", "Tailwind"],
  Backend: ["Spring Boot", "Node.js", "Laravel"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technical <span className="text-cyan-400">Skills</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="bg-slate-800 p-6 rounded border border-slate-700">
            <h3 className="text-cyan-400 mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-900 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
