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
  { id: 1, title: "banjar", genre: "Drama", year: "2025", rating: 9.0, image: "banjar.jpg", description: "A heartwarming tale of love, friendship, and self-discovery" },
  { id: 2, title: "Ek Thi Dayan", genre: "Thriller", year: "2025", rating: 8.5, image: "ekthiDayann.png", description: "A captivating short film exploring themes of hope and resilience" },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [movieType, setMovieType] = useState('upcoming');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredMovies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  const laMusicaIndiaVideos = [
    { id: 'TY1-73WZeEY', title: 'MÚSICA TRADICIONAL: India' },
    { id: 'qn8NCKyg4Qk', title: 'Musica India con Flauta de Meditacion' },
    { id: 'nQ-pTsV6pH8', title: 'Historia de la Música - India' },
    { id: '_jgz_9NBzYk', title: 'YouTube video player 4' }
  ];



  const nextVideoSlide = () => setCurrentVideoSlide((prev) => (prev + 1) % laMusicaIndiaVideos.length);
  const prevVideoSlide = () => setCurrentVideoSlide((prev) => (prev - 1 + laMusicaIndiaVideos.length) % laMusicaIndiaVideos.length);


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
            <div className="mb-[-50px] mt-[-100px] " >
              <Image
                src="/Logo2.png"
                alt="Vayam Logo"
                width={400}
                height={500}
                className="object-contain mx-auto"
              />
            </div>

            <p className="text-lg md:text-3xl mt-2 text-gray-300 mb-8">
              Where Stories Come to Life on the Silver Screen
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/portfolio" className="px-10 py-5 bg-amber-500 text-black font-bold rounded-lg transition-transform transform hover:scale-105">
                  <span className="flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    WATCH OUR FILMS
                  </span>
              </Link>
              <Link href="/la-musica-india" className="px-10 py-5 bg-transparent border-2 border-amber-500 text-amber-500 font-bold rounded-lg transition-transform transform hover:scale-105 hover:bg-amber-500 hover:text-black">
                  LA MUSICA INDIA
              </Link>
              <Link href="/contact" className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
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
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setMovieType("upcoming")}
              className={`px-6 py-2 rounded-lg cursor-pointer font-bold ${movieType === "upcoming"
                  ? "bg-cyan-500 text-black"
                  : "bg-gray-800 text-white"
                }`}
            >
              Upcoming Movie
            </button>
            <button
              onClick={() => setMovieType("released")}
              className={`px-6 py-2 rounded-lg font-bold cursor-pointer ${movieType === "released"
                  ? "bg-cyan-500 text-black"
                  : "bg-gray-800 text-white"
                }`}
            >
              Released Movie
            </button>
          </div>
        </div>

        {movieType === 'upcoming' && (
          <div className="relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg" />
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
              <div className="w-full md:w-1/2">
                <Image
                  src="/tarzan.jpeg"
                  alt="Upcoming Movie"
                  width={500}
                  height={750}
                                    className="rounded-lg shadow-2xl blur-sm"
                />              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold text-white">Salman Khan Films Presents</h2>
                <p className="text-2xl mt-4 text-gray-300">In association with</p>
                <h3 className="text-3xl font-bold mt-2 text-white">Vayam Multimedia & Sanjay Bhatt Productions</h3>
                <h1 className="text-6xl font-extrabold mt-12 text-cyan-500">Bollywood Blockbuster</h1>
                <p className="text-4xl mt-4 animate-pulse text-gray-300">Comming Soon</p>
              </div>
            </div>
          </div>
        )}

        {movieType === 'released' && (
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "0.7s" }}>
                {featuredMovies.map((movie) => (
                  <div key={movie.id} className="w-full relative shrink-0">
                    <div className="relative h-96 md:h-[500px]">
                      <Image src={getImageSrc(movie.image, 1200)} alt={movie.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

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
        )}
      </div>

      {/* LA MUSICA INDIA */}
      <div className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            LA MUSICA <span className="text-cyan-500">INDIA</span>
          </h2>
          <p className="text-gray-400 text-lg">Our latest musical creations</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex" style={{ transform: `translateX(-${currentVideoSlide * 100}%)`, transition: "0.7s" }}>
              {laMusicaIndiaVideos.map((video) => (
                <div key={video.id} className="w-full relative shrink-0">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prevVideoSlide} className="absolute left-4 top-1/2 p-3 bg-black/50 text-white rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={nextVideoSlide} className="absolute right-4 top-1/2 p-3 bg-black/50 text-white rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 gap-3">
            {laMusicaIndiaVideos.map((_, i) => (
              <button key={i} onClick={() => setCurrentVideoSlide(i)} className={`w-3 h-3 rounded-full ${i === currentVideoSlide ? "bg-cyan-500" : "bg-gray-600"}`} />
            ))}
          </div>
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
