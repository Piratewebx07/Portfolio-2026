import React from 'react';
import { X, BookOpen, Trophy, Clock, Users } from 'lucide-react';
import { loreLog } from '../data/mock';

const LoreLog = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-2 flex items-center gap-4"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#39ff14',
                textShadow: '0 0 20px rgba(57, 255, 20, 0.8)'
              }}
            >
              <BookOpen className="w-12 h-12" />
              LORE LOG
            </h1>
            <p className="text-green-300 font-mono">The Origin Story</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(57, 255, 20, 0.5)' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-[#0a0e27] border-2 border-green-400 p-8 md:p-12 mb-8 relative" style={{
          boxShadow: '0 0 30px rgba(57, 255, 20, 0.3), inset 0 0 30px rgba(57, 255, 20, 0.05)'
        }}>
          {/* Title */}
          <div className="text-center mb-8">
            {/* Profile Image */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400" style={{
                  boxShadow: '0 0 30px rgba(57, 255, 20, 0.6)'
                }}>
                  <img 
                    src={loreLog.profileImage} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-ping opacity-20"></div>
              </div>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl font-bold text-green-400 mb-2"
              style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 15px rgba(57, 255, 20, 0.6)' }}
            >
              {loreLog.intro}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {loreLog.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-12 pt-8 border-t-2 border-green-900">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              PLAYER STATS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-green-900 transition-all duration-300 hover:border-green-400" style={{
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.1)'
              }}>
                <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {loreLog.stats.yearsExperience}
                </div>
                <div className="text-gray-400 text-sm font-mono">Years Experience</div>
              </div>
              
              <div className="text-center p-4 border border-green-900 transition-all duration-300 hover:border-green-400" style={{
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.1)'
              }}>
                <Trophy className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {loreLog.stats.projectsCompleted}
                </div>
                <div className="text-gray-400 text-sm font-mono">Projects Completed</div>
              </div>
              
              <div className="text-center p-4 border border-green-900 transition-all duration-300 hover:border-green-400" style={{
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.1)'
              }}>
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {loreLog.stats.gameJams}
                </div>
                <div className="text-gray-400 text-sm font-mono">Game Jams</div>
              </div>
              
              <div className="text-center p-4 border border-green-900 transition-all duration-300 hover:border-green-400" style={{
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.1)'
              }}>
                <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-400 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {loreLog.stats.dedication}
                </div>
                <div className="text-gray-400 text-sm font-mono">Dedication</div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 p-6 border-l-4 border-green-400 bg-green-950 bg-opacity-20">
            <p className="text-green-300 italic text-lg">
              "Every game should tell a story, every mechanic should serve a purpose, and every challenge should inspire innovation."
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 border-2 border-green-400 text-green-400 font-bold font-mono hover:bg-green-400 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(57, 255, 20, 0.5)' }}
          >
            [ BACK TO MENU ]
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoreLog;