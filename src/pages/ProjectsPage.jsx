import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "LISA AI assistant",
      description: "LISA: A conversational AI assistant that understands natural language, performs tasks, answers questions, and integrates with devices to simplify daily life.",
      image: "/projects/lisa-ai.webp",
      tags: ["html", "JavaScript", "tailwindcss", "fabricjs", "liveblocks"],
      links: {
        demo: "https://lisa-ai.demo.com",
        github: "https://github.com/yourusername/lisa-ai"
      }
    },
    {
      title: "Amazon Website",
      description: "Creating an Amazon Clone using HTML, CSS, and JavaScript involves several steps to replicate the look and functionality of the Amazon website. Here is a brief overview of the process:",
      image: "/projects/amazon.webp",
      tags: ["next.js", "styled-components", "three.js", "prisma", "framer-motion"],
      links: {
        demo: "https://amazon-clone.demo.com",
        github: "https://github.com/yourusername/amazon-clone"
      }
    },
    {
      title: "AI Virtual Girlfriend",
      description: "In this project we will create a virtual girlfriend chatbot, but feel free to use what you'll learn to build your own support assistant, language teacher, or any ideas you have in mind!",
      image: "/projects/ai-girlfriend.webp",
      tags: ["typescript", "3D-Models", "tailwindcss", "node.js", "tanstack/react-query", "OpenAI", "Elevenlabs", "react/react-fiber"],
      links: {
        demo: "https://ai-girlfriend.demo.com",
        github: "https://github.com/yourusername/ai-girlfriend"
      }
    },
    {
      title: "lazarev",
      description: "The Lazarev website clone is a recreated version of the Lazarev digital product design agency's website, often developed for practice of showcasing frontend development skills. It features elegant design, intricate animations and interactivity, built using technologies like HTML...",
      image: "/projects/lazarev.webp",
      tags: ["typescript", "3D-Models", "tailwindcss"],
      links: {
        demo: "https://lazarev-clone.demo.com",
        github: "https://github.com/yourusername/lazarev"
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-400 dark:text-gray-500 mb-4">
          MY WORK
        </h2>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Projects.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          These projects showcase my practical skills and experience, each with descriptions
          and links to code repositories and live demos. They demonstrate my ability to handle
          complex challenges, adapt to different technologies, and oversee projects from start
          to finish.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <a 
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                >
                  <ExternalLink size={20} className="text-white" />
                </a>
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
            </div>

            <div className="p-2">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 