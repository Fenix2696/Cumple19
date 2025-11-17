import React from "react";
import { motion } from "framer-motion";

export default function FloatingHearts({ active }) {
  if (!active) return null;
  const hearts = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${15 + Math.random() * 70}%`,
            bottom: "-5%",
            fontSize: `${20 + Math.random() * 20}px`,
          }}
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{ 
            y: [-50, -300, -500], 
            opacity: [0, 1, 0], 
            scale: [0.5, 1.2, 0.8] 
          }}
          transition={{ 
            duration: 2.5 + Math.random() * 1, 
            delay: i * 0.15, 
            ease: "easeOut" 
          }}
        >
          <span style={{ color: "#ff8fc9" }}>❤️</span>
        </motion.div>
      ))}
    </div>
  );
}