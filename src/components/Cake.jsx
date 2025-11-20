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
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      maxWidth: '640px',
      padding: '0 1rem'
    }}>
      <div className="p-3 md:p-6">
        <div className="text-center mb-6 w-full flex justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 inline-block" style={{
            fontFamily: '"Pacifico", "Comic Sans MS", cursive',
            backgroundImage: 'linear-gradient(45deg, #ec4899, #a855f7, #ec4899)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-shift 3s ease infinite',
            textShadow: '0 0 30px rgba(236, 72, 153, 0.5)',
            letterSpacing: '0.05em',
            textAlign: 'center'
          }}>
          ¡FELIZ CUMPLEAÑOOS! 
          </h2>
        </div>
        
        <div className="flex flex-col items-center justify-center">
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

            {/* VELAS SUPERIORES - 5 velas */}
            <div className="candles-container candles-top">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={`top-${i}`} 
                  className="candle-wrapper"
                  style={{ 
                    position: 'absolute',
                    left: `${30 + i * 10}%`
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

            {/* VELAS MEDIAS - 7 velas */}
            <div className="candles-container candles-middle">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`middle-${i}`} 
                  className="candle-wrapper"
                  style={{ 
                    position: 'absolute',
                    left: `${20 + i * 10}%`
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

            {/* VELAS INFERIORES - 7 velas */}
            <div className="candles-container candles-bottom">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`bottom-${i}`} 
                  className="candle-wrapper"
                  style={{ 
                    position: 'absolute',
                    left: `${10 + i * 12}%`
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

          <div className="mt-6 w-full flex flex-col items-center" style={{ position: 'relative', overflow: 'hidden' }}>
            {blown ? (
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p className="text-2xl md:text-4xl font-bold mb-3 text-center animate-fade-in" style={{
                  fontFamily: '"Fredoka One", "Arial Black", sans-serif',
                  backgroundImage: 'linear-gradient(90deg, #ec4899, #a855f7, #ec4899)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 3s ease infinite, bounce 1s ease-in-out infinite',
                  textAlign: 'center'
                }}>
                  🎉 ¡Deseo Cumplido! 🎉
                </p>
                <p className="text-lg md:text-xl font-semibold text-center" style={{
                  fontFamily: '"Quicksand", "Helvetica", sans-serif',
                  color: '#a855f7',
                  textShadow: '0 2px 4px rgba(168, 85, 247, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite',
                  textAlign: 'center'
                }}>
                  
                </p>
              </div>
            ) : (
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p className="text-xl md:text-2xl font-bold mb-2 text-center" style={{
                  fontFamily: '"Quicksand", "Helvetica", sans-serif',
                  backgroundImage: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'pulse 2s ease-in-out infinite',
                  textAlign: 'center'
                }}>
                  🎂 sopla tus velitas!! 🕯️
                </p>
                <p className="text-base md:text-lg text-center" style={{
                  fontFamily: '"Pacifico", "Comic Sans MS", cursive',
                  color: '#ec4899',
                  textShadow: '0 2px 4px rgba(236, 72, 153, 0.3)',
                  animation: 'float 3s ease-in-out infinite',
                  textAlign: 'center'
                }}>
                  👆 Recuerda pedir un deseo 💭✨
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cake;