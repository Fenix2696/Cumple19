import React, { useEffect, useState } from "react";
import "../styles/confetti.css";

function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 5 + Math.random() * 3,
      size: 8 + Math.random() * 6,
      shape: Math.floor(Math.random() * 3),
      color: [
        "#FFB6C1",
        "#DDA0DD",
        "#FFE4E1",
        "#FFC0CB",
        "#E6E6FA",
        "#FFD700",
        "#FF69B4",
        "#87CEEB",
      ][Math.floor(Math.random() * 8)],
      rotation: Math.random() * 360,
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
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;