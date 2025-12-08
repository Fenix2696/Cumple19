import React, { useState } from "react";
import Cake from "./components/Cake";
import FloatingHearts from "./components/FloatingHearts";
import Album from "./components/Album";
import Confetti from "./components/Confetti";
import GreetingCard from "./components/GreetingCard";
import FallingFlowers from "./components/FallingFlowers";
import HeartAlbum from "./components/HeartAlbum";
import "./styles/animations.css";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showHeartAlbum, setShowHeartAlbum] = useState(false);

  const handleCakeBlown = () => {
    setShowHearts(true);
    setTimeout(() => {
      setShowHearts(false);
      setShowCard(true);
    }, 2500);
  };

  const handleCardComplete = () => {
    setShowCard(false);
    setShowAlbum(true);
  };

  const greetingCardPages = [
    { 
      src: `${process.env.PUBLIC_URL}/images/foto1.jpg`, 
      text: "Cada día a tu lado es un regalo 🎁" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/foto2.jpg`, 
      text: "Eres todo para mi 💕" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/foto3.jpg`, 
      text: "Que este día sea tan dulce y maravilloso como tú 🎀" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/foto4.jpg`, 
      text: "Para mi persona favorita en el mundo entero 🫶🏻🫶🏻" 
    },
    { 
      src: `${process.env.PUBLIC_URL}/images/foto5.jpg`, 
      text: "Feliz cumpleaños a mi milagro cotidiano ✨✨ " 
    },
  ];

  // Collage de 8 fotos (el mensaje "Happy Birthday" irá en el centro automáticamente)
  const fullAlbumPages = [
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto1.jpg`, 
      text: " Tu sonrisa ilumina mi mundo 💗" 
    },
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto2.jpg`, 
      text: "Gracias por llenar mi vida de amor y felicidad 💕" 
    },
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto3.jpg`, 
      text: "Quiero seguir disfrutando de tus ocurrencias 👉🏻👈🏻" 
    },
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto4.jpg`, 
      text: "Quiero verte siempre feliz✨" 
    },
    // La posición 5 (centro) será ocupada por "Happy Birthday"
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto5.jpg`, 
      text: "Amo tu forma de ser 💖" 
    },
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto6.jpg`, 
      text: " Feliz cumpleaños!!! 🎂🎂" 
    },
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto7.jpg`, 
      text: " Ya lo vi jefe!! 🚔🚨 " 
    },
    { 
      type: "image", 
      src: `${process.env.PUBLIC_URL}/images/foto8.jpg`, 
      text: "Y nunca olvides a la niña que llevas dentro ❤️‍🩹❤️‍🩹" 
    },
  ];

  return (
    <>
      {/* Confetti FUERA del contenedor principal - CRITICAL para móviles */}
      <Confetti />
      
      {/* Flores cayendo - Nuevo componente */}
      <FallingFlowers />
      
      {/* Contenedor principal SIN overflow-hidden */}
      <div 
        className="min-h-screen relative bg-gradient-to-br from-pink-100 via-purple-50 to-orange-50"
        style={{ overflow: 'visible', width: '100%' }}
      >
        <FloatingHearts active={showHearts} />

        <div 
          className="relative z-10"
          style={{ overflow: 'visible', width: '100%', maxWidth: '100vw' }}
        >
          {!showCard && !showAlbum && !showHeartAlbum && (
            <div className="w-full">
              <Cake onBlown={handleCakeBlown} />
            </div>
          )}

          {showCard && !showAlbum && !showHeartAlbum && (
            <GreetingCard 
              onComplete={handleCardComplete}
              albumPages={greetingCardPages}
            />
          )}

          {showAlbum && !showHeartAlbum && (
            <div className="w-full">
              <Album pages={fullAlbumPages} />
              
              {/* Botón mejorado para ver el álbum de corazón */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '3rem', 
                marginBottom: '2rem' 
              }}>
                <button
                  onClick={() => setShowHeartAlbum(true)}
                  style={{
                    position: 'relative',
                    padding: '1.25rem 2.5rem',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: 'white',
                    background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #a855f7 100%)',
                    border: 'none',
                    borderRadius: '2rem',
                    boxShadow: '0 15px 40px rgba(236, 72, 153, 0.5), 0 5px 20px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    overflow: 'visible',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(236, 72, 153, 0.6), 0 10px 30px rgba(168, 85, 247, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(236, 72, 153, 0.5), 0 5px 20px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    letterSpacing: '0.05em'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>✨</span>
                    <span>💕 Ver Álbum Especial 💕</span>
                    <span style={{ fontSize: '1.5rem' }}>✨</span>
                  </span>
                </button>
              </div>
            </div>
          )}

          {showHeartAlbum && (
            <div className="w-full">
              <HeartAlbum />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;