import React from 'react';

function Balloons() {
  const balloons = [
    { color: 'bg-pink-300', delay: '0s', duration: '4s' },
    { color: 'bg-purple-300', delay: '0.5s', duration: '4.5s' },
    { color: 'bg-rose-300', delay: '1s', duration: '5s' },
    { color: 'bg-pink-300', delay: '1.5s', duration: '5.5s' },
    { color: 'bg-purple-300', delay: '2s', duration: '6s' },
    { color: 'bg-rose-300', delay: '2.5s', duration: '6.5s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {balloons.map((balloon, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${15 + i * 15}%`,
            bottom: '-10%',
            animationDelay: balloon.delay,
            animationDuration: balloon.duration
          }}
        >
          <div className={`w-12 h-16 rounded-full opacity-20 ${balloon.color}`}>
            <div className="w-0.5 h-8 bg-gray-300 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Balloons;