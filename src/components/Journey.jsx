import React from 'react';
import { motion } from 'motion/react';
import { timeline } from '../constants';

const Journey = ({ variants, itemVariants, timelineVariants, scrollDir }) => {
  return (
    <section id="journey" className="py-32 px-6">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="font-h2 text-4xl md:text-5xl">The Evolution</h2>
        </motion.div>

        <div className="relative space-y-24">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 vertical-line opacity-50"></div>

          {timeline.map((item, i) => (
            <motion.div
              key={item.period}
              custom={i}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              exit={{ opacity: 0, x: scrollDir === 'up' ? -50 : 50 }} 
              viewport={{ once: false, amount: 0.5 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`flex-1 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="font-mono text-primary text-sm font-bold bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  {item.period}
                </span>
              </div>

              <div className={`relative z-10 w-4 h-4 rounded-full ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.5)] shrink-0`}></div>

              <div className="flex-1 glass-card p-8 rounded-2xl text-center md:text-left">
                <h4 className="font-h3 text-xl mb-2">{item.role}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Journey;