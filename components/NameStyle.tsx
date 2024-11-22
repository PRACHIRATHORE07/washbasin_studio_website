import React from 'react';
import './ScrollingImage.css';

const ScrollingImage: React.FC = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-track">
        <img
          src="/images/NameStyle.png"
          alt="Scrolling"
          className="scrolling-image"
        />
        <img
          src="/images/NameStyle.png"
          alt="Scrolling Duplicate"
          className="scrolling-image"
        />
        <img
          src="/images/NameStyle.png"
          alt="Scrolling Duplicate"
          className="scrolling-image"
        />
      </div>
    </div>
  );
};

export default ScrollingImage;
