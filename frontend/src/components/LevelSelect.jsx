import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Code, Wrench } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectModal = ({ project, onClose, onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0a0e27] border-2 border-pink-500 my-8" style={{
        boxShadow: '0 0 40px rgba(255, 0, 110, 0.5)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span 
                className="text-pink-500 text-6xl font-bold"
                style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 20px rgba(255, 0, 110, 0.8)' }}
              >
                LV.{project.level}
              </span>
              <div>
                <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {project.title}
                </h2>
                <p className="text-pink-400 text-lg">{project.subtitle}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-transparent"></div>
          </div>

          {/* Image Carousel */}
          <div className="relative mb-8 group">
            <div className="aspect-video bg-black border-2 border-pink-900 overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-70 border-2 border-pink-500 text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-500 hover:text-black"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-70 border-2 border-pink-500 text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-500 hover:text-black"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 border border-pink-500 transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-pink-500 w-8' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-pink-500 font-bold text-xl mb-2 flex items-center gap-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <Code className="w-5 h-5" /> DESCRIPTION
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h3 className="text-pink-500 font-bold text-xl mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>ROLE</h3>
                <p className="text-white font-semibold">{project.role}</p>
              </div>

              <div>
                <h3 className="text-pink-500 font-bold text-xl mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>YEAR</h3>
                <p className="text-white font-mono">{project.year}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-pink-500 font-bold text-xl mb-2 flex items-center gap-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <Wrench className="w-5 h-5" /> CHALLENGES
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">{project.challenges}</p>
                <h4 className="text-green-400 font-semibold mb-2">SOLUTION:</h4>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-pink-500 font-bold text-xl mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border border-pink-500 text-pink-400 text-sm font-mono"
                      style={{ boxShadow: '0 0 5px rgba(255, 0, 110, 0.3)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-pink-900">
            <button
              onClick={() => onNavigate('prev')}
              disabled={project.level === 1}
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 font-bold font-mono hover:bg-pink-500 hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← PREV LEVEL
            </button>
            
            {/* Go to Game Button */}
            {project.gameUrl && (
              <a
                href={project.gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-pink-500 text-black font-bold font-mono hover:bg-pink-400 transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: '0 0 20px rgba(255, 0, 110, 0.6)' }}
              >
                🎮 GO TO GAME
              </a>
            )}
            
            <button
              onClick={() => onNavigate('next')}
              disabled={project.level === projects.length}
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 font-bold font-mono hover:bg-pink-500 hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              NEXT LEVEL →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LevelCard = ({ project, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-[#0a0e27] border-2 border-pink-500 overflow-hidden transition-all duration-300 hover:scale-105"
      style={{ boxShadow: '0 0 20px rgba(255, 0, 110, 0.3)' }}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-black">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="text-pink-500 text-3xl font-bold"
            style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 10px rgba(255, 0, 110, 0.8)' }}
          >
            LV.{project.level}
          </span>
          <div className="h-8 w-px bg-pink-500"></div>
          <div className="text-left">
            <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {project.title}
            </h3>
            <p className="text-pink-400 text-sm">{project.subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-pink-500 font-mono text-xs">{project.year}</span>
          <span className="text-green-400 font-mono text-xs uppercase">{project.status}</span>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: 'inset 0 0 30px rgba(255, 0, 110, 0.3)' }}
      ></div>
    </button>
  );
};

const LevelSelect = ({ onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigate = (direction) => {
    if (!selectedProject) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    
    if (direction === 'next' && currentIndex < projects.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else {
      return;
    }
    
    setSelectedProject(projects[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 110, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 110, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-2"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#ff006e',
                textShadow: '0 0 20px rgba(255, 0, 110, 0.8)'
              }}
            >
              SELECT LEVEL
            </h1>
            <p className="text-pink-300 font-mono">Choose a project to explore</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(255, 0, 110, 0.5)' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <LevelCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-bold font-mono hover:bg-pink-500 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(255, 0, 110, 0.5)' }}
          >
            [ BACK TO MENU ]
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
};

export default LevelSelect;