import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Album({ pages = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < pages.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const pageAnim = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, scale: 0.95, y: -20 },
  };

  if (!pages || pages.length === 0) {
    return (
      <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 w-full max-w-2xl mx-auto text-center">
        <p className="text-purple-500 text-lg">No hay páginas para mostrar</p>
      </div>
    );
  }

  return (
    <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={pageAnim}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-md mb-4">
            {pages[index].type === "image" ? (
              <img
                src={pages[index].src}
                alt={pages[index].text || "Foto"}
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-6xl">📷</div>';
                }}
              />
            ) : (
              <video
                src={pages[index].src}
                controls
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center text-6xl">🎥</div>';
                }}
              />
            )}
          </div>

          <p className="text-pink-600 text-lg font-medium">
            {pages[index].text || ""}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prev}
          disabled={index === 0}
          className={`p-2 rounded-full bg-pink-200 text-pink-600 shadow-md transition 
            ${index === 0 ? "opacity-40 cursor-default" : "hover:bg-pink-300"}`}
        >
          <ArrowLeft />
        </button>

        <p className="text-purple-500 font-semibold">
          Página {index + 1} / {pages.length}
        </p>

        <button
          onClick={next}
          disabled={index === pages.length - 1}
          className={`p-2 rounded-full bg-pink-200 text-pink-600 shadow-md transition 
            ${index === pages.length - 1 ? "opacity-40 cursor-default" : "hover:bg-pink-300"}`}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}