'use client';
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const upcomingEvents = [
  {
    title: 'Music Production Workshop',
    date: 'December 20, 2025',
    location: 'Online via Zoom',
    description: 'Join us for an interactive workshop on the fundamentals of music production. Perfect for beginners!',
  },
  {
    title: 'Independent Artist Showcase',
    date: 'January 15, 2026',
    location: 'The Music Hall, New Delhi',
    description: 'A live event featuring performances from some of the best independent artists in the country.',
  },
];

const pastEvents = [
  {
    title: 'Film Scoring Masterclass',
    date: 'November 5, 2025',
    location: 'Vayam Multimedia Studios',
    description: 'An exclusive masterclass on the art of scoring for film and television with industry experts.',
  },
];

const EventsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mt-10 from-purple-500 to-pink-500">
            Events & Workshops
          </h1>
          <p className="text-xl mt-4 text-gray-300">
            Join us for workshops, showcases, and live events.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-6">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-cyan-400">{event.title}</h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <FaCalendarAlt className="mr-2" /> <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <FaMapMarkerAlt className="mr-2" /> <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300">{event.description}</p>
                </div>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg mt-4 md:mt-0">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-2">{event.date} - {event.location}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;