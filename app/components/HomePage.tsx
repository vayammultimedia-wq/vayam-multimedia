"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, Star, Award, Film, Camera } from 'lucide-react';
import Link from 'next/link';

const getImageSrc = (img: string, width: number = 1200) => {
  if (img.startsWith('photo-')) {
    return `https://images.unsplash.com/${img}?w=${width}&q=80`;
  }
  return `/${img}`;
};

const featuredMovies = [
  { id: 1, title: "Prem", genre: "Drama", year: "2025", rating: 9.0, image: "prem.png", description: "A heartwarming tale of love, friendship, and self-discovery" },
  { id: 2, title: "Sangvi", genre: "Thriller", year: "2025", rating: 8.5, image: "sangvi.png", description: "A captivating short film exploring themes of hope and resilience" },
  { id: 3, title: "comming soon", genre: "coming", year: "2024", rating: 8.9, image: "photo-1489599511986-c2d4d2d0e8b8", description: "A powerful story of music, loss, and redemption" }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

  return (
    <div className="min-h-screen bg-black">

      {/* HERO */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1489599511986-c2d4d2d0e8b8?w=1920&q=80"
          alt="Hero"
          fill
          priority
          className="object-cover brightness-[0.3]"
        />

        <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-9xl font-black text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                VAYAM
              </span><br />
              <span className="text-white">Multimedia</span>
            </h1>

            <p className="text-lg md:text-3xl text-gray-300 mb-12">
              Where Stories Come to Life on the Silver Screen
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/portfolio" className="px-10 py-5 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold rounded-lg">
                <span className="flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  WATCH OUR FILMS
                </span>
              </Link>
              <Link href="/la-musica-india" className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg">
                LA MUSICA INDIA
              </Link>
              <Link href="/contact" className="px-10 py-5 border-2 border-cyan-500 text-cyan-500 font-bold rounded-lg">
                START YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED MOVIES */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            FEATURED <span className="text-cyan-500">Multimedia</span>
          </h2>
          <p className="text-gray-400 text-xl">Our latest cinematic masterpieces</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "0.7s" }}>
              {featuredMovies.map((movie) => (
                <div key={movie.id} className="w-full relative flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <Image src={getImageSrc(movie.image, 1200)} alt={movie.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center">
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-2 bg-cyan-500 text-black text-sm font-bold rounded-full">{movie.genre}</span>
                            <span className="text-gray-300">{movie.year}</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-cyan-500" />
                              <span className="text-cyan-500 font-bold">{movie.rating}</span>
                            </div>
                          </div>

                          <h3 className="text-4xl md:text-6xl font-black text-white mb-4">{movie.title}</h3>
                          <p className="text-gray-300 text-lg mb-8">{movie.description}</p>

                          <button className="flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg">
                            <Play className="w-5 h-5" />
                            WATCH TRAILER
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 p-3 bg-black/50 text-white rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={nextSlide} className="absolute right-4 top-1/2 p-3 bg-black/50 text-white rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 gap-3">
            {featuredMovies.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-cyan-500" : "bg-gray-600"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* RECENT WORK */}
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            RECENT <span className="text-cyan-500">WORKS</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing our diverse portfolio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { img: 'photo-1492619375914-88005aa9e8fb', title: 'Corporate Documentary', category: 'Documentary' },
            { img: 'photo-1521737604893-d14cc237f11d', title: 'Music Video Series', category: 'Music Video' },
            { img: 'photo-1579165466741-7f35e4755660', title: 'Commercial Campaign', category: 'Commercial' }
          ].map((project, i) => (
            <div key={i} className="relative overflow-hidden aspect-video rounded-xl shadow-2xl cursor-pointer">
              <Image
                src={`https://images.unsplash.com/${project.img}?w=600&q=80`}
                alt={project.title}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 p-6 bg-black/60 w-full">
                <div className="text-cyan-500 text-xs mb-2 font-bold">{project.category}</div>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-16 text-center">
            WHY CHOOSE <span className="text-cyan-500">VAYAM</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-12 h-12" />, title: 'Award-Winning', desc: 'International recognition for cinematic excellence.' },
              { icon: <Film className="w-12 h-12" />, title: 'Creative Vision', desc: 'Innovative filmmaking and storytelling.' },
              { icon: <Camera className="w-12 h-12" />, title: 'Professional Team', desc: 'Experienced industry-leading professionals.' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 text-center">
                <div className="text-cyan-500 mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
