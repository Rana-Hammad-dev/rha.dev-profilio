import React from 'react';
import { motion } from 'motion/react';
import { techStack } from '../constants';
import '../style/hovereffect.css';

const TechStack = ({ variants, itemVariants }) => {
  return (
    <section id="stack" className="py-32 px-6 relative">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="font-h2 text-4xl md:text-5xl mb-4">Architectural Arsenal</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Grouped by expertise, my tech stack is optimized for performance, scalability, and developer experience.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl group hovereffect"
            >
              <div className={`w-12 h-12 ${category.color} bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/5 hover:rotate-20 transition-transform duration-300`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-h3 text-xl mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-on-surface-variant group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              <p className={`text-sm leading-relaxed mt-6 ${category.color}`}>{category.para}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-2/3 bg-primary/5 blur-[150px] -z-10 rounded-full"></div>
    </section>
  );
};

export default TechStack;
