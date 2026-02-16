"use client";

import { motion } from "framer-motion";

const skills = [
  "C++",
  "Python",
  "SQL",
  "HTML, CSS",
  "Java",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-zinc-100"
        >
          My Tech Stack
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-white/10 bg-white/5 p-4 rounded-xl text-center hover:bg-white/10 transition-colors"
            >
              <span className="font-semibold text-zinc-300 group-hover:text-white">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}