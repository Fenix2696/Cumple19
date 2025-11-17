import React, { useEffect, useState } from "react";
import "../styles/confetti.css";

function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const confettiPieces = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 4,
      size: 6 + Math.random() * 8, // tamaño variable
      shape: Math.floor(Math.random() * 3), // 0: cuadrado, 1: círculo, 2: rectángulo
      color: [
        "#FFB6C1", // rosa claro
        "#DDA0DD", // morado claro
        "#FFE4E1", // rosa pálido
        "#FFC0CB", // rosa
        "#E6E6FA", // lavanda
        "#FFD700", // dorado
        "#FF69B4", // rosa fuerte
        "#87CEEB", // azul cielo
      ][Math.floor(Math.random() * 8)],
      rotation: Math.random() * 360,
      swing: (Math.random() - 0.5) * 100, // movimiento lateral
    }));

    setPieces(confettiPieces);
  }, []);

  const getShapeClass = (shape) => {
    switch (shape) {
      case 0:
        return "confetti-square";
      case 1:
        return "confetti-circle";
      case 2:
        return "confetti-rectangle";
      default:
        return "confetti-square";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute animate-confetti-fall ${getShapeClass(piece.shape)}`}
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
            width: `${piece.size}px`,
            height: piece.shape === 2 ? `${piece.size * 1.5}px` : `${piece.size}px`,
            '--swing': `${piece.swing}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;