import React from 'react';
import { Link } from 'react-router-dom';
import { Rss } from 'lucide-react';

export default function About() {
  const socialLinks = [
    {
      label: 'Email',
      value: 'hello@satyamshorrf.com',
      href: 'mailto:hello@satyamshorrf.com',
      isEmail: true,
    },
    {
      label: 'Newsletter',
      href: '/newsletter',
      color: 'text-blue-500 hover:text-blue-600',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/satyamshorrf',
      color: 'text-blue-500 hover:text-blue-600',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/satyamshorrf.com',
      color: 'text-blue-500 hover:text-blue-600',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/satyamshorrf',
      color: 'text-blue-500 hover:text-blue-600',
    },
  ];

  const currentActivities = [
    'Working full-time',
    'Weight-lifting three times/week',
    'Building a replica of our home out of Lego',
    'Playing the demo disc for Dynasty Warriors: Origin',
    'Reading Fire and Blood by George R. R. Martin',
    'Redesigning this website for the nth time',
  ];

  const speakingEngagements = [
    {
      title: 'Getting Started with Vue',
      event: 'Chicago JavaScript, 2019',
      link: '/speaking/getting-started-with-vue',
    },
    {
      title: 'Getting Started with React',
      event: 'Chicago JavaScript, 2018',
      link: '/speaking/getting-started-with-react',
    },
    {
      title: 'Developing a WordPress Theme from Scratch',
      event: 'WordCamp Chicago, 2017',
      link: '/speaking/wordpress-theme-from-scratch',
    },
  ];

  const songs = [
    { title: 'Rain', link: '/songs/rain' },
    { title: 'Let It Be', link: '/songs/let-it-be' },
    { title: "I'd Like to Walk Around In Your Mind", link: '/songs/walk-around' },
    { title: 'El Pasadiscos', link: '/songs/el-pasadiscos' },
    { title: 'Such Great Hights', link: '/songs/such-great-heights', isDuet: true },
    { title: 'Night Nurse', link: '/songs/night-nurse', isDuet: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* About Me Section */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hey, I'm Satyam! I work as a principal software engineer, and I've been making websites since 2024. I also have a DDR machine in the basement, two cats, and a wonderful partner. I like working out, playing video games, and reading.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Welcome to my spot on the web for writing, projects, tutorials, art, and anything else I want to put out there. On the site, you'll find my{' '}
            <Link to="/notes" className="text-blue-500 hover:text-blue-600">notes</Link>{' '}and all the{' '}
            <Link to="/articles" className="text-blue-500 hover:text-blue-600">technical articles</Link> I've written over the years. Check out the{' '}
            <Link to="/projects" className="text-blue-500 hover:text-blue-600">projects</Link> page to see highlights of my open-source work.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My site has{' '}
            <span className="bg-yellow-200 dark:bg-yellow-900 px-2 py-1 rounded">no ads</span>, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My motivation is to have a space for self-expression and to share what I've learned with the world.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Sign up for the{' '}
            <Link to="/newsletter" className="text-blue-500 hover:text-blue-600">newsletter</Link> or subscribe to the{' '}
            <Link to="/rss" className="inline-flex items-center text-blue-500 hover:text-blue-600">
              RSS feed <Rss size={18} className="ml-1" />
            </Link>{' '}for updates!
          </p>
        </div>
        <div>
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Send me an email to say hi, or connect via the socials.</p>
        <ul className="space-y-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-xl ${link.isEmail ? 'text-gray-200' : 'text-blue-500 hover:text-blue-600'}`}
              >
                {link.label}: {link.isEmail && <span className="text-gray-300">{link.value}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Current Activities Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">What I'm Doing Now</h2>
        <div className="space-y-6">
          <p className="text-gray-500 dark:text-gray-400 italic">Updated December 1st, 2024</p>
          <ul className="space-y-3">
            {currentActivities.map((activity, index) => (
              <li key={index} className="text-xl text-gray-600 dark:text-gray-300">
                {activity.includes('Redesigning') ? (
                  <Link to="/notes/redesign-v7" className="text-blue-500 hover:text-blue-600">
                    {activity}
                  </Link>
                ) : (
                  activity
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-16"></div>

      {/* Speaking Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Speaking</h2>
        <ul className="space-y-6">
          {speakingEngagements.map((talk) => (
            <li key={talk.title} className="space-y-1">
              <Link to={talk.link} className="text-blue-500 hover:text-blue-600 text-xl">
                {talk.title}
              </Link>
              <p className="text-gray-500 dark:text-gray-400 italic">{talk.event}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-700 my-16"></div>

      {/* Songs Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Songs</h2>
        <ul className="space-y-3">
          {songs.map((song) => (
            <li key={song.title}>
              <Link to={song.link} className="text-blue-500 hover:text-blue-600 text-xl inline-flex items-center">
                {song.title}
                {song.isDuet && (
                  <span className="ml-2 text-gray-500 dark:text-gray-400">(Duet)</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
