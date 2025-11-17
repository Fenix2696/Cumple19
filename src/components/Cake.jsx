import React, { useState } from 'react';
import '../styles/cake.css';

function Cake({ onBlown }) {
  const [blown, setBlown] = useState(false);

  const handleBlow = (e) => {
    e.stopPropagation();
    if (blown) return;
    
    setBlown(true);
    
    if (onBlown) {
      setTimeout(() => {
        onBlown();
      }, 2500);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
          <span className="text-3xl md:text-5xl">🎂</span>
          <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            ¡Tu Pastel Especial!
          </h2>
        </div>
        
        <div className="flex flex-col items-center py-4 md:py-8">
          <div 
            className="cake-3d-container"
            onClick={handleBlow}
            style={{ cursor: blown ? 'default' : 'pointer' }}
          >
            <div className="cake-plate">
              <div className="plate-shine"></div>
            </div>

            <div className="cake-layer cake-layer-1">
              <div className="cake-layer-top"></div>
              <div className="cake-layer-side"></div>
            </div>

            <div className="cake-layer cake-layer-2">
              <div className="cake-layer-top layer-2-top"></div>
              <div className="cake-layer-side layer-2-side"></div>
            </div>

            <div className="cake-layer cake-layer-3">
              <div className="cake-layer-top layer-3-top"></div>
              <div className="cake-layer-side layer-3-side"></div>
            </div>

            {/* VELAS SUPERIORES */}
            <div className="candles-container candles-top">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`top-${i}`} 
                  className="candle-wrapper"
                  style={{ 
                    transform: `translateX(${(i - 2) * 38}px)`
                  }}
                >
                  <div className="candle-stick-improved">
                    <div className="candle-wick"></div>
                  </div>
                  
                  {!blown && (
                    <div 
                      className="flame-container-improved"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <div className="flame-improved"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="smoke-trail">
                      <div className="smoke-puff puff-1" style={{ animationDelay: `${i * 0.08}s` }}></div>
                      <div className="smoke-puff puff-2" style={{ animationDelay: `${i * 0.08 + 0.15}s` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* VELAS MEDIAS */}
            <div className="candles-container candles-middle">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`middle-${i}`} 
                  className="candle-wrapper"
                  style={{ 
                    transform: `translateX(${(i - 3) * 42}px)`
                  }}
                >
                  <div className="candle-stick-improved">
                    <div className="candle-wick"></div>
                  </div>
                  
                  {!blown && (
                    <div 
                      className="flame-container-improved"
                      style={{ animationDelay: `${(i + 5) * 0.15}s` }}
                    >
                      <div className="flame-improved"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="smoke-trail">
                      <div className="smoke-puff puff-1" style={{ animationDelay: `${(i + 5) * 0.08}s` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* VELAS INFERIORES */}
            <div className="candles-container candles-bottom">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`bottom-${i}`} 
                  className="candle-wrapper"
                  style={{ 
                    transform: `translateX(${(i - 3) * 50}px)`
                  }}
                >
                  <div className="candle-stick-improved">
                    <div className="candle-wick"></div>
                  </div>
                  
                  {!blown && (
                    <div 
                      className="flame-container-improved"
                      style={{ animationDelay: `${(i + 12) * 0.15}s` }}
                    >
                      <div className="flame-improved"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="smoke-trail">
                      <div className="smoke-puff puff-1" style={{ animationDelay: `${(i + 12) * 0.08}s` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {blown && (
              <div className="wish-granted">
                <div className="wish-text">¡Deseo Cumplido!</div>
                <div className="wish-stars">✨💫✨</div>
              </div>
            )}
          </div>

          <p className="text-center mt-4 md:mt-8 text-purple-600 font-bold text-base md:text-xl px-4">
            {blown ? (
              <span className="animate-bounce inline-block">
                🎉 ¡Tu deseo fue escuchado! 💖✨
              </span>
            ) : (
              <span className="animate-pulse">
                🎂 Haz clic en el pastel para soplar las velitas 🕯️
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cake;