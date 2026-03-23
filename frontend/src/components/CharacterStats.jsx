import React from 'react';
import { X, TrendingUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import { skills } from '../data/mock';

const StatBar = ({ skill }) => {
  const IconComponent = Icons[skill.icon] || Icons.Star;
  
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <IconComponent className="w-5 h-5 text-cyan-400" />
          <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            {skill.name}
          </span>
        </div>
        <span className="text-cyan-400 font-bold font-mono">{skill.level}%</span>
      </div>
      <div className="relative h-3 bg-[#0a0e27] border border-cyan-900 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
          }}
        >
          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const CharacterStats = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-2"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#00f0ff',
                textShadow: '0 0 20px rgba(0, 240, 255, 0.8)'
              }}
            >
              CHARACTER STATS
            </h1>
            <p className="text-cyan-300 font-mono flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Skill Proficiency Overview
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Stats Container */}
        <div className="bg-[#0a0e27] border-2 border-cyan-400 p-8 md:p-12" style={{
          boxShadow: '0 0 30px rgba(0, 240, 255, 0.3), inset 0 0 30px rgba(0, 240, 255, 0.05)'
        }}>
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-cyan-400"></div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CORE ABILITIES
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>

          {skills.map((skill, index) => (
            <StatBar key={index} skill={skill} />
          ))}

          {/* Overall Stats */}
          <div className="mt-12 pt-8 border-t-2 border-cyan-900">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>4+</div>
                <div className="text-gray-400 text-sm font-mono">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>3+</div>
                <div className="text-gray-400 text-sm font-mono">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>5+</div>
                <div className="text-gray-400 text-sm font-mono">Game Jams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>100%</div>
                <div className="text-gray-400 text-sm font-mono">Dedication</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={onClose}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}
          >
            [ BACK TO MENU ]
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterStats;