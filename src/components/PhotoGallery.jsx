import React from 'react';
import { Camera } from 'lucide-react';

function PhotoGallery({ active, onClick, albumPages = [] }) {
  const media = [
    { type: 'image', src: `${process.env.PUBLIC_URL}/images/photo1.jpg`, alt: 'Foto 1' },
    { type: 'image', src: `${process.env.PUBLIC_URL}/images/photo2.jpg`, alt: 'Foto 2' },
    { type: 'image', src: `${process.env.PUBLIC_URL}/images/photo3.jpg`, alt: 'Foto 3' },
    { type: 'video', src: `${process.env.PUBLIC_URL}/images/video1.mp4`, alt: 'Video 1' },
    { type: 'video', src: `${process.env.PUBLIC_URL}/images/video2.mp4`, alt: 'Video 2' },
  ];

  return (
    <div
      onClick={onClick}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 ${
        active ? 'md:col-span-2 scale-105' : ''
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Camera className="w-8 h-8 text-pink-400" />
        <h2 className="text-2xl font-bold text-purple-600">Nuestros Momentos</h2>
      </div>
      {active && (
        <div className="grid grid-cols-3 gap-4 mt-4 animate-slide-down">
          {media.map((item, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-4xl">📷</div>';
                  }}
                />
              ) : (
                <video 
                  src={item.src}
                  controls
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-4xl">🎥</div>';
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
      {!active && (
        <p className="text-gray-600">Click para ver nuestra galería de recuerdos ❤️</p>
      )}
    </div>
  );
}

export default PhotoGallery;