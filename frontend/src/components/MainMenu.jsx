import React from 'react';
import { User, Map, BookOpen, Award, Sword, Shield, Sparkles, Flame, Heart, Gem } from 'lucide-react';

const MenuBox = ({ title, icon: Icon, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-gradient-to-br from-[#0f1435] to-[#0a0e27] border-2 p-8 transition-all duration-500 focus:outline-none"
      style={{
        borderColor: color,
        boxShadow: `0 10px 30px ${color}20`,
        transform: 'translateZ(0)',
        perspective: '1000px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) rotateX(8deg) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 25px 50px ${color}, inset 0 0 30px ${color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
        e.currentTarget.style.boxShadow = `0 10px 30px ${color}20`;
      }}
    >
      <div className="flex flex-col items-center gap-4 relative z-10">
        <div 
          className="p-4 rounded-xl transition-all duration-500 group-hover:scale-110"
          style={{ 
            backgroundColor: `${color}15`,
            boxShadow: `0 0 30px ${color}40`
          }}
        >
          <Icon 
            className="w-16 h-16 transition-all duration-500" 
            style={{ 
              color: color,
              filter: `drop-shadow(0 0 12px ${color})`
            }}
          />
        </div>
        <h3 
          className="text-2xl font-bold tracking-wider transition-all duration-300 group-hover:scale-105"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: color,
            textShadow: `0 0 15px ${color}80, 0 0 30px ${color}40`
          }}
        >
          {title}
        </h3>
      </div>

      {/* Animated bottom line */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ 
          backgroundColor: color, 
          boxShadow: `0 0 20px ${color}` 
        }}
      ></div>
      
      {/* Corner glow effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}10 0%, transparent 70%)`
        }}
      ></div>
    </button>
  );
};

const MainMenu = ({ onSelectMenu }) => {
  const menuItems = [
    { title: 'CHARACTER STATS', icon: User, action: 'stats', color: '#00f0ff' },
    { title: 'SELECT LEVEL', icon: Map, action: 'levels', color: '#ff006e' },
    { title: 'LORE LOG', icon: BookOpen, action: 'lore', color: '#39ff14' },
    { title: 'CERTIFICATES', icon: Award, action: 'certificates', color: '#a855f7' },
    { title: 'CREDITS', icon: Award, action: 'credits', color: '#ffff00' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] py-12 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Gaming Icons */}
      <Sword className="absolute top-32 left-16 w-10 h-10 text-cyan-400 opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <Shield className="absolute top-40 right-24 w-12 h-12 text-pink-400 opacity-15 animate-bounce" style={{ animationDuration: '3s' }} />
      <Sparkles className="absolute bottom-48 left-32 w-8 h-8 text-yellow-400 opacity-25 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <Flame className="absolute bottom-40 right-40 w-10 h-10 text-red-400 opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <Heart className="absolute top-1/2 left-20 w-7 h-7 text-pink-300 opacity-15 animate-bounce" style={{ animationDuration: '4s' }} />
      <Gem className="absolute top-1/2 right-28 w-9 h-9 text-purple-400 opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              background: 'linear-gradient(90deg, #00f0ff 0%, #ff006e 50%, #39ff14 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5))'
            }}
          >
            MAIN MENU
          </h1>
          <p className="text-cyan-300 text-lg font-mono">SELECT YOUR QUEST</p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <MenuBox
              key={item.action}
              title={item.title}
              icon={item.icon}
              color={item.color}
              onClick={() => onSelectMenu(item.action)}
            />
          ))}
        </div>

        {/* Footer Hint */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm font-mono animate-pulse">[ ESC ] to return to start</p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;