import React from 'react';
import { Gift as GiftIcon } from 'lucide-react';

function Gift({ onOpen }) {
  return (
    <div className="text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-pink-500 mb-6 md:mb-8 animate-pulse">
        ¡Feliz Cumpleaños Mi Amor! 🎉
      </h1>
      <div 
        onClick={onOpen}
        className="relative cursor-pointer transform hover:scale-110 transition-transform duration-300"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg shadow-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 md:h-16 bg-yellow-200"></div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 md:w-16 bg-yellow-200"></div>
          <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-20 md:w-24 h-12 md:h-16 bg-yellow-300 rounded-t-full"></div>
          <GiftIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 text-white opacity-50" />
        </div>
      </div>
      <p className="mt-6 md:mt-8 text-lg md:text-xl text-purple-600 animate-bounce">
        👆 Haz click para abrir tu regalo
      </p>
    </div>
  );
}

export default Gift;