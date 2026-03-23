import React, { useState, useEffect } from 'react';
import { X, Award, Maximize2 } from 'lucide-react';
import { certificates } from '../data/mock';

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition-all duration-300"
        style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <img 
          src={certificate.image} 
          alt={certificate.title}
          className="w-full h-auto border-4 border-purple-500 shadow-2xl"
          style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
        />
        <div className="text-center mt-4">
          <p className="text-purple-400 font-mono text-sm">Press ESC to close</p>
        </div>
      </div>
    </div>
  );
};

const CertificateCard = ({ certificate, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-[#0a0e27] border-2 border-purple-500 overflow-hidden transition-all duration-300 hover:scale-105"
      style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}
    >
      {/* Certificate Image */}
      <div className="aspect-[4/3] overflow-hidden bg-black relative">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent opacity-60"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Maximize2 className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-4 text-left">
        <h3 className="text-white text-lg font-bold mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          {certificate.title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-purple-400 text-sm">{certificate.issuer}</span>
          <span className="text-purple-300 font-mono text-xs">{certificate.date}</span>
        </div>
      </div>
    </button>
  );
};

const Certificates = ({ onClose }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0e27] to-[#050510] py-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-2 flex items-center gap-4"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#a855f7',
                textShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
              }}
            >
              <Award className="w-12 h-12" />
              CERTIFICATES
            </h1>
            <p className="text-purple-300 font-mono">Achievements & Qualifications</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onClick={() => setSelectedCertificate(certificate)}
            />
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <p className="text-purple-400 text-sm font-mono mb-4">
            Click any certificate to view in full screen • Press ESC to close
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 border-2 border-purple-500 text-purple-500 font-bold font-mono hover:bg-purple-500 hover:text-black transition-all duration-300"
            style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}
          >
            [ BACK TO MENU ]
          </button>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
};

export default Certificates;
