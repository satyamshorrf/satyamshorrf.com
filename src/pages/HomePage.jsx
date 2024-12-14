import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold dark:text-white mb-4">
            Hey, I'm Satyam Shorrf!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            I'm a software engineer, open-source creator, and former professional
            chef. I've been making websites since 1998 and writing on this blog for
            the past decade.
          </p>
        </div>
        <img 
          src="./public/favicon_io/favicon.ico" 
          alt="RAM Logo" 
          className="h-48 w-48 ml-8 hidden md:block"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Article cards would go here */}
        {/* Example card: */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold dark:text-white mb-2">
            Latest Article Title
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Brief description of the article...
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
} 