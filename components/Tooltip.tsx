'use client'
import React, { useState } from 'react';

const Tooltip = ({ children, text }: { children: React.ReactNode, text: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {show && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#000',
            color: '#0f0',
            border: '1px solid #0f0',
            padding: '5px',
            borderRadius: '3px',
            zIndex: 1,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
