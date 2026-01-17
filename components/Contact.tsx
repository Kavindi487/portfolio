import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Let&apos;s <span className="text-cyan-400">Connect</span>
      </h2>

      <div className="flex justify-center gap-8">
        <a href="mailto:kavindividusari@gmail.com"><Mail /></a>
        <a href="https://www.linkedin.com/in/kavindi-vidusari-618a08259"><Linkedin /></a>
        <a href="https://github.com/Kavindi487"><Github /></a>
      </div>
    </section>
  );
}
