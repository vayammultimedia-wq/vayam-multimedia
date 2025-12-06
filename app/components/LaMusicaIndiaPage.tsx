import React from 'react';
import { FaYoutube, FaMicrophoneAlt, FaMusic, FaHandshake } from 'react-icons/fa';

const LaMusicaIndiaPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r mt-10  from-cyan-600 to-cyan-500 ">La Musica India</h1>
          <p className="text-xl mt-4 text-gray-300">Official Music Channel by Vayam Multimedia</p>
          <p className="text-lg mt-2 font-light text-gray-400">Discover New Sounds. Celebrate Independent Talent. Feel the Music.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            La Musica India is the official YouTube music channel by Vayam Multimedia, created to promote fresh musical talent, soulful independent artists, and high-quality music production from across India. As a growing entertainment brand, our mission is to bring original music, covers, unplugged sessions, devotional tracks, rap/hip-hop, and culturally rich compositions to a global audience.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Backed by Vayam Multimedia’s in-house production expertise, La Musica India is becoming a hub for creative artists, cinematographers, and sound producers who want to deliver meaningful, impactful music.
          </p>
        </div>

        <div className="text-center mb-12">
            <a
              href="https://youtube.com/@lamusicaindia?si=EWiuE3_T41RDtsfA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              <FaYoutube className="mr-3 text-2xl" />
              Subscribe on YouTube
            </a>
          </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">What You’ll Find</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <FaMusic className="text-5xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Original Music</h3>
              <p className="text-gray-400">Fresh compositions across all genres.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <FaMicrophoneAlt className="text-5xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Artist Spotlights</h3>
              <p className="text-gray-400">Highlighting independent and emerging artists.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">And Much More</h3>
              <p className="text-gray-400">High-quality Music Videos, Devotional Tracks, Covers, Unplugged Sessions & Regional Music.</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 my-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-500">Our Vision</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            To build one of India’s fastest-growing digital music platforms by combining talent, creativity, and professional production quality. La Musica India aims to nurture young artists and provide them a platform to reach millions of viewers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Get Involved</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              This dedicated page on the Vayam Multimedia website showcases our music channel’s identity, vision, featured videos, upcoming releases, and collaboration opportunities. It helps brands, artists, and partners understand the scale and growth of La Musica India as an official division of our multimedia production house.
            </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md inline-block">
            <FaHandshake className="text-5xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Call to Action</h3>
            <p className="text-gray-400"> For artist collaborations, sponsorships, or music production inquiries – Contact Vayam Multimedia.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaMusicaIndiaPage;