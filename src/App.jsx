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
      src: "/images/foto1.jpg", 
      text: "Mi amor… gracias por otro año a tu lado 💗" 
    },
    { 
      src: "/images/foto2.jpg", 
      text: "Eres todo para mi 💕" 
    },
    { 
      src: "/images/foto3.jpg", 
      text: "Feliz cumpleaños, princesa 🎀" 
    },
    { 
      src: "/images/foto4.jpg", 
      text: "Nuestros mejores momentos ✨" 
    },
    { 
      src: "/images/foto5.jpg", 
      text: "Te amo siempre 💖" 
    },
  ];

  const fullAlbumPages = [
    { 
      type: "image", 
      src: "/images/foto1.jpg", 
      text: "Mi amor… gracias por otro año a tu lado 💗" 
    },
    { 
      type: "image", 
      src: "/images/foto2.jpg", 
      text: "Eres todo para mi 💕" 
    },
    { 
      type: "video", 
      src: "/videos/video1.mp4", 
      text: "Nuestro momento favorito ❤️" 
    },
    { 
      type: "image", 
      src: "/images/foto3.jpg", 
      text: "Feliz cumpleaños, princesa 🎀" 
    },
    { 
      type: "image", 
      src: "/images/foto4.jpg", 
      text: "Nuestros mejores momentos ✨" 
    },
    { 
      type: "image", 
      src: "/images/foto5.jpg", 
      text: "Te amo siempre 💖" 
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-pink-100 via-purple-50 to-orange-50 overflow-hidden">
      <Confetti />
      <FloatingHearts active={showHearts} />

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
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
          <div className="w-full max-w-4xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-8">
              Álbum de recuerdos 💖
            </h1>
            <Album pages={fullAlbumPages} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;