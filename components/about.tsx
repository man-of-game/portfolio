"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-zinc-100"
        >
          About Me
        </motion.h2>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl leading-relaxed text-zinc-300"
        >
          <p className="mb-6">
            I am a <strong className="text-white">Computer Science & Engineering</strong> student specializing in 
            <strong className="text-white"> AI & Machine Learning</strong>, currently pursuing my B.Tech in India.
            I'm deeply interested in technology and how it can be used to solve real-world problems.
          </p>

          <p className="mb-6">
            I actively explore AI/ML, contribute to open-source projects, and enjoy competitive programming to sharpen my problem-solving skills.
            I believe in learning by building, experimenting, and staying consistent.
          </p>

          <p>
            I'm always curious about new technologies and open to collaborating on meaningful projects.
          </p>
        </motion.div>

      </div>
    </section>
  );
}