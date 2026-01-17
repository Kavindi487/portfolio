"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? "bg-slate-900/90 backdrop-blur" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-400">K</span>avindi
        </h1>

        <div className="hidden md:flex gap-8">
          {sections.map(sec => (
            <a key={sec} href={`#${sec}`} className="capitalize hover:text-cyan-400">
              {sec}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4">
          {sections.map(sec => (
            <a
              key={sec}
              href={`#${sec}`}
              className="block py-2 capitalize hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {sec}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
