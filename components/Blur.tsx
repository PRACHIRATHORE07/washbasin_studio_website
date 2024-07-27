"use client";

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './Blur.css';

const BlurCircle: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const circleRef3 = useRef<HTMLDivElement>(null);
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x: 0, y: 0 });
  const [position3, setPosition3] = useState({ x: 0, y: 0 });
  const [size1, setSize1] = useState('20vh');
  const [size2, setSize2] = useState('20vh');
  const [size3, setSize3] = useState('20vh');
  const [isGrowing1, setIsGrowing1] = useState(true);
  const [isGrowing2, setIsGrowing2] = useState(true);
  const [isGrowing3, setIsGrowing3] = useState(true);

  useEffect(() => {
    if (!isHomePage) return;

    const moveCircle = (
      circleRef: React.RefObject<HTMLDivElement>,
      setPosition: any,
      setSize: any,
      isGrowing: boolean,
      setIsGrowing: any,
      otherPositions: Array<{ x: number; y: number; }>
    ) => {
      if (circleRef.current) {
        const stepSize = 600;
        let newX = Math.random() * window.innerWidth;
        let newY = Math.random() * window.innerHeight;

        const newSize = isGrowing ? '30vh' : '10vh';
        setIsGrowing(!isGrowing);

        if (detectCollision(newX, newY, otherPositions, parseFloat(newSize))) {
          newX = Math.random() * window.innerWidth;
          newY = Math.random() * window.innerHeight;
        }

        circleRef.current.style.opacity = '0';
        setTimeout(() => {
          setSize(newSize);
          setPosition({ x: newX, y: newY });
          if (circleRef.current) {
            circleRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
            circleRef.current.style.width = newSize;
            circleRef.current.style.height = newSize;
            circleRef.current.style.opacity = '1';
          }
        }, 300);
      }
    };

    const detectCollision = (
      x: number,
      y: number,
      otherPositions: Array<{ x: number; y: number; }>,
      size: number
    ) => {
      return otherPositions.some(otherPosition => {
        const distance = Math.sqrt((x - otherPosition.x) ** 2 + (y - otherPosition.y) ** 2);
        return distance < size;
      });
    };

    const initialX1 = Math.random() * window.innerWidth;
    const initialY1 = Math.random() * window.innerHeight;
    setPosition1({ x: initialX1, y: initialY1 });
    setSize1('20vh');
    if (circleRef1.current) {
      circleRef1.current.style.transform = `translate(${initialX1}px, ${initialY1}px)`;
      circleRef1.current.style.width = '20vh';
      circleRef1.current.style.height = '20vh';
      circleRef1.current.style.opacity = '1';
    }

    const initialX2 = Math.random() * window.innerWidth;
    const initialY2 = Math.random() * window.innerHeight;
    setPosition2({ x: initialX2, y: initialY2 });
    setSize2('20vh');
    if (circleRef2.current) {
      circleRef2.current.style.transform = `translate(${initialX2}px, ${initialY2}px)`;
      circleRef2.current.style.width = '20vh';
      circleRef2.current.style.height = '20vh';
      circleRef2.current.style.opacity = '1';
    }

    const initialX3 = Math.random() * window.innerWidth;
    const initialY3 = Math.random() * window.innerHeight;
    setPosition3({ x: initialX3, y: initialY3 });
    setSize3('20vh');
    if (circleRef3.current) {
      circleRef3.current.style.transform = `translate(${initialX3}px, ${initialY3}px)`;
      circleRef3.current.style.width = '20vh';
      circleRef3.current.style.height = '20vh';
      circleRef3.current.style.opacity = '1';
    }

    const interval1 = setInterval(
      () => moveCircle(circleRef1, setPosition1, setSize1, isGrowing1, setIsGrowing1, [position2, position3]),
      3000
    );
    const interval2 = setInterval(
      () => moveCircle(circleRef2, setPosition2, setSize2, isGrowing2, setIsGrowing2, [position1, position3]),
      3000
    );
    const interval3 = setInterval(
      () => moveCircle(circleRef3, setPosition3, setSize3, isGrowing3, setIsGrowing3, [position1, position2]),
      3000
    );

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [isHomePage, isGrowing1, isGrowing2, isGrowing3]);

  if (!isHomePage) {
    return null;
  }

  return (
    <div className="circle-container">
      <div
        ref={circleRef1}
        className="blur-circle white-circle"
        style={{ width: size1, height: size1 }}
      />
      <div
        ref={circleRef2}
        className="blur-circle sky-circle"
        style={{ width: size2, height: size2 }}
      />
      <div
        ref={circleRef3}
        className="blur-circle grey-circle"
        style={{ width: size3, height: size3 }}
      />
    </div>
  );
};

export default BlurCircle;
