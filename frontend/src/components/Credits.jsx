import React from 'react';
import { X, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';
import { credits } from '../data/mock';

const Credits = ({ onClose }) => {
  const handleDownloadResume = () => {
    // This will be implemented when user uploads their resume
    const link = document.createElement('a');
    link.href = credits.resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 0, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 0, 0.2) 1px, transparent 1px)
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
                color: '#ffff00',
                textShadow: '0 0 20px rgba(255, 255, 0, 0.8)'
              }}
            >
              CREDITS
            </h1>
            <p className="text-yellow-300 font-mono">Contact & Information</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-[#0a0e27] border-2 border-yellow-400 p-8 md:p-12 mb-8 relative" style={{
          boxShadow: '0 0 30px rgba(255, 255, 0, 0.3), inset 0 0 30px rgba(255, 255, 0, 0.05)'
        }}>
          {/* Name and Title */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3"
              style={{ fontFamily: 'Orbitron, sans-serif', textShadow: '0 0 15px rgba(255, 255, 0, 0.6)' }}
            >
              {credits.name}
            </h2>
            <p className="text-2xl text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              {credits.title}
            </p>
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-4"></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 p-4 border border-yellow-900 transition-all duration-300 hover:border-yellow-400" style={{
              boxShadow: '0 0 10px rgba(255, 255, 0, 0.1)'
            }}>
              <Mail className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="text-gray-400 text-sm font-mono mb-1">EMAIL</div>
                <a href={`mailto:${credits.email}`} className="text-white text-lg hover:text-yellow-400 transition-colors">
                  {credits.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-yellow-900 transition-all duration-300 hover:border-yellow-400" style={{
              boxShadow: '0 0 10px rgba(255, 255, 0, 0.1)'
            }}>
              <Phone className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="text-gray-400 text-sm font-mono mb-1">PHONE</div>
                <a href={`tel:${credits.phone}`} className="text-white text-lg hover:text-yellow-400 transition-colors">
                  {credits.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CONNECT
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {credits.social.map((social, index) => {
                const IconComponent = Icons[social.icon] || Icons.Link;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 border border-yellow-900 transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-950 hover:bg-opacity-20 group"
                    style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.1)' }}
                  >
                    <IconComponent className="w-8 h-8 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-gray-400 text-sm font-mono group-hover:text-yellow-400 transition-colors">
                      {social.platform}
                    </span>
                    <ExternalLink className="w-3 h-3 text-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center pt-8 border-t-2 border-yellow-900">
            <h3 className="text-xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              DOWNLOAD RESUME
            </h3>
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold font-mono hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
              style={{ boxShadow: '0 0 20px rgba(255, 255, 0, 0.3)' }}
            >
              <Download className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" />
              DOWNLOAD RESUME.PDF
            </button>
            <p className="text-gray-500 text-sm mt-3 font-mono">[ Click To Download Resume ]</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-bold font-mono hover:bg-yellow-400 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)' }}
          >
            [ BACK TO MENU ]
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-yellow-900">
          <p className="text-gray-500 font-mono text-sm">
            © 2025 {credits.name}. All rights reserved.
          </p>
          <p className="text-gray-600 font-mono text-xs mt-2">
            GAME OVER? PRESS START TO CONTINUE...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;