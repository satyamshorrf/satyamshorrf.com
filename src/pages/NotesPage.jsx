import React from 'react';

export default function Notes() {
  const notes = [
    {
      year: '2024',
      items: [
        {
          title: '2023 into 2024',
          date: 'January 2'
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: '2022 into 2023',
          date: 'January 2'
        }
      ]
    },
    {
      year: '2022',
      items: [
        {
          title: '2021 into 2022',
          date: 'January 2'
        }
      ]
    },
    {
      year: '2021',
      items: [
        {
          title: '2020 into 2021',
          date: 'January 2'
        }
      ]
    },
    {
      year: '2020',
      items: [
        {
          title: '2019 into 2020',
          date: 'January 2'
        }
      ]
    },
    {
      year: '2019',
      items: [
        {
          title: '2017 into 2019',
          date: 'January 2'
        }
      ]
    },
    {
      year: '2022',
      items: [
        {
          title: 'The Lore of Animorphs (an Ode)',
          date: 'December 29'
        },
        {
          title: 'Tending to My Digital Garden',
          date: 'December 1'
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Notes
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Personal notes about life, music, projects, and everything else.
      </p>

      {notes.map((yearGroup) => (
        <div key={yearGroup.year} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {yearGroup.year}
          </h2>
          <div className="space-y-4">
            {yearGroup.items.map((note) => (
              <div 
                key={note.title}
                className="flex justify-between items-center group"
              >
                <a 
                  href={`/notes/${note.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                >
                  {note.title}
                </a>
                <span className="text-gray-500 dark:text-gray-400">
                  {note.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 