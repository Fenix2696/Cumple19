import React from "react";
import { motion } from "framer-motion";

export default function FloatingHearts({ active }) {
  if (!active) return null;
  const hearts = Array.from({ length: 18 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${20 + Math.random() * 60}%`,
            bottom: `${-10 - Math.random() * 10}%`,
            fontSize: `${14 + Math.random() * 20}px`,
            opacity: 0.95,
            transform: `translateX(${(Math.random()-0.5)*40}px)`
          }}
          initial={{ y: 0, opacity: 0, scale: 0.6 }}
          animate={{ y: -350 - Math.random() * 160, opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.8] }}
          transition={{ duration: 2.6 + Math.random() * 1.2, delay: i * 0.08, ease: "easeOut" }}
        >
          <span style={{ color: "#ff8fc9" }}>❤️</span>
        </motion.div>
      ))}
    </div>
  );
}
