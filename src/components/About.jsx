import React from 'react';
import { motion } from 'motion/react';
import { stats } from '../constants';

const Architect = ({ variants, itemVariants }) => {
  return (
    <section id="about" className="py-32 px-6">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            <div className="glass-card p-1 rounded-[3.5rem] overflow-hidden group shadow-2xl">
              <div className="relative aspect-[4/5] rounded-[3.3rem] overflow-hidden">
                <img
                  src="/pic.jpeg"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  alt="Rana Hammad Ali"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-on-primary text-2xl md:text-3xl font-display font-bold leading-tight opacity-90">Mastering the <br /> Full Stack Life Cycle</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-8 order-2 lg:order-1"
          >
            <h2 className="font-h2 text-4xl md:text-6xl glow-text">How I Think About Code</h2>
            <div className="space-y-6 text-on-surface-variant text-lg md:text-xl leading-relaxed">
              <p>
                Code isn't just instructions; it's the digital infrastructure of modern commerce. My approach combines
                <span className="text-on-surface font-bold"> surgical precision with architectural vision</span>.
              </p>
              <p className="text-base md:text-lg opacity-80">
                As a MERN specialist, I don't just build features; I engineer systems. From schema optimization in MongoDB
                to sub-millisecond response patterns in Express, every byte is intentional.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <p className={`text-4xl md:text-6xl font-display font-bold ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60">{stat.label}</p>
                </div>
              ))}
            </div>

            <button  onClick={(e) => document.getElementById('journey').scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-4 px-10 py-5 glass-card rounded-2xl group border-primary/20 hover:border-primary transition-all text-lg font-bold">
              <span>Deep Dive into Experience</span>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all text-2xl">
              →
            </div>
          </button>
      </motion.div>
    </div>
      </motion.div >
    </section >
  );
};

export default Architect;
