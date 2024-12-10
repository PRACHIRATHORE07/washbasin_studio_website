"use client";

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './Blur.css';  // Import the CSS file

const BlurCircle: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isHomePage) return;

    const moveCircle = (circleRef, setPosition, position, otherPosition) => {
      if (circleRef.current) {
        const maxX = window.innerWidth - circleRef.current.clientWidth;
        const maxY = window.innerHeight - circleRef.current.clientHeight;

        const stepSize = 600; // Adjust this value for larger movements
        let newX = position.x + (Math.random() - 0.5) * stepSize;
        let newY = position.y + (Math.random() - 0.5) * stepSize;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        if (detectCollision(newX, newY, otherPosition, circleRef.current.clientWidth)) {
          newX = position.x;
          newY = position.y;
        }

        setPosition({ x: newX, y: newY });
        circleRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
    };

    const detectCollision = (x, y, otherPosition, size) => {
      const distance = Math.sqrt((x - otherPosition.x) ** 2 + (y - otherPosition.y) ** 2);
      return distance < size;
    };

    const initialX1 = (window.innerWidth - (circleRef1.current?.clientWidth || 0)) / 2;
    const initialY1 = (window.innerHeight - (circleRef1.current?.clientHeight || 0)) / 2;
    setPosition1({ x: initialX1, y: initialY1 });
    if (circleRef1.current) {
      circleRef1.current.style.transform = `translate(${initialX1}px, ${initialY1}px)`;
    }

    const initialX2 = (window.innerWidth - (circleRef2.current?.clientWidth || 0)) / 3;
    const initialY2 = (window.innerHeight - (circleRef2.current?.clientHeight || 0)) / 3;
    setPosition2({ x: initialX2, y: initialY2 });
    if (circleRef2.current) {
      circleRef2.current.style.transform = `translate(${initialX2}px, ${initialY2}px)`;
    }

    const interval1 = setInterval(() => moveCircle(circleRef1, setPosition1, position1, position2), 300);
    const interval2 = setInterval(() => moveCircle(circleRef2, setPosition2, position2, position1), 300);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [isHomePage]);

  if (!isHomePage) {
    return null;
  }

  return (
    <div className="circle-container">

      <div
        ref={circleRef1}
        className="blur-circle white-circle"
        style={{ width: '20vh', height: '20vh', transition: 'transform 0.3s ease-in-out' }}
      />
      <div
        ref={circleRef2}
        className="blur-circle sky-circle"
        style={{ width: '20vh', height: '20vh', transition: 'transform 0.3s ease-in-out' }}
      />
    </div>
  );
};

export default BlurCircle;
