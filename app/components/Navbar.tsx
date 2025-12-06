"use client";
import React, { useState, useEffect } from 'react';
import { X, Menu, Film } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation Component
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2">
             <img
  src="/Logo.png"
  alt="Vayam Logo"
  className="h-10 w-auto object-contain scale-[4] origin-left"
/>

            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold tracking-[0.2em] transition-all duration-300 group ${
                  pathname === item.href 
                    ? 'text-cyan-500' 
                    : 'text-white hover:text-cyan-500'
                }`}
              >
                {item.label.toUpperCase()}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-500 transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold tracking-wider hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-lg shadow-lg transform hover:-translate-y-1"
            >
              START PROJECT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:text-cyan-500 transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="space-y-4 pt-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-semibold tracking-[0.2em] transition-colors ${
                    pathname === item.href 
                      ? 'text-cyan-500' 
                      : 'text-white hover:text-cyan-500'
                  }`}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold tracking-wider hover:from-cyan-500 hover:to-cyan-400 transition-all rounded-lg shadow-lg mt-4"
              >
                START PROJECT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
