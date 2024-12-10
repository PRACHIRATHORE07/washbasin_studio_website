"use client"

import React, { useRef } from 'react';

const Banner_cover = () => {
    const circleRef1 = useRef<HTMLDivElement>(null);

    return(
    <div className="circle-container">
      <div
        ref={circleRef1}
        className="banner-wcircle"
        style={{ width: '70vh', height: '70vh', transition: 'transform 0.3s ease-in-out' }}
      />
      <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '30%', background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)', pointerEvents: 'none' }} />
     
     
      </div>
      
    )
};

export default Banner_cover;