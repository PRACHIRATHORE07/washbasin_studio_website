"use client";
import React, { useState, useEffect, useRef } from 'react';
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

const FeaturedSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<FeaturedItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (item: FeaturedItem) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div ref={sectionRef} className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Items</h2>
      <div className={styles.featuredItems}>
        <div className={styles.firstRow}>
          {featuredItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`${styles.featuredItem} ${scrolled ? styles.scrolled : ''}`}
              style={{ margin: '20px' }} // add margin between images
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={500} // increase image width
                height={350} // increase image height
                className={styles.image}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                onClick={() => handleClick(item)}
              />
              <div className={styles.featuredItemOverlay}></div>
            </div>
          ))}
        </div>
        <div className={styles.secondRow}>
          {featuredItems.slice(3).map((item) => (
            <div
              key={item.id}
              className={`${styles.featuredItem} ${scrolled ? styles.scrolled : ''}`}
              style={{ margin: '20px' }} // add margin between images
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={500} // increase image width
                height={350} // increase image height
                className={styles.image}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                onClick={() => handleClick(item)}
              />
              <div className={styles.featuredItemOverlay}></div>
            </div>
          ))}
        </div>
      </div>
      {lightboxOpen && selectedImage && (
        <div className={styles.lightbox}>
          <Image
            src={selectedImage.imgSrc}
            alt={selectedImage.title}
            width={1200} // increase lightbox image width
            height={900} // increase lightbox image height
            className={styles.lightboxImage}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
          <span className={styles.lightboxClose} onClick={handleCloseLightbox}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default FeaturedSection;