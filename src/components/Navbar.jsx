import React from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '../constants';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-4 rounded-3xl border-primary/10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(253,234,31,0.3)]">
            <Terminal className="w-6 h-6 text-on-primary" />
          </div>
          <span className="font-display font-h3 text-2xl tracking-tighter glow-text">RHA.dev</span>
        </div>

        <div className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-5 py-2 rounded-xl transition-all duration-300 font-medium ${activeSection === link.id
                ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(253,234,31,0.2)]'
                : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
                }`}
            >
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" download="/resume.pdf" className="ml-4 px-8 py-2.5 bg-primary-container text-on-primary-container rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">Resume</a>
        </div>

        <button
          className="lg:hidden p-2 text-on-surface"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-30 left-6 right-6 glass-card p-8 rounded-3xl animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-2xl font-display py-2 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="mt-2 px-8 py-3 bg-primary-container text-on-primary-container rounded-xl font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
