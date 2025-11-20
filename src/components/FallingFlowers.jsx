import React, { useEffect, useRef, useCallback } from 'react';
import '../styles/flowers.css';

// Colores para gerberas (aleatorios) - MOVIDO FUERA DEL COMPONENTE
const gerberaColors = [
  { petal1: '#ff69b4', petal2: '#ff1493', name: 'Rosa Fucsia' },
  { petal1: '#ff1493', petal2: '#c71585', name: 'Rosa Intenso' },
  { petal1: '#da70d6', petal2: '#ba55d3', name: 'Orquídea' },
  { petal1: '#ee82ee', petal2: '#d8bfd8', name: 'Violeta' },
  { petal1: '#ffb6c1', petal2: '#ffc0cb', name: 'Rosa Claro' },
  { petal1: '#ff69b4', petal2: '#ffb6c1', name: 'Rosa Suave' },
  { petal1: '#ba55d3', petal2: '#9370db', name: 'Púrpura' },
  { petal1: '#dda0dd', petal2: '#d8bfd8', name: 'Ciruela' },
  { petal1: '#ff7f50', petal2: '#ff6347', name: 'Coral' },
  { petal1: '#ffa07a', petal2: '#ff8c69', name: 'Salmón' },
];

// Colores para hortensias (siempre azules) - MOVIDO FUERA DEL COMPONENTE
const hydrangeaColors = {
  main: '#6fb3e0',
  light: '#87ceeb',
  dark: '#4682b4',
  center: '#e6f3ff'
};

// Función para crear SVG de Gerbera - MOVIDO FUERA DEL COMPONENTE
const createGerbera = (color, size = 60) => {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 60 60">
        <g>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal1}" opacity="0.9"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal1}" opacity="0.9" transform="rotate(45 30 30)"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal2}" opacity="0.9" transform="rotate(90 30 30)"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal2}" opacity="0.9" transform="rotate(135 30 30)"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal1}" opacity="0.9" transform="rotate(180 30 30)"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal1}" opacity="0.9" transform="rotate(225 30 30)"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal2}" opacity="0.9" transform="rotate(270 30 30)"/>
          <ellipse cx="30" cy="10" rx="6" ry="12" fill="${color.petal2}" opacity="0.9" transform="rotate(315 30 30)"/>
          <circle cx="30" cy="30" r="8" fill="#ffd700"/>
          <circle cx="30" cy="30" r="6" fill="#ff8c00" opacity="0.8"/>
        </g>
  `;
};

// Función para crear SVG de Hortensia (azul) - MOVIDO FUERA DEL COMPONENTE
const createHydrangea = (size = 50) => {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 50 50">
        <g>
          <circle cx="15" cy="15" r="6" fill="${hydrangeaColors.light}" opacity="0.9"/>
          <circle cx="13" cy="13" r="2" fill="${hydrangeaColors.center}"/>
          
          <circle cx="35" cy="15" r="6" fill="${hydrangeaColors.main}" opacity="0.9"/>
          <circle cx="33" cy="13" r="2" fill="${hydrangeaColors.center}"/>
          
          <circle cx="15" cy="35" r="6" fill="${hydrangeaColors.main}" opacity="0.9"/>
          <circle cx="13" cy="33" r="2" fill="${hydrangeaColors.center}"/>
          
          <circle cx="35" cy="35" r="6" fill="${hydrangeaColors.light}" opacity="0.9"/>
          <circle cx="33" cy="33" r="2" fill="${hydrangeaColors.center}"/>
          
          <circle cx="25" cy="25" r="7" fill="${hydrangeaColors.dark}" opacity="0.9"/>
          <circle cx="23" cy="23" r="2.5" fill="${hydrangeaColors.center}"/>
          
          <circle cx="25" cy="12" r="5" fill="${hydrangeaColors.light}" opacity="0.9"/>
          <circle cx="23" cy="10" r="1.5" fill="${hydrangeaColors.center}"/>
          
          <circle cx="38" cy="25" r="5" fill="${hydrangeaColors.main}" opacity="0.9"/>
          <circle cx="36" cy="23" r="1.5" fill="${hydrangeaColors.center}"/>
        </g>
  `;
};

