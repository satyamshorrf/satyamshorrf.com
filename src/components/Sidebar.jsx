import React from 'react';
import { Rss, Mail } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 lg:w-72 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src="./public/favicon_io/favicon.ico" 
            alt="RAM Logo" 
            className="h-10 w-10"
          />
          <h2 className="text-xl font-semibold dark:text-white">About me</h2>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              I'm Satyam Shorrf, software engineer and open-source creator. This is my digital garden. 🌱
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium dark:text-white">Stay in touch</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get an update when I write something new!
            </p>
            
            <div className="space-y-2">
              <a 
                href="/rss" 
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Rss size={18} />
                <span>RSS feed</span>
              </a>
              
              <a 
                href="/newsletter" 
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Mail size={18} />
                <span>Newsletter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 