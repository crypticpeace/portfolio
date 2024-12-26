// src/components/ui/card.js

import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white border-2 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export { Card }; // Ensure you're using named export
