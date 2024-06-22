import React from 'react';
import Image from 'next/image';
import styles from './FeaturedSection.module.css';

interface FeaturedItem {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: 'Item 1',
    description: 'This is a brief description of the featured item.',
    imgSrc: '/images/featured1.jpg',
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'This is a brief description of the featured item.',
    imgSrc: '/images/featured2.jpg',
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'This is a brief description of the featured item.',
    imgSrc: '/images/featured3.jpg',
  },
  {
    id: 4,
    title: 'Item 4',
    description: 'This is a brief description of the featured item.',
    imgSrc: '/images/featured4.jpg',
  },
  {
    id: 5,
    title: 'Item 5',
    description: 'This is a brief description of the featured item.',
    imgSrc: '/images/featured5.jpg',
  },
];

const FeaturedSection: React.FC = () => {
  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Items</h2>
      <div className={styles.featuredItems}>
        {featuredItems.map(item => (
          <div key={item.id} className={styles.featuredItem}>
            <Image src={item.imgSrc} alt={`Featured ${item.title}`} width={300} height={200} className={styles.image} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
