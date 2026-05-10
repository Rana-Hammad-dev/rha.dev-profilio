import React from 'react';
import { Terminal, Github, Linkedin, icons } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-xl hover:rotate-20 transition-transform duration-300">
            <Terminal className="w-6 h-6 text-on-primary" />
          </div>
          <div>
            <span className="font-display font-h3 text-2xl tracking-tighter">RHA.dev</span>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Status: Operational</p>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-on-surface-variant text-sm mb-4">Crafted with precision & MERN stack expertise.</p>
          <div className="flex gap-4 justify-center md:justify-end">
            {[{ icon: Github, href: "https://github.com/Rana-Hammad-dev" }, { icon: Linkedin, href: "https://www.linkedin.com/in/rana-hammad-ali/" }].map((Icon, i) => (
              <a key={i} href={Icon.href} target='_blank' className="p-2 text-on-surface-variant hover:text-tertiary transition-colors ">
                <Icon.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-on-surface-variant font-bold">
          © {new Date().getFullYear()} Rana Hammad Ali. All rights reserved. Built with love and dedication (RH❤A).
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
