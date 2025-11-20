import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/album.css";

export default function Album({ pages = [] }) {
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    setLoadedImages(0);
    const timer = setInterval(() => {
      setLoadedImages(prev => {
        if (prev < 9) return prev + 1; // 8 fotos + 1 mensaje = 9 items
        clearInterval(timer);
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [pages.length]);

  if (!pages || pages.length === 0) {
    return (
      <div className="collage-empty">
        <p>No hay fotos para mostrar 📷</p>
      </div>
    );
  }

  // Tomar solo las primeras 8 fotos para el collage
  const displayPages = pages.slice(0, 8);

  return (
    <div className="collage-container">
      {/* Título del collage */}
      <motion.div 
        className="collage-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="collage-title">
         🎉🎉 FELICES 19🎉🎉
        </h1>
        <p className="collage-subtitle">
          ✨ Cada foto lleva un mensaje ✨
        </p>
      </motion.div>

      {/* Grid del collage - 3x3 con mensaje en el centro */}
      <div className="collage-grid">
        {displayPages.map((page, index) => {
          // Insertar mensaje en la posición central (índice 4)
          if (index === 4) {
            return (
              <React.Fragment key="center-message">
                {/* Mensaje central */}
                <motion.div
                  className="collage-item loaded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 4 * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <div className="collage-center-message">
                    <p className="center-message-text">Happy</p>
                    <p className="center-message-text">Birthday</p>
                    <span className="center-message-emoji">🎂</span>
                  </div>
                </motion.div>

                {/* Continuar con la foto del índice 4 */}
                <motion.div
                  key={index}
                  className={`collage-item ${index < loadedImages ? 'loaded' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={index < loadedImages ? { 
                    opacity: 1, 
                    scale: 1 
                  } : {}}
                  transition={{ 
                    duration: 0.6,
                    delay: (index + 1) * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <div className="collage-photo-wrapper">
                    {page.type === "video" ? (
                      <video
                        src={page.src}
                        className="collage-photo"
                        controls
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="collage-placeholder">🎥</div>';
                        }}
                      />
                    ) : (
                      <img
                        src={page.src}
                        alt={page.text || `Foto ${index + 1}`}
                        className="collage-photo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="collage-placeholder">📷</div>';
                        }}
                      />
                    )}
                    
                    {page.text && (
                      <div className="collage-overlay">
                        <p className="collage-text">{page.text}</p>
                      </div>
                    )}
                    
                    <div className="collage-frame"></div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          }

          return (
            <motion.div
              key={index}
              className={`collage-item ${index < loadedImages ? 'loaded' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={index < loadedImages ? { 
                opacity: 1, 
                scale: 1 
              } : {}}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
            >
              <div className="collage-photo-wrapper">
                {page.type === "video" ? (
                  <video
                    src={page.src}
                    className="collage-photo"
                    controls
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="collage-placeholder">🎥</div>';
                    }}
                  />
                ) : (
                  <img
                    src={page.src}
                    alt={page.text || `Foto ${index + 1}`}
                    className="collage-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="collage-placeholder">📷</div>';
                    }}
                  />
                )}
                
                {page.text && (
                  <div className="collage-overlay">
                    <p className="collage-text">{page.text}</p>
                  </div>
                )}
                
                <div className="collage-frame"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Decoraciones flotantes */}
      <div className="collage-decorations">
        <span className="floating-heart heart-1">💕</span>
        <span className="floating-heart heart-2">💖</span>
        <span className="floating-heart heart-3">💗</span>
        <span className="floating-heart heart-4">💝</span>
        <span className="floating-star star-1">✨</span>
        <span className="floating-star star-2">⭐</span>
        <span className="floating-star star-3">🌟</span>
      </div>
    </div>
  );
}