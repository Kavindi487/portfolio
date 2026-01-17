import { Code, Cpu, Server } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-lg text-slate-300">
            I'm a Computer Science undergraduate at the University of Ruhuna,
            passionate about full-stack development and IoT systems.
          </p>

          <div className="space-y-4">
            <Card icon={<Code />} title="Full Stack Developer" />
            <Card icon={<Cpu />} title="IoT Developer" />
            <Card icon={<Server />} title="Backend Engineer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title }: any) {
  return (
    <div className="bg-slate-800 p-5 rounded border border-slate-700">
      <div className="flex items-center gap-3 text-cyan-400">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
}
