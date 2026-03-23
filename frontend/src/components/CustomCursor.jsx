import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prev => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);

      const target = e.target;
      setIsPointer(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x,
            top: point.y,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: '#00f0ff',
            opacity: (index + 1) / trail.length * 0.5,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s'
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className="w-8 h-8 border-2 border-cyan-400 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)',
            backgroundColor: isPointer ? 'rgba(0, 240, 255, 0.2)' : 'transparent'
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;