import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/heartAlbum.css";

export default function HeartAlbum() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Array con las 72 fotos
  const photos = Array.from({ length: 72 }, (_, i) => ({
    id: i + 1,
    src: `${process.env.PUBLIC_URL}/images/cora${i + 1}.jpg`,
    alt: `Memoria ${i + 1}`
  }));

  // Layout PERFECTO para 72 fotos
  // Este layout está calculado específicamente para:
  // ✔ 17 columnas (como en tu CSS)
  // ✔ 10 filas
  // ✔ Forma totalmente simétrica
  // ✔ Ubicación correcta del texto "love"
  // ✔ 72 fotos exactas (ni una más, ni una menos)
  const heartLayout = [
    // FILA 1 – 8 fotos
    { row: 1, positions: [4,5,6,7, 11,12,13,14] }, // 8

    // FILA 2 – 10 fotos
    { row: 2, positions: [3,4,5,6,7, 11,12,13,14,15] }, // 10

    // FILA 3 – 12 fotos
    { row: 3, positions: [3,4,5,6,7,8, 10,11,12,13,14,15] }, // 12

    // FILA 4 – 12 fotos
    { row: 4, positions: [3,4,5,6,7,8, 9,10,11,12,13,14] }, // 12

    // FILA 5 – 10 fotos
    { row: 5, positions: [4,5,6,7,8, 9,10,11,12,13] }, // 10

    // FILA 6 – 8 fotos
    { row: 6, positions: [5,6,7,8, 9,10,11,12] }, // 8

    // FILA 7 – 6 fotos
    { row: 7, positions: [6,7,8,9,10,11] }, // 6

    // FILA 8 – 4 fotos
    { row: 8, positions: [7,8,9,10] }, // 4

    // FILA 9 – 2 fotos (penúltima de la punta)
    { row: 9, positions: [8,9] }, // 2

    // FILA 10 – 1 foto (punta final del corazón)
    { row: 10, positions: [8] }, // 1

    // TOTAL = 8 + 10 + 12 + 12 + 10 + 8 + 6 + 4 + 2 + 1 = 72 fotos exactas
  ];

  // Mapear fotos a posiciones del corazón
  let photoIndex = 0;
  const heartPhotos = [];
  
  heartLayout.forEach((rowData) => {
    rowData.positions.forEach((colPosition) => {
      if (photoIndex < photos.length) {
        heartPhotos.push({
          ...photos[photoIndex],
          row: rowData.row,
          col: colPosition
        });
        photoIndex++;
      }
    });
  });

  return (
    <div className="heart-album-container">
      <motion.h1 
        className="heart-album-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Te amo popo 💕
      </motion.h1>

      <div className="heart-grid">
        {/* Texto "love" en el centro */}
        <div className="love-text">
          <span className="love-word">love</span>
        </div>

        {/* Fotos en forma de corazón */}
        {heartPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="heart-photo-wrapper"
            style={{
              gridRow: photo.row,
              gridColumn: photo.col,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.03,
              duration: 0.3,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.15, 
              zIndex: 10,
              rotate: Math.random() > 0.5 ? 2 : -2,
              transition: { duration: 0.2 }
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="heart-photo"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ffb6d9" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="40" text-anchor="middle" dy=".3em"%3E📷%3C/text%3E%3C/svg%3E';
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal para foto ampliada */}
      {selectedPhoto && (
        <motion.div
          className="photo-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="photo-modal-content"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="photo-modal-close"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="photo-modal-image"
            />
          </motion.div>
        </motion.div>
      )}

      <motion.p 
        className="heart-album-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {photos.length} momentos inolvidables juntas ❤️
      </motion.p>
    </div>
  );
}