"use client";

import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black text-zinc-400 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
        
        {/* 1. The Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Let's Build Something Together</h3>
          <p className="max-w-md mx-auto">
            I'm currently looking for new opportunities in AI/ML and Web Development. 
            Feel free to reach out!
          </p>
        </div>

        {/* 2. Social Links Row */}
        <div className="flex gap-6 mt-4">
          <Link href="https://github.com" target="_blank" className="hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:your@email.com" className="hover:text-white transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
          <Link href="https://codeforces.com/profile/man-of-game" target="_blank" className="hover:text-white transition-colors">
            <Code2 className="h-6 w-6" />
          </Link>
        </div>

        {/* 3. Copyright */}
        <div className="text-sm mt-8 border-t border-white/10 pt-8 w-full text-center">
          <p>© {new Date().getFullYear()} Sathya. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}