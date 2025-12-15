"use client";
import Image from 'next/image';
import React from 'react';

const getImageSrc = (img: string, width: number = 1200) => {
  if (img.startsWith('photo-')) {
    return `https://images.unsplash.com/${img}?w=${width}&q=80`;
  }
  return `/${img}`;
};

const companyImages = [
  { id: 1, src: 'g1.jpg', alt: 'Vayam Multimedia Event' },
  { id: 2, src: 'g2.jpg', alt: 'Vayam Multimedia Event' },
  { id: 3, src: 'g3.jpg', alt: 'Vayam Multimedia Event' },
  { id: 4, src: 'g4.jpg', alt: 'Vayam Multimedia Event' },
  { id: 5, src: 'g5.jpg', alt: 'Vayam Multimedia Event' },
  { id: 6, src: 'g6.jpg', alt: 'Vayam Multimedia Event' },
  { id: 7, src: 'g7.jpg', alt: 'Vayam Multimedia Event' },
  { id: 8, src: 'g8.jpg', alt: 'Vayam Multimedia Event' },
  { id: 9, src: 'g9.jpg', alt: 'Vayam Multimedia Event' },
  { id: 10, src: 'g10.jpg', alt: 'Vayam Multimedia Event' },
  { id: 11, src: 'g11.jpg', alt: 'Vayam Multimedia Event' },
  { id: 12, src: 'g12.jpg', alt: 'Vayam Multimedia Event' },
  { id: 13, src: 'g13.jpg', alt: 'Vayam Multimedia Event' },
  { id: 14, src: 'g14.jpg', alt: 'Vayam Multimedia Event' },
  { id: 15, src: 'g15.jpg', alt: 'Vayam Multimedia Event' },
  { id: 16, src: 'g16.jpg', alt: 'Vayam Multimedia Event' },
  { id: 17, src: 'g17.jpg', alt: 'Vayam Multimedia Event' },

];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            OUR <span className="text-cyan-500">GALLERY</span>
          </h1>
          <p className="text-gray-400 text-xl">A glimpse into the world of Vayam Multimedia</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {companyImages.map((image) => (
            <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={getImageSrc(image.src, 400)}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;