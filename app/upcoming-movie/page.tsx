
"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface TimeLeft {
  [key: string]: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date('2025-12-31T00:00:00') - +new Date(); // Placeholder date
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const UpcomingMoviePage = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="text-center">
        <div className="text-4xl md:text-6xl font-extrabold text-cyan-400">
          {timeLeft[interval] < 10 ? '0' + timeLeft[interval] : timeLeft[interval]}
        </div>
        <div className="text-sm md:text-lg text-gray-300 uppercase">{interval}</div>
      </div>
    );
  });

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <Image
        src="/rohitpaliwal.jpg" // Using an image from public for a better background
        alt="Cinematic Background"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0 opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>

      <div className=" mt-30 mb-20 relative z-20 max-w-5xl mx-auto p-8 md:p-12 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 animate-slide-down">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Grand Premiere</span>
        </h1>
        <p className="text-2xl md:text-4xl  font-extrabold text-cyan-400 mb-8 animate-fade-in-slow">
          Bollywood Blockbuster Coming Soon!
        </p>

        <div className="mb-10 animate-fade-in-slow">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">Salman Khan Films Presents</h2>
          <p className="text-lg md:text-xl text-gray-300">
            In association with Vayam Multimedia & Sanjay Bhatt Productions
          </p>
        </div>

        {timerComponents.length ? (
          <div className="flex justify-center gap-6 md:gap-10 mb-12 animate-fade-in-delay">
            {timerComponents}
          </div>
        ) : (
          <div className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12 animate-pulse">
            The Movie is Here!
          </div>
        )}

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-in-delay">
          Prepare for an unforgettable cinematic journey. Stay tuned for trailers, cast reveals, and exclusive behind-the-scenes content!
        </p>
      </div>

      {/* Basic keyframe animations (can be defined in global CSS or a separate CSS file) */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-out 0.5s forwards;
        }
        .animate-pulse {
            animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default UpcomingMoviePage;

