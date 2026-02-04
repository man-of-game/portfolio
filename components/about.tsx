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
          </p>

          <p className="mb-6">
            My programming journey is deeply rooted in <strong className="text-white">Competitive Programming</strong>. 
            I enjoy the challenge of solving complex algorithmic problems using <strong className="text-white">C++</strong>, 
            constantly pushing myself to write more efficient and optimized code.
          </p>

          <p>
            When I'm not solving problems on Codeforces, I focus on building scalable applications using 
            <strong className="text-white"> Python and Next.js</strong>. I am also an active open-source contributor, 
            passionate about giving back to the community that helped me learn.
          </p>
        </motion.div>

      </div>
    </section>
  );
}