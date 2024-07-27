"use client";

import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';

const Banner_cover = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const circleRef1 = useRef<HTMLDivElement>(null);
  if (!isHomePage) return null; // Updated to return null if not the home page

  return (
    <div className="circle-container">
      <div
        ref={circleRef1}
        className="banner-wcircle"
        style={{
          width: '70vh',
          height: '70vh',
          transition: 'transform 0.3s ease-in-out',
          background: 'linear-gradient(30deg, #114147 0%, #A7B5B7 50%, #727F81 100%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '30%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default Banner_cover;
