import React, { useState } from 'react';
import '../styles/cake.css';

function Cake({ onBlown }) {
  const [blown, setBlown] = useState(false);

  const handleBlow = (e) => {
    e.stopPropagation();
    if (blown) return;
    
    setBlown(true);
    
    // Llamar al callback después de ver la animación completa
    if (onBlown) {
      setTimeout(() => {
        onBlown();
      }, 2500);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-5xl">🎂</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            ¡Tu Pastel Especial!
          </h2>
        </div>
        
        <div className="flex flex-col items-center py-8">
          <div 
            className="cake-3d-container"
            onClick={handleBlow}
            style={{ cursor: blown ? 'default' : 'pointer' }}
          >
            {/* PLATO */}
            <div className="cake-plate">
              <div className="plate-shine"></div>
            </div>

            {/* PASTEL BASE (Capa 1) */}
            <div className="cake-layer cake-layer-1">
              <div className="cake-layer-top"></div>
              <div className="cake-layer-side"></div>
              
              {/* Decoración - Flores */}
              <div className="cake-flowers flowers-layer-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flower" style={{ 
                    left: `${15 + i * 14}%`,
                    transform: `rotate(${i * 60}deg)`
                  }}>
                    <div className="petal"></div>
                    <div className="petal"></div>
                    <div className="petal"></div>
                    <div className="petal"></div>
                    <div className="petal"></div>
                    <div className="flower-center"></div>
                  </div>
                ))}
              </div>

              <div className="cream-texture texture-1"></div>
            </div>

            {/* PASTEL MEDIO (Capa 2) */}
            <div className="cake-layer cake-layer-2">
              <div className="cake-layer-top layer-2-top"></div>
              <div className="cake-layer-side layer-2-side"></div>
              
              <div className="wavy-decoration"></div>
              
              <div className="strawberry-decoration">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="mini-strawberry" style={{
                    left: `${20 + i * 20}%`
                  }}>
                    <div className="strawberry-leaf-mini"></div>
                  </div>
                ))}
              </div>

              <div className="cream-texture texture-2"></div>
            </div>

            {/* PASTEL SUPERIOR (Capa 3) */}
            <div className="cake-layer cake-layer-3">
              <div className="cake-layer-top layer-3-top"></div>
              <div className="cake-layer-side layer-3-side"></div>
              
              <div className="center-rose">
                <div className="rose-petal"></div>
                <div className="rose-petal"></div>
                <div className="rose-petal"></div>
                <div className="rose-petal"></div>
                <div className="rose-center"></div>
              </div>

              <div className="cream-texture texture-3"></div>
            </div>

            {/* GLASEADO CHORREANDO */}
            <div className="icing-drip-improved drip-1"></div>
            <div className="icing-drip-improved drip-2"></div>

            {/* VELAS CAPA SUPERIOR - 5 VELAS */}
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
                    <div className="candle-wax-drip"></div>
                    <div className="candle-shine-improved"></div>
                    <div className="candle-wick"></div>
                  </div>
                  
                  {!blown && (
                    <div 
                      className="flame-container-improved"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <div className="flame-outer-glow"></div>
                      <div className="flame-improved">
                        <div className="flame-core"></div>
                        <div className="flame-highlight"></div>
                      </div>
                      <div className="flame-base"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="extinguish-effect" style={{ animationDelay: `${i * 0.08}s` }}>
                      <div className="ember"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="smoke-trail">
                      <div className="smoke-puff puff-1" style={{ animationDelay: `${i * 0.08}s` }}></div>
                      <div className="smoke-puff puff-2" style={{ animationDelay: `${i * 0.08 + 0.15}s` }}></div>
                      <div className="smoke-puff puff-3" style={{ animationDelay: `${i * 0.08 + 0.3}s` }}></div>
                      <div className="smoke-wisp wisp-1" style={{ animationDelay: `${i * 0.08 + 0.1}s` }}></div>
                      <div className="smoke-wisp wisp-2" style={{ animationDelay: `${i * 0.08 + 0.25}s` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* VELAS CAPA MEDIA - 7 VELAS */}
            <div className="candles-container candles-middle">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`middle-${i}`} 
                  className="candle-wrapper candle-medium"
                  style={{ 
                    transform: `translateX(${(i - 3) * 42}px)`
                  }}
                >
                  <div className="candle-stick-improved">
                    <div className="candle-wax-drip"></div>
                    <div className="candle-shine-improved"></div>
                    <div className="candle-wick"></div>
                  </div>
                  
                  {!blown && (
                    <div 
                      className="flame-container-improved"
                      style={{ animationDelay: `${(i + 5) * 0.15}s` }}
                    >
                      <div className="flame-outer-glow"></div>
                      <div className="flame-improved">
                        <div className="flame-core"></div>
                        <div className="flame-highlight"></div>
                      </div>
                      <div className="flame-base"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="extinguish-effect" style={{ animationDelay: `${(i + 5) * 0.08}s` }}>
                      <div className="ember"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="smoke-trail">
                      <div className="smoke-puff puff-1" style={{ animationDelay: `${(i + 5) * 0.08}s` }}></div>
                      <div className="smoke-puff puff-2" style={{ animationDelay: `${(i + 5) * 0.08 + 0.15}s` }}></div>
                      <div className="smoke-puff puff-3" style={{ animationDelay: `${(i + 5) * 0.08 + 0.3}s` }}></div>
                      <div className="smoke-wisp wisp-1" style={{ animationDelay: `${(i + 5) * 0.08 + 0.1}s` }}></div>
                      <div className="smoke-wisp wisp-2" style={{ animationDelay: `${(i + 5) * 0.08 + 0.25}s` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* VELAS CAPA INFERIOR - 7 VELAS */}
            <div className="candles-container candles-bottom">
              {[...Array(7)].map((_, i) => (
                <div 
                  key={`bottom-${i}`} 
                  className="candle-wrapper candle-large"
                  style={{ 
                    transform: `translateX(${(i - 3) * 50}px)`
                  }}
                >
                  <div className="candle-stick-improved">
                    <div className="candle-wax-drip"></div>
                    <div className="candle-shine-improved"></div>
                    <div className="candle-wick"></div>
                  </div>
                  
                  {!blown && (
                    <div 
                      className="flame-container-improved"
                      style={{ animationDelay: `${(i + 12) * 0.15}s` }}
                    >
                      <div className="flame-outer-glow"></div>
                      <div className="flame-improved">
                        <div className="flame-core"></div>
                        <div className="flame-highlight"></div>
                      </div>
                      <div className="flame-base"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="extinguish-effect" style={{ animationDelay: `${(i + 12) * 0.08}s` }}>
                      <div className="ember"></div>
                    </div>
                  )}

                  {blown && (
                    <div className="smoke-trail">
                      <div className="smoke-puff puff-1" style={{ animationDelay: `${(i + 12) * 0.08}s` }}></div>
                      <div className="smoke-puff puff-2" style={{ animationDelay: `${(i + 12) * 0.08 + 0.15}s` }}></div>
                      <div className="smoke-puff puff-3" style={{ animationDelay: `${(i + 12) * 0.08 + 0.3}s` }}></div>
                      <div className="smoke-wisp wisp-1" style={{ animationDelay: `${(i + 12) * 0.08 + 0.1}s` }}></div>
                      <div className="smoke-wisp wisp-2" style={{ animationDelay: `${(i + 12) * 0.08 + 0.25}s` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* PARTÍCULAS DE LUZ */}
            {!blown && (
              <div className="light-particles">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="light-particle"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${5 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            )}

            {/* CONFETI AL SOPLAR */}
            {blown && (
              <div className="celebration-confetti">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="confetti-improved"
                    style={{
                      left: '50%',
                      '--angle': `${(i / 30) * 360}deg`,
                      '--distance': `${100 + Math.random() * 100}px`,
                      backgroundColor: ['#FFB6C1', '#DDA0DD', '#87CEEB', '#98FB98', '#FFD700', '#FF69B4'][i % 6],
                      animationDelay: `${i * 0.03}s`,
                      animationDuration: `${1.2 + Math.random() * 0.6}s`
                    }}
                  ></div>
                ))}
              </div>
            )}

            {blown && (
              <div className="wish-granted">
                <div className="wish-text">¡Deseo Cumplido!</div>
                <div className="wish-stars">✨💫✨</div>
              </div>
            )}
          </div>

          <p className="text-center mt-8 text-purple-600 font-bold text-xl">
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