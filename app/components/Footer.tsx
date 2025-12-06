import React from 'react';
import Link from 'next/link';

// Footer Component
const Footer = () => (
  <footer className="bg-black border-t text-white border-gray-200 py-12">
    <div className="max-w-7xl mx-auto px-6 pt-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="mb-4">
           <img 
  src="/Logo.png" 
  alt="Vayam Multimedia Logo" 
  className="h-10 w-auto object-contain scale-[2.5] origin-left" 
/>

          </div>
          <p className=" text-sm leading-relaxed">
            Creating compelling visual narratives that inspire and engage. Your story, our expertise.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <Link href="#" className="block hover:text-cyan-600 cursor-pointer">About Us</Link>
            <Link href="#" className="block hover:text-cyan-600 cursor-pointer">Portfolio</Link>
            <Link href="#" className="block hover:text-cyan-600 cursor-pointer">Services</Link>
            <Link href="#" className="block hover:text-cyan-600 cursor-pointer">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className=" font-semibold mb-4">Follow Us</h4>
          <div className="space-y-2 text-sm">
            <Link href="https://www.instagram.com/vayam_multimedia/" className="block hover:text-cyan-600 cursor-pointer" target="_blank" rel="noopener noreferrer">Instagram</Link>
            <Link href="#" className="block hover:text-cyan-600 cursor-pointer">Facebook</Link>
            <Link href="#" className="block hover:text-cyan-600 cursor-pointer">LinkedIn</Link>
            <Link href="https://www.youtube.com/channel/UC1FqrfGN5v-P2j2FkH0y6OA" className="block hover:text-cyan-600 cursor-pointer" target="_blank" rel="noopener noreferrer">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-8 text-center  text-sm">
        © 2025 Vayam Multimedia Production House. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
