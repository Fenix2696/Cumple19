import React from 'react';
import { Gift as GiftIcon } from 'lucide-react';

function Gift({ onOpen }) {
  return (
    <div className="w-full h-full flex items-center justify-center py-12">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            ¡Feliz Cumpleaños
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-pink-500 mb-10 animate-pulse">
          Mi Amor! 🎉💖
        </h2>
        
        <div 
          onClick={onOpen}
          className="relative cursor-pointer transform hover:scale-110 transition-all duration-300 hover:rotate-3 inline-block"
        >
          <div className="w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-pink-400 via-purple-400 to-pink-300 rounded-2xl shadow-2xl relative overflow-hidden animate-bounce-slow">
            {/* Ribbons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-14 md:h-20 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 shadow-lg"></div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-14 md:w-20 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-300 shadow-lg"></div>
            
            {/* Bow */}
            <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-24 md:w-32 h-16 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-t-full shadow-xl"></div>
            <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 w-6 md:w-8 h-12 md:h-16 bg-gradient-to-b from-yellow-400 to-yellow-300"></div>
            
            {/* Gift Icon */}
            <GiftIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 text-white opacity-30" />
            
            {/* Sparkles */}
            <div className="absolute top-8 right-8 text-2xl md:text-3xl animate-pulse">✨</div>
            <div className="absolute bottom-8 left-8 text-2xl md:text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
          </div>
        </div>
        
        <div className="mt-10 space-y-3">
          <p className="text-xl md:text-2xl text-purple-600 font-bold animate-bounce">
            👆 Haz clic para abrir tu regalo 🎁
          </p>
          <p className="text-lg md:text-xl text-pink-500 animate-pulse">
            ✨ Hay una sorpresa especial para ti 💝
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gift;