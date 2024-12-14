import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Notes from './pages/NotesPage';
import Projects from './pages/ProjectsPage';
import Articles from './pages/ArticlesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/notes" element={<Notes />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/" element={
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
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
