import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowDown, Mail } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Hero = ({ variants, itemVariants }) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center pt-18 overflow-hidden px-6"
      id="hero"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-top w-full pt-10">
        <motion.div
          variants={itemVariants}
          className="z-10 text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide flex gap-2">
              <span className="text-secondary">Available for</span>
              <span className="text-primary italic">next-gen projects</span>
            </span>
          </div>

          <h1 className="font-display font-h1 text-5xl md:text-6xl tracking-tight leading-[0.9]">
            I Build Scalable<br />
            <span className="text-primary">MERN & AI-Powered Applications.</span>
          </h1>

          <p className="text-on-surface-variant text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            While others ship features, I architect systems — the kind that quietly power thousands of users without anyone noticing the engineering behind them."
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(253,234,31,0.4)] hover:scale-105 transition-all">
              Build My Project
            </button>
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              {[{ icon: Github, href: "https://github.com/Rana-Hammad-dev" }, { icon: Linkedin, href: "https://www.linkedin.com/in/rana-hammad-ali/" }, { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=ranahammad.hd@gmail.com" }].map((social, i) => (
                <a key={i} href={social.href} target={social.href} className="p-4 rounded-xl glass-card hover:bg-primary hover:text-on-primary transition-all group">
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative hidden lg:flex justify-end"
        >
          <ProfileImage />
        </motion.div>
      </div>

    </motion.section>
  );
};

export default Hero;
