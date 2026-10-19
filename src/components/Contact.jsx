import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiInstagram, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Immanuvel,%0A%0AMy name is ${formData.name} (${formData.email}).%0A%0A${formData.message}`;
    window.open(`https://wa.me/8754637962?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textSecondary mb-1">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder=""
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Send via WhatsApp</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-display font-semibold mb-6">Let's work together on your next <span className="text-primary">masterpiece.</span></h3>
            <p className="text-textSecondary text-lg mb-8">
              I'm currently available for freelance projects and full-time roles. If you have a project that needs some creative magic, I'm your designer!
            </p>

            <div className="space-y-6">
              <a href="mailto:immanuvel@example.com" className="flex items-center space-x-4 text-textSecondary hover:text-white transition-colors group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors border border-white/10">
                  <FiMail size={20} />
                </div>
                <span className="text-lg">immanuvel.dev@gmail.com</span>
              </a>

              <div className="flex space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/immanuvel-dev/" target="_blank" className="w-12 h-12 glass rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary hover:-translate-y-1">
                  <FiLinkedin size={20} />
                </a>
                <a href="https://github.com/immanuvel-12" target="_blank" className="w-12 h-12 glass rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary hover:-translate-y-1">
                  <FiGithub size={20} />
                </a>
                <a href="#" target="_blank" className="w-12 h-12 glass rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary hover:-translate-y-1">
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
