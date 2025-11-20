import React from "react";
import { motion } from "framer-motion";

export default function FloatingHearts({ active }) {
  if (!active) return null;
  
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: 10 + (i * 4) % 80,
    delay: i * 0.12,
    duration: 2.5 + Math.random() * 0.8,
    size: 24 + Math.random() * 16,
    color: ['#ff69b4', '#ff1493', '#ff8fc9', '#ffb6d9', '#c71585'][Math.floor(Math.random() * 5)]
  }));

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ overflow: 'visible' }}
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            bottom: "-5%",
            fontSize: `${heart.size}px`,
            color: heart.color,
            filter: 'drop-shadow(0 2px 4px rgba(255, 105, 180, 0.4))'
          }}
          initial={{ 
            y: 0, 
            opacity: 0, 
            scale: 0.3,
            rotate: 0
          }}
          animate={{ 
            y: [-50, -400, -700], 
            opacity: [0, 1, 0.8, 0], 
            scale: [0.3, 1, 1.2, 0.8],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
            times: [0, 0.2, 0.7, 1]
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}