import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center max-w-4xl">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold">
          KV
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-cyan-400">Kavindi Vidusari</span>
        </h1>

        <p className="text-xl text-slate-400 mb-6">
          CS Undergraduate | Full-Stack Developer | IoT Enthusiast
        </p>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/Kavindi487"><Github /></a>
          <a href="#"><Linkedin /></a>
          <a href="mailto:kavindividusari@gmail.com"><Mail /></a>
        </div>
      </div>
    </section>
  );
}
