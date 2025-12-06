"use client";
import React, { useState } from 'react';
import { Play, X, Calendar, Award, Eye } from 'lucide-react';
import Image from 'next/image'; // Import the Image component

// Helper function to get image source
const getImageSrc = (img: string, width: number = 600) => {
  if (img.startsWith('photo-')) {
    return `https://images.unsplash.com/${img}?w=${width}&q=80`;
  }
  return `/${img}`;
};

// Portfolio Page
interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  img: string;
  description: string;
  awards?: string[];
  views?: string;
  duration?: string;
}

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

    const projects: Project[] = [
      {
        id: 1,
        title: 'Prem',
        year: '2025',
        category: 'Feature Film',
        img: 'prem.png',
        description: 'A heartwarming tale of love, friendship, and self-discovery.',
        views: '1.2M',
        duration: '135 min'
      },
      {
        id: 2,
        title: 'Sangvi',
        year: '2025',
        category: 'Short Film',
        img: 'sangvi.png',
        description: 'A captivating short film exploring themes of hope and resilience.',
        views: '750K',
        duration: '45 min'
      }
    ];
  const categories = ['All', 'Feature Film', 'Short Film'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1489599511986-c2d4d2d0e8b8?w=1920&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black text-sm tracking-[0.3em] rounded-full font-bold">
            OUR PORTFOLIO
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            FEATURED <span className="text-cyan-500">WORKS</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Discover our award-winning productions that have captivated audiences and earned critical acclaim worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold tracking-wider transition-all transform hover:-translate-y-1 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-black shadow-2xl'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden aspect-video rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2"
            >
              <Image
                src={getImageSrc(project.img, 600)}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                  {project.awards && (
                    <Award className="w-5 h-5 text-cyan-500" />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    {project.views && (
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {project.views}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="text-white w-16 h-16 bg-cyan-500 rounded-full p-4 shadow-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <Image
                src={getImageSrc(selectedProject.img, 1200)}
                alt={selectedProject.title}
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white hover:text-cyan-500 bg-black/50 backdrop-blur-sm rounded-full p-3 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-cyan-500 text-black text-sm font-bold rounded-full mb-4 inline-block">
                  {selectedProject.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h2 className="text-4xl font-black text-white">{selectedProject.title}</h2>
                {selectedProject.awards && (
                  <Award className="w-6 h-6 text-cyan-500" />
                )}
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <Calendar className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                  <div className="text-white font-semibold">Release Year</div>
                  <div className="text-gray-400">{selectedProject.year}</div>
                </div>
                {selectedProject.views && (
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Eye className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                    <div className="text-white font-semibold">Views</div>
                    <div className="text-gray-400">{selectedProject.views}</div>
                  </div>
                )}
                {selectedProject.duration && (
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Play className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                    <div className="text-white font-semibold">Duration</div>
                    <div className="text-gray-400">{selectedProject.duration}</div>
                  </div>
                )}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {selectedProject.description}
              </p>
              
              {selectedProject.awards && (
                <div className="mb-6">
                  <h3 className="text-cyan-500 font-bold text-lg mb-3">Awards & Recognition</h3>
                  <div className="space-y-2">
                    {selectedProject.awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <Award className="w-4 h-4 text-cyan-500" />
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold tracking-wider hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-lg shadow-2xl transform hover:-translate-y-1 flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  WATCH PROJECT
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-bold tracking-wider hover:bg-cyan-500 hover:text-black transition-all rounded-lg transform hover:-translate-y-1">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
