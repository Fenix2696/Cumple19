import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

function Message({ active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 ${
        active ? 'md:col-span-2 scale-105' : ''
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="w-8 h-8 text-pink-400" />
        <h2 className="text-2xl font-bold text-purple-600">Mi Mensaje Para Ti</h2>
      </div>
      {active && (
        <div className="space-y-4 animate-slide-down">
          <p className="text-lg text-gray-700 leading-relaxed">
            Mi amor, hoy es tu día especial y quiero que sepas lo mucho que significas para mí. 
            Cada momento a tu lado es un regalo que atesoro en mi corazón.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Gracias por llenar mis días de amor, risas y felicidad. Eres la persona más 
            increíble que conozco y me siento afortunado de compartir mi vida contigo.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ¡Feliz cumpleaños, mi amor! Que todos tus sueños se hagan realidad. 
            Te amo más de lo que las palabras pueden expresar. 💕
          </p>
          <div className="flex justify-center gap-2 pt-4 flex-wrap">
            {[...Array(10)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-6 h-6 text-pink-500 animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }} 
              />
            ))}
          </div>
        </div>
      )}
      {!active && (
        <p className="text-gray-600">Click para leer mi mensaje de amor 💌</p>
      )}
    </div>
  );
}

export default Message;