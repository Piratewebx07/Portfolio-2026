import React, { useState, useEffect } from 'react';
import { Gamepad2, Zap, Star, Target, Trophy, Cpu } from 'lucide-react';

const StartScreen = ({ onStart }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={onStart}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.05) 0px, transparent 2px, transparent 4px)',
        animation: 'scanline 8s linear infinite'
      }}></div>

      {/* Floating Gaming Icons */}
      <Zap className="absolute top-20 left-10 w-8 h-8 text-cyan-400 opacity-30 animate-pulse" />
      <Star className="absolute top-32 right-20 w-6 h-6 text-pink-400 opacity-40 animate-bounce" style={{ animationDuration: '3s' }} />
      <Target className="absolute bottom-40 left-20 w-10 h-10 text-yellow-400 opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <Trophy className="absolute bottom-32 right-32 w-8 h-8 text-green-400 opacity-30 animate-bounce" style={{ animationDuration: '4s' }} />
      <Cpu className="absolute top-1/3 left-32 w-7 h-7 text-purple-400 opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
      <Gamepad2 className="absolute bottom-1/3 right-24 w-9 h-9 text-cyan-300 opacity-20 animate-bounce" style={{ animationDuration: '5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 flex justify-center">
          <Gamepad2 
            className="w-24 h-24 text-cyan-400 animate-pulse" 
            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.8))' }}
          />
        </div>
        
        <h1 
          className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-200 ${
            glitch ? 'glitch-effect' : ''
          }`}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: '#00f0ff',
            textShadow: '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.6), 0 0 30px rgba(0, 240, 255, 0.4)'
          }}
        >
          PORTFOLIO
        </h1>
        
        <div className="relative inline-block">
          <p 
            className="text-2xl md:text-3xl text-white font-mono animate-pulse"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          >
            [ CLICK ANYWHERE TO BEGIN ]
          </p>
          <div className="absolute -inset-2 border-2 border-cyan-400 opacity-50 animate-ping"></div>
        </div>

        <p className="mt-8 text-cyan-300 text-sm font-mono">Game Designer • Level Designer</p>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }

        .glitch-effect {
          animation: glitch 0.3s ease-in-out;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  );
};

export default StartScreen;