"use client"; // Add this line at the top

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './FeaturedSection.module.css';

interface FeaturedItem {
  id: number;
  title: string;
  imgSrc: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: 'Item 1',
    imgSrc: '/images/featured1.jpg',
  },
  {
    id: 2,
    title: 'Item 2',
    imgSrc: '/images/featured2.jpg',
  },
  {
    id: 3,
    title: 'Item 3',
    imgSrc: '/images/featured3.jpg',
  },
  {
    id: 4,
    title: 'Item 4',
    imgSrc: '/images/featured4.jpg',
  },
  {
    id: 5,
    title: 'Item 5',
    imgSrc: '/images/featured5.jpg',
  },
  {
    id: 6,
    title: 'Item 6',
    imgSrc: '/images/featured6.jpg',
  },
];

const FeaturedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight) {
          const items = section.querySelectorAll(`.${styles.featuredItem}`);
          items.forEach(item => {
            item.classList.add(styles.visible);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Items</h2>
      <div className={styles.featuredItems}>
        <div className={styles.firstRow}>
          {featuredItems.slice(0, 3).map(item => (
            <div key={item.id} className={styles.featuredItem}>
              <Image src={item.imgSrc} alt={`Featured ${item.title}`} width={300} height={200} className={styles.image} />
              <div className={styles.featuredItemOverlay}></div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <div className={styles.secondRow}>
          {featuredItems.slice(3).map(item => (
            <div key={item.id} className={styles.featuredItem}>
              <Image src={item.imgSrc} alt={`Featured ${item.title}`} width={300} height={200} className={styles.image} />
              <div className={styles.featuredItemOverlay}></div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
