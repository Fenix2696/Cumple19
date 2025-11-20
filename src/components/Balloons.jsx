import React from 'react';

function Balloons() {
  const balloons = [
    { color: 'from-pink-400 to-pink-300', delay: '0s', duration: '5s', left: '5%' },
    { color: 'from-purple-400 to-purple-300', delay: '0.7s', duration: '5.5s', left: '15%' },
    { color: 'from-rose-400 to-rose-300', delay: '1.4s', duration: '6s', left: '25%' },
    { color: 'from-pink-400 to-pink-300', delay: '2.1s', duration: '5.8s', left: '75%' },
    { color: 'from-purple-400 to-purple-300', delay: '2.8s', duration: '6.2s', left: '85%' },
    { color: 'from-rose-400 to-rose-300', delay: '3.5s', duration: '5.5s', left: '95%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon, i) => (
        <div
          key={i}
          className="absolute animate-float-balloon"
          style={{
            left: balloon.left,
            bottom: '-15%',
            animationDelay: balloon.delay,
            animationDuration: balloon.duration
          }}
        >
          <div className={`relative w-14 h-20 md:w-16 md:h-24 rounded-full opacity-30 bg-gradient-to-b ${balloon.color} shadow-lg`}>
            {/* Balloon shine */}
            <div className="absolute top-3 left-3 w-4 h-6 bg-white/40 rounded-full blur-sm"></div>
            
            {/* String */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-16 md:h-20 bg-gray-400/50"></div>
            
            {/* Knot */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-3 bg-gray-500/50 rounded-full"></div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float-balloon {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--drift, 20px)) rotate(var(--rotate, 15deg));
            opacity: 0;
          }
        }
        
        .animate-float-balloon {
          animation-name: float-balloon;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          --drift: ${Math.random() * 40 - 20}px;
          --rotate: ${Math.random() * 30 - 15}deg;
        }
      `}</style>
    </div>
  );
}

export default Balloons;