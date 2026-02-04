"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {

  // This function forces the scroll to happen every time
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault(); // Stop the browser from just updating the URL
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <div className="text-xl font-bold text-white">
          Sathya<span className="text-primary"> Vuppala</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#home" onClick={(e) => handleScroll(e, "home")} 
          className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#about" onClick={(e) => handleScroll(e, "about")}
          className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#skills" onClick={(e) => handleScroll(e, "skills")}
          className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#projects" onClick={(e) => handleScroll(e, "projects")}
          className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" onClick={(e) => handleScroll(e, "contact")}
          className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}