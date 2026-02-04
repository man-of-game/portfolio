"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

// This is your Project Database. 
// We store the data here so the HTML below stays clean.
const projects = [
  {
    title: "Neural Style Transfer",
    description: "A Deep Learning project using TensorFlow and VGG19 to transfer artistic styles onto regular photos. Converted from Colab to local script.",
    tags: ["TensorFlow", "Deep Learning", "OpenCV"],
    link: "https://github.com/man-of-game/neural-style-transfer",
  },
  {
    title: "Python Weather App",
    description: "A GUI-based application that fetches real-time weather data from the OpenWeatherMap API using Tkinter.",
    tags: ["Python", "API Integration", "Tkinter"],
    link: "https://github.com/man-of-game/weather_app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white" >
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-zinc-100"
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100 h-full flex flex-col hover:border-zinc-600 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-zinc-400">
                    {project.tags.join(" • ")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 hover:text-white">
                    <Link href={project.link} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}