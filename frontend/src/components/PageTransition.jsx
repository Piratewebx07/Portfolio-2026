import React from 'react';

const PageTransition = ({ isTransitioning, children }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;