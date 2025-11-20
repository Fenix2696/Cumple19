import React, { useState } from "react";
import Cake from "./components/Cake";
import FloatingHearts from "./components/FloatingHearts";
import Album from "./components/Album";
import Confetti from "./components/Confetti";
import GreetingCard from "./components/GreetingCard";
import "./styles/animations.css";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);

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
          {!showCard && !showAlbum && (
            <div className="w-full">
              <Cake onBlown={handleCakeBlown} />
            </div>
          )}

          {showCard && !showAlbum && (
            <GreetingCard 
              onComplete={handleCardComplete}
              albumPages={greetingCardPages}
            />
          )}

          {showAlbum && (
            <Album pages={fullAlbumPages} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;