import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Articles() {
  const articles = [
    {
      year: '2024',
      items: [
        {
          title: 'Creating a Keyboard Shortcut Hook in React (Deep Dive)',
          date: 'October 2024',
          description: 'A comprehensive guide to handling keyboard shortcuts in React applications.',
          tags: ['React', 'JavaScript', 'Hooks']
        },
        {
          title: 'Tables with Fixed Headers and Horizontal Scroll',
          date: 'October 2024',
          description: 'Learn how to create responsive tables with fixed headers and horizontal scrolling.',
          tags: ['CSS', 'HTML', 'Web Development']
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: 'How to Use WebSockets in a Redux Application',
          date: 'February 2023',
          description: 'Implementing real-time features in Redux using WebSockets.',
          tags: ['Redux', 'WebSockets', 'React']
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Articles
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Technical articles about web development, programming, and software engineering.
      </p>

      {articles.map((yearGroup) => (
        <div key={yearGroup.year} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {yearGroup.year}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {yearGroup.items.map((article) => (
              <article 
                key={article.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  <a href={`/articles/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                     className="hover:underline">
                    {article.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs
                        bg-blue-100 dark:bg-blue-900 
                        text-blue-800 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={`/articles/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 