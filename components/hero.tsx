"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      
      {/* 1. Name and Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I'm <span className="text-zinc-400">Sathya</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl">
          A CSE Student specializing in <span className="text-white">AI & Machine Learning</span>. 
          Building intelligent systems and scalable web applications.
        </p>
      </motion.div>

      {/* 2. Action Buttons Animation (Delays slightly) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 flex gap-4"
      >
        <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
          <Link href="#projects">View Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-zinc-800 text-white hover:bg-zinc-900">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </motion.div>

      {/* 3. Social Icons Animation (Delays more) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 flex gap-6 text-zinc-500"
      >
        <Link href="https://github.com/man-of-game" target="_blank" className="hover:text-white transition-colors">
          <Github className="h-6 w-6" />
        </Link>
        <Link href="https://www.linkedin.com/in/sathya-vuppala/" target="_blank" className="hover:text-white transition-colors">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="mailto:your@email.com" className="hover:text-white transition-colors">
          <Mail className="h-6 w-6" />
        </Link>
        <Link href="https://codeforces.com/profile/man-of-game" target="_blank" className="hover:text-white transition-colors">
            <Code2 className="h-6 w-6" />
        </Link>
      </motion.div>

    </section>
  );
}