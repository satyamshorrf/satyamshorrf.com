import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      year: '2022',
      stars: '2,021',
      title: 'satyamshorrf.com',
      description: 'The source of this website.',
      links: [
        { type: 'Source', url: 'https://github.com/satyamshorrf/portfolio' }
      ]
    },
    {
      year: '2022',
      stars: '183',
      title: 'Keyboard Accordion',
      description: 'Play the accordion with your keyboard!',
      links: [
        { type: 'Article', url: '/articles/keyboard-accordion' },
        { type: 'Demo', url: 'https://accordion.satyamshorrf.com' },
        { type: 'Source', url: 'https://github.com/satyamshorrf/keyboard-accordion' }
      ]
    },
    {
      year: '2020',
      stars: '6,909',
      title: 'TakeNote',
      description: 'A free, open source notes app for the web.',
      links: [
        { type: 'Article', url: '/articles/takenote' },
        { type: 'Demo', url: 'https://takenote.dev' },
        { type: 'Source', url: 'https://github.com/satyamshorrf/takenote' }
      ]
    },
    {
      year: '2019',
      stars: '431',
      title: 'Chip8',
      description: 'A retro game emulator for three platforms.',
      links: [
        { type: 'Article', url: '/articles/chip8' },
        { type: 'Demo', url: 'https://chip8.satyamshorrf.com' },
        { type: 'Source', url: 'https://github.com/satyamshorrf/chip8' }
      ]
    },
    {
      year: '2021',
      stars: '92',
      title: 'Sokoban',
      description: 'A web-based Sokoban implementation.',
      links: [
        { type: 'Article', url: '/articles/sokoban' },
        { type: 'Demo', url: 'https://sokoban.satyamshorrf.com' },
        { type: 'Source', url: 'https://github.com/satyamshorrf/sokoban' }
      ]
    },
    {
      year: '2015',
      stars: '1,216',
      title: 'New Moon',
      description: 'The optimized dark theme for web development.',
      links: [
        { type: 'Demo', url: 'https://taniarascia.github.io/new-moon/' },
        { type: 'Source', url: 'https://github.com/satyamshorrf/new-moon' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Projects
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Open-source projects I've made over the years, including this website, an emulator, and various
        games, apps, frameworks, and boilerplates.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {project.year}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-amber-400">★</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.stars}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center px-3 py-1 rounded-md text-sm
                    bg-gray-100 dark:bg-gray-700 
                    text-gray-700 dark:text-gray-300
                    hover:bg-gray-200 dark:hover:bg-gray-600 
                    transition-colors"
                >
                  {link.type}
                  {link.url.startsWith('http') && (
                    <ExternalLink size={14} className="ml-1" />
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 