// Función para crear SVG de Gerbera grande para estáticas - MOVIDO FUERA DEL COMPONENTE
const createGerberaLarge = (color, size = 80) => {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 80 80">
        <g>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal1}" opacity="0.95"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal1}" opacity="0.95" transform="rotate(45 40 40)"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal2}" opacity="0.95" transform="rotate(90 40 40)"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal2}" opacity="0.95" transform="rotate(135 40 40)"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal1}" opacity="0.95" transform="rotate(180 40 40)"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal1}" opacity="0.95" transform="rotate(225 40 40)"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal2}" opacity="0.95" transform="rotate(270 40 40)"/>
          <ellipse cx="40" cy="15" rx="8" ry="16" fill="${color.petal2}" opacity="0.95" transform="rotate(315 40 40)"/>
          <circle cx="40" cy="40" r="10" fill="#ffd700"/>
          <circle cx="40" cy="40" r="7" fill="#ff8c00"/>
        </g>
  `;
};

// Función para crear SVG de Hortensia grande para estáticas - MOVIDO FUERA DEL COMPONENTE
const createHydrangeaLarge = (size = 70) => {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 70 70">
        <g>
          <circle cx="20" cy="20" r="8" fill="${hydrangeaColors.light}" opacity="0.95"/>
          <circle cx="18" cy="18" r="3" fill="${hydrangeaColors.center}"/>
          <circle cx="50" cy="20" r="8" fill="${hydrangeaColors.main}" opacity="0.95"/>
          <circle cx="48" cy="18" r="3" fill="${hydrangeaColors.center}"/>
          <circle cx="20" cy="50" r="8" fill="${hydrangeaColors.main}" opacity="0.95"/>
          <circle cx="18" cy="48" r="3" fill="${hydrangeaColors.center}"/>
          <circle cx="50" cy="50" r="8" fill="${hydrangeaColors.light}" opacity="0.95"/>
          <circle cx="48" cy="48" r="3" fill="${hydrangeaColors.center}"/>
          <circle cx="35" cy="35" r="10" fill="${hydrangeaColors.dark}" opacity="0.95"/>
          <circle cx="33" cy="33" r="4" fill="${hydrangeaColors.center}"/>
        </g>
  `;
};

// Función para obtener color aleatorio de gerbera - MOVIDO FUERA DEL COMPONENTE
const getRandomGerberaColor = () => {
  return gerberaColors[Math.floor(Math.random() * gerberaColors.length)];
};

const FallingFlowers = () => {
  const fallingContainerRef = useRef(null);
  const staticContainerRef = useRef(null);

  useEffect(() => {
    const fallingContainer = fallingContainerRef.current;
    const staticContainer = staticContainerRef.current;

    if (!fallingContainer || !staticContainer) return;

    // Generar flores cayendo (15 flores)
    const positions = [5, 10, 15, 25, 32, 40, 48, 55, 62, 70, 75, 82, 88, 93, 97];
    
    positions.forEach((pos, i) => {
      const flowerDiv = document.createElement('div');
      flowerDiv.className = 'flower';
      
      // Alternar entre gerbera y hortensia
      if (i % 3 === 0) {
        // Hortensia (siempre azul)
        flowerDiv.innerHTML = createHydrangea();
      } else {
        // Gerbera (color aleatorio)
        flowerDiv.innerHTML = createGerbera(getRandomGerberaColor());
      }
      
      // Estilos de animación
      const duration = 12 + Math.random() * 6; // 12-18 segundos
      const delay = Math.random() * 8; // 0-8 segundos
      const sway = (Math.random() - 0.5) * 100; // -50 a 50px
      
      flowerDiv.style.left = `${pos}%`;
      flowerDiv.style.animationDuration = `${duration}s`;
      flowerDiv.style.animationDelay = `${delay}s`;
      flowerDiv.style.setProperty('--sway', `${sway}px`);
      
      fallingContainer.appendChild(flowerDiv);
    });

    // Generar flores estáticas en las esquinas (4 flores)
    const staticPositions = [
      { top: '10%', left: '8%', delay: '0s', size: 80 },
      { top: '15%', right: '10%', delay: '1s', size: 70 },
      { bottom: '15%', left: '10%', delay: '2s', size: 75 },
      { bottom: '20%', right: '12%', delay: '1.5s', size: 65 }
    ];

    staticPositions.forEach((pos, index) => {
      const flowerDiv = document.createElement('div');
      flowerDiv.className = 'static-flower';
      
      // Alternar entre gerbera y hortensia
      if (index % 2 === 0) {
        // Gerbera grande (color aleatorio)
        flowerDiv.innerHTML = createGerberaLarge(getRandomGerberaColor(), pos.size);
      } else {
        // Hortensia grande (azul)
        flowerDiv.innerHTML = createHydrangeaLarge(pos.size);
      }
      
      // Aplicar posición
      Object.keys(pos).forEach(key => {
        if (key !== 'size') {
          flowerDiv.style[key] = pos[key];
        }
      });
      
      if (pos.delay) {
        flowerDiv.style.animationDelay = pos.delay;
      }
      
      staticContainer.appendChild(flowerDiv);
    });

    // Cleanup
    return () => {
      if (fallingContainer) {
        fallingContainer.innerHTML = '';
      }
      if (staticContainer) {
        staticContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Fondo suave de acuarela */}
      <div className="watercolor-bg"></div>
      
      {/* Flores cayendo */}
      <div className="falling-flowers" ref={fallingContainerRef}></div>
      
      {/* Flores estáticas */}
      <div ref={staticContainerRef}></div>
    </>
  );
};

export default FallingFlowers;