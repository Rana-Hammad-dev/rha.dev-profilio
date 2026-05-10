import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '../constants';
import { a } from 'motion/react-client';

const Projects = ({ variants, itemVariants }) => {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.02]">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="font-h2 text-4xl md:text-5xl">Selected Works</h2>
            <p className="text-on-surface-variant max-w-xl">Deep dives into high-performance applications built for real-world impact.</p>
          </div>
          <button onClick={() => window.open("https://github.com/Rana-Hammad-dev", "_blank")} className="flex items-center gap-2 text-primary font-bold group">
            View Archive <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card rounded-[2.5rem] overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  className="w-full h-full object-cover object-left group-hover:scale-110 transition-transform duration-700"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div onClick={() => window.open(project.liveUrl, "_blank")} className="p-4 bg-primary text-on-primary rounded-full">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-h3 text-3xl">{project.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase font-bold text-primary">Description</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{project.description}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase font-bold text-secondary">Impact</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
