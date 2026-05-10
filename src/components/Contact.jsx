import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = "service_o0chjfa";
const EMAILJS_TEMPLATE_ID = "template_1mr94y9";
const EMAILJS_PUBLIC_KEY = "EtXL3qlSm-bG521JT";

const Contact = ({ variants, itemVariants }) => {
  const [form, setForm] = useState({ name: '', projectType: 'Full Stack Application', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      showToast('error', 'Please fill all fields!');
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          project_type: form.projectType,
          message: form.message,
          to_email: 'ranahammad.hd@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setShowPopup(true);
      setForm({ name: '', projectType: 'Full Stack Application', message: '' });
    } catch (err) {
      showToast('error', 'Something went wrong. Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/20 blur-[150px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <h2 className="font-h2 text-4xl md:text-6xl">Let's build <br /> the <span className="text-primary italic">next</span> layer.</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                Whether you have a specific system requirement or just want to discuss the future of the MERN stack,
                let's connect and build something solid.
              </p>
              <div className="space-y-4 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant">Direct encrypted line</p>
                <a href="mailto:ranahammad.hd@gmail.com" className="text-xl md:text-4xl font-display font-h3 hover:text-primary transition-colors">
                  ranahammad.hd@gmail.com
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Architect"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Project Type</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option className="bg-background">Full Stack Application</option>
                    <option className="bg-background">System Architecture</option>
                    <option className="bg-background">AI Integration</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60 ml-2">Mission Brief</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe the scope..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(253,234,31,0.3)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Sending... <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" /></>
                ) : (
                  <>Execute Send <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl font-medium ${toast.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
              }`}
          >
            {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-10 rounded-3xl max-w-md w-full text-center space-y-6 border border-primary/20"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Mission Received!</h3>
              <p className="text-on-surface-variant">Your message has been transmitted. I'll get back to you within 24 hours.</p>
              <div className="glass-card p-4 rounded-2xl text-left space-y-2 text-sm">
                <p><span className="opacity-50">From:</span> <span className="font-medium">{form.name || 'You'}</span></p>
                <p><span className="opacity-50">Project:</span> <span className="font-medium">{form.projectType}</span></p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold hover:opacity-90 transition-all"
              >
                Close Transmission
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;